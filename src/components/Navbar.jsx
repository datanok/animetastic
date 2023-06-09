import React, { useState } from "react";
import { Link } from "react-router-dom";
import img from "../static/images/logo.png";

import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center py-2 max-w-[100%] mx-auto px-4 bg-slate-900 text-white border-b border-sky-300 lg:px-8 sticky top-0 z-10 lg:mx-0 ">
      <span className="flex gap-1">
        <Link to="/">
          <img
            className=" h-8 hover:rotate-180 transition duration-500"
            src={img}
            alt="logo"
          />
        </Link>
        <Link to="/">
          {" "}
          <h1 className="w-full text-2xl  font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-700 to-sky-300">
            AnimeTastic
          </h1>
        </Link>
      </span>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-sky-400">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-sky-400">
          <Link to="/search">Search</Link>
        </li>
        <li className="p-4 hover:text-sky-400">
          {" "}
          <Link to="/Categories">Categories</Link>
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] bg-slate-900 h-full border-b border-r border-slate-900/10 lg:px-8 opacity-100  ease-in-out duration-500 z-50 inset-0 lg:hidden"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[##421231] m-4">
          Animetastic
        </h1>
        <li className="p-4 hover:text-sky-400">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-sky-400">
          <Link to="/search">Search</Link>
        </li>
        <li className="p-4 hover:text-sky-400">Categories</li>
      </ul>
    </div>
  );
};

export default Navbar;
