import React from 'react';
import { Link } from 'gatsby';

const Footer = () => {
  return (
    <footer className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold gradient-text">YourBlog</h3>
            <p className="text-slate-600 dark:text-slate-400">
              Empowering you with financial knowledge and insights.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Quick Links</h4>
            <ul className="space-y-2">
              <li><FooterLink to="/">Home</FooterLink></li>
              <li><FooterLink to="/blog">Blog</FooterLink></li>
              <li><FooterLink to="/about">About</FooterLink></li>
              <li><FooterLink to="/contact">Contact</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Categories</h4>
            <ul className="space-y-2">
              <li><FooterLink to="/category/finance">Finance</FooterLink></li>
              <li><FooterLink to="/category/investing">Investing</FooterLink></li>
              <li><FooterLink to="/category/savings">Savings</FooterLink></li>
              <li><FooterLink to="/category/budgeting">Budgeting</FooterLink></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-slate-900 dark:text-slate-100">Connect</h4>
            <ul className="space-y-2">
              <li><SocialLink href="https://twitter.com">Twitter</SocialLink></li>
              <li><SocialLink href="https://linkedin.com">LinkedIn</SocialLink></li>
              <li><SocialLink href="https://github.com">GitHub</SocialLink></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 text-center text-slate-600 dark:text-slate-400">
          <p>© {new Date().getFullYear()} YourBlog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }) => (
  <Link to={to} className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors">
    {children}
  </Link>
);

const SocialLink = ({ href, children }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-600 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors"
  >
    {children}
  </a>
);

export default Footer;