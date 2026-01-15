import React, { useState } from 'react';

export default function AIAssistantButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const suggestions = [
    "How do Categories and the Posting Plan help automate my social media?",
    "How can Evergreen and Variations save me time while keeping posts fresh?",
    "How do Workspaces make it easier to manage multiple brands or clients?",
    "What roles and permissions can my team use to collaborate effectively?"
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Panel */}
      <div
        className={`absolute bottom-20 right-0 w-96 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ease-out origin-bottom-right ${
          isOpen
            ? 'opacity-100 scale-100 translate-y-0'
            : 'opacity-0 scale-95 translate-y-4 pointer-events-none'
        }`}
        style={{ maxHeight: '600px' }}
      >
        {/* Header with gradient */}
        <div
          className="relative h-40 flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #e8e0f0 0%, #d4e5f7 50%, #e8f4ec 100%)'
          }}
        >
          {/* Back button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 left-4 text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          {/* AI Icon */}
          <div className="w-14 h-14 bg-indigo-500 rounded-2xl flex items-center justify-center mb-3 shadow-lg">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">AI Answers</h2>
        </div>

        {/* Chat content */}
        <div className="p-4 flex flex-col h-96">
          {/* AI Message */}
          <div className="mb-4">
            <span className="text-xs text-gray-500 mb-2 block">AI assistant</span>
            <div className="bg-gray-100 rounded-2xl rounded-tl-md p-4 text-sm text-gray-700">
              👋 Hi there! I can help you find answers from the SmarterQueue{' '}
              <a href="#" className="text-blue-500 hover:underline">Help Center</a>{' '}
              or guide you to the right next step. What would you like to know today?
            </div>
          </div>

          {/* Suggestions */}
          <div className="flex-1 overflow-y-auto">
            <span className="text-xs text-gray-500 mb-3 block text-right">Suggestions</span>
            <div className="space-y-2">
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="w-full text-left p-3 border border-gray-200 rounded-xl text-sm text-gray-700 hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-200"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="mt-4 pt-4 border-t border-gray-100">
            <input
              type="text"
              placeholder="Ask a question..."
              className="w-full px-4 py-3 bg-gray-50 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-300 transition-all"
            />
          </div>
        </div>
      </div>

      {/* Tooltip */}
      <div
        className={`absolute bottom-20 right-0 transition-all duration-200 ${
          isHovered && !isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'
        }`}
      >
        <div className="bg-gray-800 text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap mb-2">
          ⌘ + Shift + K
        </div>
        <div className="bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-500 rounded-lg flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
              <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
            </svg>
          </div>
          <span className="text-sm font-medium text-gray-700">Ask AI</span>
        </div>
      </div>

      {/* Main Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`relative w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-300 ease-out ${
          isOpen
            ? 'bg-gray-200 rotate-45'
            : 'bg-indigo-500 hover:bg-indigo-600 hover:scale-110 hover:shadow-xl hover:shadow-indigo-500/30'
        }`}
        style={{
          boxShadow: isHovered && !isOpen
            ? '0 10px 40px -10px rgba(99, 102, 241, 0.5)'
            : '0 4px 20px -5px rgba(99, 102, 241, 0.4)'
        }}
      >
        {/* Animated sparkle icon */}
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill={isOpen ? '#6366f1' : 'white'}
          className={`transition-all duration-300 ${isHovered && !isOpen ? 'animate-pulse' : ''}`}
        >
          <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
        </svg>

        {/* Hover ring animation */}
        <div
          className={`absolute inset-0 rounded-2xl border-2 border-indigo-400 transition-all duration-300 ${
            isHovered && !isOpen ? 'scale-125 opacity-0' : 'scale-100 opacity-0'
          }`}
          style={{
            animation: isHovered && !isOpen ? 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite' : 'none'
          }}
        />
      </button>

      {/* Custom keyframes */}
      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }
      `}</style>
    </div>
  );
}
