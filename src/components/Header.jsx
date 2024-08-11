import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaGithub, FaInstagram, FaTwitter, FaLinkedin } from 'react-icons/fa';

function Header() {
  const [showSocials, setShowSocials] = useState(false);

  const handleButtonClick = () => {
    setShowSocials(!showSocials);
  };

  const handleCloseClick = () => {
    setShowSocials(false);
  };

  return (
    <header className='relative py-8'>
      <div className="container mx-auto">
        <div className='flex justify-between items-center'>
          <a href="#">
            <img src={logo} alt="Logo" width={'100px'} height={'100px'} />
          </a>
          <button className='btn btn-sm' onClick={handleButtonClick}>
            Work With Me
          </button>
        </div>
      </div>

      {/* Social Media Section */}
      {showSocials && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={handleCloseClick}
        >
          <div
            className="w-72 h-40 bg-black p-6 rounded-lg shadow-lg transform transition-transform duration-500 ease-in-out"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className='text-center text-lg font-semibold mb-4'>you Can Work With Me on</h2>
            <h3 className="text-center text-lg font-semibold mb-4">My Socials</h3>
            <ul className="flex justify-around text-lg">
              <a href="https://www.instagram.com/bohemianisme_omar/">
                <FaInstagram />
              </a>
              <a href="https://github.com/omarUsB">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/omar-khalil-a45734302/">
                <FaLinkedin />
              </a>
              <a href="https://x.com/OmarKha94190356">
                <FaTwitter />
              </a>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
