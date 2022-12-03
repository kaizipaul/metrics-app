import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowLeft, FaCog, FaMicrophone } from 'react-icons/fa';

const NavBar = () => (
  <nav className="fixed z-10 w-full flex justify-between items-center px-2 py-2 bg-sky-600/50 shadow-sm backdrop-blur-lg">
    <div className="flex items-center gap-2">
      <NavLink className="links" to="/">
        <FaArrowLeft />
      </NavLink>
      <div>
        <NavLink className="links" to="/">
          <h1 className="text-[1.5rem] leading-tight">Rick & Morty DB </h1>
        </NavLink>
      </div>
    </div>
    <div className="flex gap-4">
      <FaCog />
      <FaMicrophone />
    </div>
  </nav>
);

export default NavBar;
