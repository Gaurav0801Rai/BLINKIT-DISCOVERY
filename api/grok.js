// Secure Serverless Function for Groq AI API Integration
// Runs server-side. GROQ_API_KEY / GROK_API_KEY is read securely from environment variables.

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const apiKey = process.env.GROQ_API_KEY || process.env.GROK_API_KEY;

  if (!apiKey || apiKey.trim() === '') {
    return res.status(400).json({ 
      error: 'GROQ_API_KEY is missing from environment variables.',
      fallback: true
    });
  }

  try {
    const { action, cart = [], pastOrders = [], householdData = {}, product = {} } = req.body || {};

    let systemPrompt = '';
    let userPrompt = '';

    if (action === 'checkout-nudge') {
      systemPrompt = `You are the AI Recommendation Engine for Blinkit, India's 8-minute quick commerce app.
Return ONLY valid JSON matching this exact structure:
{
  "productName": "string",
  "categoryKey": "string",
  "categoryName": "string",
  "price": number,
  "whyThisExplanation": "string (1 line starting with 'Why this? ...')"
}`;
      
      const cartNames = cart.map(i => i.name).join(', ') || 'General groceries';
      const pastItems = pastOrders.flatMap(o => o.items.map(i => i.name)).join(', ') || 'No past purchases';
      
      userPrompt = `Active Household Context: ${householdData.name || 'Family'}.
Current Cart Items: ${cartNames}.
Past Order History: ${pastItems}.

Recommend ONE specific relevant new product from a category the user has NOT bought yet in this session. Write a natural 1-line "why this?" explanation based on their cart items. Do not include markdown code blocks in output.`;

    } else if (action === 'search-suggestions') {
      systemPrompt = `You are the Search AI Engine for Blinkit.
Return ONLY valid JSON matching this exact structure:
{
  "suggestions": [
    { "label": "✨ Try [Product/Category]", "query": "Search query" },
    { "label": "✨ Try [Product/Category]", "query": "Search query" },
    { "label": "✨ Try [Product/Category]", "query": "Search query" },
    { "label": "✨ Try [Product/Category]", "query": "Search query" }
  ]
}`;

      const pastItems = pastOrders.flatMap(o => o.items.map(i => i.name)).join(', ') || 'None';
      userPrompt = `Active Household Context: ${householdData.name || 'Family'}. Past Orders: ${pastItems}.
Suggest 4 brand new cross-category product discovery ideas for the search bar. Do not include markdown code blocks.`;

    } else if (action === 'product-reviews') {
      systemPrompt = `You are a Customer Review Generator for Blinkit products.
Return ONLY valid JSON matching this exact structure:
{
  "reviews": [
    { "user": "string", "rating": 5, "verified": true, "text": "string (1-2 sentences)", "date": "27 Jul 2026" },
    { "user": "string", "rating": 5, "verified": true, "text": "string (1-2 sentences)", "date": "26 Jul 2026" },
    { "user": "string", "rating": 4, "verified": true, "text": "string (1-2 sentences)", "date": "25 Jul 2026" },
    { "user": "string", "rating": 5, "verified": true, "text": "string (1-2 sentences)", "date": "24 Jul 2026" }
  ]
}`;

      userPrompt = `Product: ${product.name || 'Grocery item'}, Category: ${product.categoryName || 'General'}, Price: ₹${product.price || 100}.
Generate 4 short, realistic customer reviews highlighting category trust (freshness for food, performance for tech, genuine quality for beauty/pet). All review dates MUST strictly be in 2026 (e.g. '27 Jul 2026', '26 Jul 2026'). Do not include markdown code blocks.`;

    } else {
      return res.status(400).json({ error: 'Invalid action' });
    }

    // Call Groq API Endpoint (Fast Llama 3.3 / 3.1 model)
    const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'llama-3.3-70b-versatile',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        temperature: 0.6,
        response_format: { type: 'json_object' }
      })
    });

    if (!response.ok) {
      const errText = await response.text();
      return res.status(502).json({ error: `Groq API error: ${response.status}`, details: errText, fallback: true });
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return res.status(500).json({ error: 'Empty completion from Groq AI', fallback: true });
    }

    const parsedData = JSON.parse(content);
    return res.status(200).json({ success: true, data: parsedData });

  } catch (error) {
    console.error('[Groq API Handler Error]:', error);
    return res.status(500).json({ error: error.message, fallback: true });
  }
}
