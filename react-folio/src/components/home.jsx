import React from "react";
import face from "../assets/Face.png";


const Home = () => {
  return (
    <div name="landingpage" className="w-full h-screen bg-[#3c1414]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <img
          className="ml-auto rounded-full "
          src={face}
          alt="face"
          style={{ width: "200px" }}
        />
        <p className="text-lg text-gray-500">Hi My Name Is</p>
        <h1 className="text-3xl sm:text-7xl font-bold text-[#ad8f18]">
          Patrick Ingram
        </h1>

        <h2 className="text-4xl mt-4 max-w-[900px] text-gray-500 inline border-b-4 border-[#ad8f18] ">
          "The only thing standing between you and outrageous success is
          continuous progress"-Dan Waldschmidt, business strategist
        </h2>
        <div>
         
        </div>
      </div>
    </div>
  );
};

export default Home;