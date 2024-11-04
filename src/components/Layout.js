<<<<<<< HEAD
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from './ThemeProvider';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

=======
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { ThemeProvider } from './ThemeProvider';

const Layout = ({ children }) => {
  return (
    <ThemeProvider>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

>>>>>>> 1b1e9e5396a10c00e925cce370ac6724f53e72c3
export default Layout;