import React from "react";
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home =() =>{
    return(
        <div name= 'landingpage' className="w-full h-screen bg-[#3c1414]">
            {/* container */}
            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-lg text-gray-500">Hi My Name Is</p>
                <h1 className="text-3xl sm:text-7xl font-bold text-[#ad8f18]">Patrick Ingram</h1>
                <h2 className="text-4xl mt-4 max-w-[900px] text-gray-500 ">"The only thing standing between you and outrageous success is continuous progress"-Dan Waldschmidt, business strategist</h2>
                <div>
            <button className="text-black flex itesm-center font-medium text bg-white text-med border-4 border-white rounded-full mt-6 px-8 hover:bg-[#ad8f18] hover:border-[#ad8f18] ">View Projects<HiArrowNarrowRight/></button>
            </div>
            </div>
            

        </div>
    )
}

export default Home