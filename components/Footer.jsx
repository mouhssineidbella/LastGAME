import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white p-6 text-center">
      <div className="mb-4">
        <p>&copy; 2024 GamesPlay. All Rights Reserved.</p>
      </div>
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
          <FaFacebook />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-orange-500">
          <FaLinkedin />
        </a>
      </div>
      <div className="text-sm">
        <a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a> | 
        <a href="/terms-of-service" className="hover:text-orange-500"> Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
