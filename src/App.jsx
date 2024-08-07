import React from 'react';
import { useState, useEffect } from 'react';
import { IoIosMoon } from "react-icons/io";
import { IoSunnySharp } from "react-icons/io5";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

 useEffect(() => {
   if (darkMode) {
     document.documentElement.classList.add("dark");
   } else {
     document.documentElement.classList.remove("dark");
   }
 }, [darkMode]);

 const handleMode = () => {
   setDarkMode(!darkMode);
 };

  return (
    <>
      <div className="bg-white dark:bg-gray-900 dark:text-white">
        <div className="text-center pt-11 pb-11 relative">
          <div className="absolute right-[150px] text-[22px]">
            {darkMode ? (
              <IoSunnySharp onClick={handleMode} />
            ) : (
              <IoIosMoon onClick={handleMode} />
            )}

            {/* <FaMoon onClick={handleMode} />
            <IoIosSunny onClick={handleMode}/> */}
          </div>
          <h1 className="font-bold text-[32px]">Rajibul Islam Rajib</h1>
          <div className="mt-8">
            <h2 className="font-semibold text-[24px] text-slate-600 dark:text-slate-200">
              MERN Stack Developer
            </h2>
            <p className="text-[18px] text-slate-400 dark:text-white mt-4">
              I'm a full stack developer with front-end developer and app
              developer. <br /> Work by ReactJS.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App
