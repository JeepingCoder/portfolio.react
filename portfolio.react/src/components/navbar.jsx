import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter  } from "react-icons/fa";
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from "../assets/patchlogo.png";

const Navbar = () => {
  const [navi, setNavi] = useState(false);
  const handleClick = () => setNavi(!navi);

  return (
    <div className="fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#333333]">
      <div>
        <img src={Logo} alt="logo image" style={{ width: "80px" }} />
      </div>
      {/* This is my menu */}
      <div>
        <ul className="hidden md:flex  text-[#36454F]">
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Hamburger Menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!navi ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          !navi
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center "
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Contact</li>
      </ul>

      {/* Social Media Icons */}
      <div className="flex fixed flex-col top-[35%] left-0">
        <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-600 bg-[#238636] ">
                <a className="flex justify-between items-center w-full text-white" href="/">
                    Github <FaGithub size={25} />
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-600 bg-[#0a66c2] ">
                <a className="flex justify-between items-center w-full text-white" href="/">
                    Linkedin <FaLinkedin size={25} />
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-600 bg-[#1D9BF0] ">
                <a className="flex justify-between items-center w-full text-white" href="/">
                    Twitter <FaTwitter size={25} />
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-600 bg-[#FFA500] ">
                <a className="flex justify-between items-center w-full text-white" href="/">
                    Email <HiOutlineMail size={25} />
                </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-600 bg-[#555D50] ">
                <a className="flex justify-between items-center w-full text-white" href="/">
                    Resume <BsFillPersonLinesFill size={25} />
                </a>
            </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
