import React, { useState } from "react";
import { BsPaperclip } from "react-icons/bs";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaTwitter,
  } from "react-icons/fa";
const Contact = () => {
  
    return (

    <div name="contact" className="w-full h-screen bg-[#3c1414] text-gray-500">
      <div className="w-full h-full max-w-[1000px] mx-auto px-8 flex flex-col justify-center">
        <div>
          <div className="sm-text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#ad8f18]">
              Contact
            </p>
            <div>
           

      <div className="h-screen flex pt-40 justify-center ">
        <ul>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-600 bg-[#238636] font-Ubuntu rounded-md">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://github.com/JeepingCoder"
            >
              Github <FaGithub size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center rounded-md ml-[-100px] hover:ml-[-10px] duration-600 bg-[#0a66c2] ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://www.linkedin.com/in/ingrampr/"
            >
              Linkedin <FaLinkedin size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center rounded-md ml-[-100px] hover:ml-[-10px] duration-600 bg-[#1D9BF0] ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://twitter.com/pingram1285"
            >
              Twitter <FaTwitter size={25} />
            </a>
          </li>
          <li className="w-[150px] h-[50px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-600 bg-[#555D50] rounded-md ">
            <a
              className="flex justify-between items-center w-full text-white"
              href="https://docs.google.com/document/d/1zMz9srtNIIRJgsFK5hhEM6UgaSL1hLqErHv5eOR_8OI/edit?usp=sharing"
            >
              Resume <BsPaperclip size={25} />
            </a>
          </li>
        </ul>
        </div>
            </div>
          
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
