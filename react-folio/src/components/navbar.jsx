import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import { BsPaperclip } from "react-icons/bs";
import Logo from "../assets/Hannah.png";
import { Link } from "react-scroll";


const Navbar = () => {
  const [navi, setNavi] = useState(false);
  const handleClick = () => setNavi(!navi);

  return (
    <div className="z-50 fixed w-full h-[150px] flex justify-between items-center px-4 bg-[#333333] text-[#AD8F18] text-2xl ">
      <div>
        <a href="../components/home.jsx">
        <img
          className="rounded-full"
          src={Logo}
          alt="logo"
          style={{ width: "155px" }}
        />
        </a>
        
      </div>

      <div>
        <ul className="hidden md:flex  ">
          <li>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to="applications" smooth={true} duration={500}>
              Applications
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </li>
          {/* resume field that give a downloadable resume a list of proficiencies */}
          <li>
            <Link to="contact" smooth={true} duration={500}>
              Resume
            </Link>
          </li>
        </ul>
      </div>

      <div onClick={handleClick} className=" md:hidden z-20">
        {!navi ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}

      <ul
        className={
          !navi
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center "
        }
      >
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="applications" smooth={true} duration={500}>
            Applications
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="hidden lg:flex fixed flex-col top-[45%] left-0">
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
  );
};

export default Navbar;