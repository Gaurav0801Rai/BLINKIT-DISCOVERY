import React from 'react';

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="w-full min-h-screen flex flex-col items-center justify-center p-6 bg-[#F7F7F5] text-[#1F1B12] text-center">
          <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-200 max-w-md space-y-4">
            <span className="material-symbols-outlined text-[48px] text-amber-500">warning</span>
            <h2 className="text-base font-extrabold">Runtime Error Caught</h2>
            <div className="p-3 bg-red-50 text-red-700 rounded-xl text-left text-xs font-mono overflow-auto max-h-40">
              {this.state.error ? this.state.error.toString() : 'Unknown Error'}
            </div>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="w-full py-2.5 bg-[#0C831F] text-white font-extrabold text-xs rounded-xl shadow-md uppercase"
            >
              Reload Prototype
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
