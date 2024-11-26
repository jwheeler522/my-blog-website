import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { motion } from 'framer-motion';
import { ThemeToggle } from './ThemeToggle';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 dark:bg-slate-900/80 border-b border-slate-200 dark:border-slate-700 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-3">
          <StaticImage
            src="../images/brand_logo.webp"
            alt="Brand Logo"
            className="h-12 w-12 rounded-full shadow-lg"
          />
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-2xl font-bold gradient-text"
          >
            DUNE side
          </motion.div>
        </Link>
        
        <div className="flex items-center space-x-8">
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/blog">Blog</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </div>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
};

const NavLink = ({ to, children }) => (
  <Link 
    to={to} 
    className="nav-link text-base font-medium"
  >
    {children}
  </Link>
);

export default Header;
