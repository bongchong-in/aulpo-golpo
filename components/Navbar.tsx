import React, { useState } from 'react';
import { useContent } from '../context/ContentContext';

const Navbar: React.FC = () => {
  const { content } = useContent();
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  
  if (!content) return null;
  const { navbar } = content;

  return (
    <>
        {/* Desktop Navigation - Right Side Vertical */}
        <nav className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6 text-xs tracking-[0.2em] mix-blend-multiply opacity-60">
            {navbar.map((item, index) => (
                <React.Fragment key={item.label}>
                <a 
                    href={item.href} 
                    className="hover:text-alta transition-colors -rotate-90 origin-center w-4 h-4 whitespace-nowrap flex items-center justify-center"
                >
                    {item.label}
                </a>
                {index < navbar.length - 1 && (
                    <div className="h-12 w-[1px] bg-ink mx-auto opacity-30"></div>
                )}
                </React.Fragment>
            ))}
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
            onClick={() => setIsMobileOpen(true)}
            className="fixed top-6 right-6 z-40 md:hidden text-xs tracking-[0.2em] uppercase font-serif text-ink opacity-80 mix-blend-multiply p-2 hover:text-alta transition-colors"
            aria-label="Open Menu"
        >
            Menu
        </button>

        {/* Mobile Navigation Overlay */}
        <div className={`fixed inset-0 bg-paper z-50 flex flex-col items-center justify-center transition-opacity duration-500 ${isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
            {/* Texture Overlay */}
            <div className="absolute inset-0 bg-paper-texture opacity-50 pointer-events-none mix-blend-multiply"></div>
            
            <button 
                onClick={() => setIsMobileOpen(false)}
                className="absolute top-6 right-6 text-xs tracking-[0.2em] uppercase font-serif text-ink opacity-60 hover:text-alta transition-colors p-2 z-50"
                aria-label="Close Menu"
            >
                Close
            </button>

            <nav className="flex flex-col gap-8 text-center relative z-10">
                {navbar.map((item) => (
                    <a 
                        key={item.label}
                        href={item.href} 
                        onClick={() => setIsMobileOpen(false)}
                        className="text-3xl font-serif italic text-ink hover:text-alta transition-colors"
                    >
                        {item.label}
                    </a>
                ))}
            </nav>
            
            <div className="absolute bottom-12 left-0 w-full text-center">
                 <span className="font-hand text-2xl text-alta opacity-80 transform -rotate-2 inline-block">Aulpo Golpo</span>
            </div>
        </div>
    </>
  );
};

export default Navbar;