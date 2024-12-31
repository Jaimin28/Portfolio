import React from "react";
import user from "../assets/user.jpg";
import background from "../assets/background.jpg";

function Info() {
  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <div className="absolute w-full h-screen right-0">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2"
          alt="Portrait"
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      {/* <div className="absolute left-5 top-0  -translate-x-1/2 w-full   h-screen bg-black opacity-10 dark:opacity-80 blur-3xl" />  */}

      <div className="relative z-10 max-w-7xl mx-auto h-full flex items-center">
        <div className="p-6 absolute bottom-20">
          <h1 className="text-8xl  font-bold text-white mb-4 leading-tight">
            Amalia<br />Sanchez
          </h1>
          <p className="text-[#868686] text-xl max-w-xl">
            Hello, my name is Amalia Sanchez, nice to meet you! I would like to
            welcome you with my personal portfolio.
          </p>
        </div>
      </div>
      <div className="absolute bottom-0  translate-y-1/2 w-full h-80 bg-black opacity-10 dark:opacity-100 blur-3xl" /> 
      
    </div>
  );
}

export default Info;
