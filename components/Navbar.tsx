
import React from 'react';

export const Navbar: React.FC = () => {
  const links = [
    "Best Sellers",
    "All Products",
    "About Us",
    "Blog",
    "Business Enquiry"
  ];

  return (
    <nav className="sticky top-16 md:top-20 w-full bg-white/95 backdrop-blur-sm z-[90] border-b-2 border-brandOrange py-5 px-6 md:px-12 flex justify-between items-center">
      <div className="logo-text text-2xl tracking-tighter text-black flex items-center">
        SNACKBURST<span className="text-brandOrange text-4xl leading-none">.</span>
      </div>
      
      <div className="hidden lg:flex items-center space-x-10">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            className="font-poppins font-bold text-[11px] transition-colors duration-300 hover:text-brandOrange uppercase tracking-[0.25em]"
          >
            {link}
          </a>
        ))}
      </div>

      <div className="flex items-center">
        <button className="lg:hidden text-black">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </nav>
  );
};
