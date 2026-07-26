import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  // Inject GROQ_API_KEY / GROK_API_KEY into process.env for local API route execution
  const apiKey = env.GROQ_API_KEY || env.GROK_API_KEY;
  if (apiKey) {
    process.env.GROQ_API_KEY = apiKey;
    process.env.GROK_API_KEY = apiKey;
  }

  return {
    plugins: [
      react(),
      {
        name: 'api-grok-middleware',
        configureServer(server) {
          server.middlewares.use('/api/grok', async (req, res, next) => {
            if (req.method === 'POST') {
              let body = '';
              req.on('data', chunk => { body += chunk; });
              req.on('end', async () => {
                try {
                  req.body = JSON.parse(body || '{}');
                } catch (e) {
                  req.body = {};
                }

                try {
                  const grokModule = await import('./api/grok.js');
                  const grokHandler = grokModule.default;
                  
                  const mockRes = {
                    status(code) {
                      res.statusCode = code;
                      return mockRes;
                    },
                    json(data) {
                      res.setHeader('Content-Type', 'application/json');
                      res.end(JSON.stringify(data));
                      return mockRes;
                    }
                  };

                  await grokHandler(req, mockRes);
                } catch (err) {
                  res.statusCode = 500;
                  res.setHeader('Content-Type', 'application/json');
                  res.end(JSON.stringify({ error: err.message, fallback: true }));
                }
              });
            } else {
              next();
            }
          });
        }
      }
    ],
    server: {
      port: 3000,
      open: true
    }
  };
});
