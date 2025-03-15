import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaFileDownload } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-6">
      <nav className="flex justify-center space-x-6 mb-4">
        <a href="#" className="hover:text-white">Home</a>
        <a href="#" className="hover:text-white">About</a>
        <a href="#" className="hover:text-white">Projects</a>
        <a href="#" className="hover:text-white">Contact</a>
      </nav>
      <div className="flex flex-col items-center gap-4 mb-4">
        <div className="flex justify-center space-x-4">
          <a 
            href="https://github.com/TirthNaik-99" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a 
            href="https://www.linkedin.com/in/tirthnaik" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a 
            href="https://www.instagram.com/tirth_naik/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </div>
        <a
          href="/Tirth_Naik_Resume.pdf" 
          download="Tirth_Naik_Resume.pdf"
          className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-600 text-white rounded-md hover:bg-cyan-700 transition-colors"
        >
          <FaFileDownload size={18} />
          Download Resume
        </a>
      </div>
      <p className="text-gray-500">
      Find me here : <a className="text-cyan-400 hover:underline">naik.ti@northeastern.edu</a> <br/>
        Copyright © <a href="#" className="text-cyan-400 hover:underline">Tirth Naik</a> - All rights reserved 
        
      </p>
    </footer>
  );
};

export default Footer;
