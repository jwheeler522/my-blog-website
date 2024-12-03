import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header className="bg-gray-800 text-white p-4">
    <nav>
      <ul className="flex space-x-4">
        <li><Link to="/" className="hover:text-gray-400">Home</Link></li>
        <li><Link to="/about" className="hover:text-gray-400">About</Link></li>
        <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
