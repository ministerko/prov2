import React, { useState, useEffect } from 'react';
import { LoadingScreen, MainScreen } from './components';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust time as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);

  return <>{loading ? <LoadingScreen /> : <MainScreen />}</>;
};

export default App;
