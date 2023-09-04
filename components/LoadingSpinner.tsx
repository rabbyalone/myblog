import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Grey overlay */}
      <div className="fixed inset-0 bg-gray-800 opacity-75"></div>

      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
}

export default LoadingSpinner
