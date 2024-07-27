import React from 'react';
import { lg, img,ko } from '../assets';
const MainScreen = () => {
  return (
    <div className="p-10 bg-black">
      <div className="min-h-screen   bg-black text-g font-mono border-2 border-g">
        <div>
          <img
            src={lg}
            height={100}
            width={100}
            alt="logo"
            className="mt-10 ml-10 sm:mt-0 sm:ml-0 filter-green-filter"

          />
          <div>
            
          </div>
        </div>
        <div>
          <div className=" flex flex-row sm:flex-col-reverse justify-around">
            <div className=" mt-52 sm:mt-10 sm:ml-2  ml-16">
              <p className="text-2xl font-extrabold text-g sm:text-xl sm:text-center">Hi I'm Kelvin</p>
              <p className="text-4xl text-g sm:text-3xl sm:text-center">
                Multifaceted
                <br /> Technologist
              </p>
            </div>
            <div className="">
              <img src={ko} alt="hero" className="filter-green-filter" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
