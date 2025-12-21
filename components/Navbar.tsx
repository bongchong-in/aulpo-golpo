import React from 'react';
import content from '../content';

const Navbar: React.FC = () => {
  const { navbar } = content;
  return (
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
  );
};

export default Navbar;