import React, { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Transition to main content after 3.4 seconds
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 5000); 

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-g">
      {showContent ? (
        <div className="text-center text-5xl font-extrabold">
          {/* Main content or another component will be shown here */}
          <h1>Welcome</h1>
        </div>
      ) : (
        <div className="flex items-center justify-center space-x-3">
          <div className="w-5 h-5 bg-g rounded-full animate-bounce-dot delay-0"></div>
          <div className="w-5 h-5 bg-g rounded-full animate-bounce-dot delay-200"></div>
          <div className="w-5 h-5 bg-g rounded-full animate-bounce-dot delay"></div>
        </div>
      )}
    </div>
  );
};

export default LoadingScreen;
