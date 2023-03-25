import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center py-2 max-w-[100%] mx-auto px-4 text-white border-b border-slate-900/10 lg:px-8  dark:border-slate-300/10 lg:mx-0 ">
      <h1 className="w-full text-2xl font-bold text-sky-400">AnimeTastic</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:text-sky-400">
          <Link to="/">Home</Link>
        </li>
        <li className="p-4 hover:text-sky-400">
          <Link to="/search">Search</Link>
        </li>
        <li className="p-4 hover:text-sky-400">Resources</li>
        <li className="p-4 hover:text-sky-400">About</li>
        <li className="p-4 hover:text-sky-400">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[80%] h-full border-b border-r border-slate-900/10 lg:px-8 bg-slate-900 dark:border-slate-300/10 ease-in-out duration-500 z-50 inset-0 lg:hidden"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[##421231] m-4">
          REACT.
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">Company</li>
        <li className="p-4 border-b border-gray-600">Resources</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
