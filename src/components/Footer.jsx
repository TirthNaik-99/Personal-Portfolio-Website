import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6">
      <nav className="flex justify-center space-x-6 mb-4">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#" className="hover:text-white">About</a>
        <a href="#" className="hover:text-white">Projects</a>
        <a href="#" className="hover:text-white">Contact</a>
      </nav>
      <div className="flex justify-center space-x-4 mb-4">
        <a href="#" className="text-gray-400 hover:text-white">
          <FaInstagram size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaLinkedin size={20} />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <FaGithub size={20} />
        </a>
      </div>
      <p className="text-gray-500">
        Copyright © <a href="#" className="text-cyan-400 hover:underline">Tirth Naik</a> - All rights reserved
      </p>
    </footer>
  );
};

export default Footer;
