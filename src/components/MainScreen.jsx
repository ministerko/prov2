import React from 'react';
import { lg, img } from '../assets';
const MainScreen = () => {
  return (
    <div className="p-10 bg-black">
      <div className="min-h-screen flex  bg-black text-g font-mono border-2 border-g">
        <div>
          <img src={lg} height={100} width={100} alt="logo" className='mt-10 ml-10 green-filter' />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
