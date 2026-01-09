import React from 'react';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-transparent relative z-10">
      <div className="container mx-auto px-6 py-8 text-center text-white/30">
        <div className="flex justify-center mb-6 opacity-70 scale-75">
          <Logo />
        </div>
        <p className="text-[9px] font-light tracking-[0.4em] uppercase mb-2">&copy; {new Date().getFullYear()} THE FREQUENCY CODE™. All Rights Reserved.</p>
        <p className="max-w-xl mx-auto text-[8px] font-extralight tracking-tight leading-relaxed opacity-40">
          Disclaimer: This system is for subconscious training and neural alignment. Result vary based on individual consistency.
        </p>
      </div>
    </footer>
  );
};

export default Footer;