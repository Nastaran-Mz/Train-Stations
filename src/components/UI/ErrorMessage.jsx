/**
 * Reusable error message component
 */
const ErrorMessage = ({ error, onRetry }) => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-red-50 border-2 border-red-200 rounded-lg p-8 max-w-md shadow-lg">
        <div className="flex items-center mb-4">
          <svg 
            className="w-8 h-8 text-red-600 mr-3" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" 
            />
          </svg>
          <h2 className="text-red-800 font-bold text-xl">Error Loading Data</h2>
        </div>
        <p className="text-red-700 mb-4">{error}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded transition-colors"
          >
            Try Again
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorMessage;