// src/components/Navbar.jsx
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { LINKS } from '../constants';

import { FaInstagram } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className=" mb-20 flex font-inter justify-between items-center py-6">
      <div className="flex flex-shrink-0 items-center">
      <a href="#" className=" text-3xl font-bold ">NP</a>
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'> 
        <a href={LINKS.linkedin} target='_blank'><FaLinkedinIn /></a>
        <a href={LINKS.github} target='_blank'><FaGithub /></a>
        <a href={LINKS.instagram} target='_blank'><FaInstagram /></a>

      </div>
    </nav>
  );
};

export default Navbar;