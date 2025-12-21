import React from 'react';
import { useParallax } from '../hooks/useParallax';
import content from '../content';

const Prologue: React.FC = () => {
  const offsetSlow = useParallax(0.05);
  const offsetFast = useParallax(0.1);
  const { prologue } = content;

  return (
    <section id="prologue" className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden">
        {/* Abstract Background Elements with Parallax + CSS Float */}
        <div 
            className="absolute top-10 left-10 w-64 h-64 bg-stone-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"
            style={{ transform: `translateY(${offsetSlow}px)` }}
        >
             <div className="w-full h-full animate-float"></div>
        </div>
        
        <div 
            className="absolute bottom-20 right-20 w-80 h-80 bg-red-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"
            style={{ transform: `translateY(${offsetFast}px)` }}
        >
             <div className="w-full h-full animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="text-center z-10 relative max-w-2xl">
            <p className="text-alta font-bengali text-2xl mb-4 tracking-widest opacity-80">{prologue.bengaliTitle}</p>
            <h1 className="text-6xl md:text-8xl font-light mb-6 tracking-tight leading-none text-ink">
                {prologue.titlePart1} <span className="italic font-normal text-alta">{prologue.titlePart2}</span>
            </h1>
            <div className="h-[1px] w-24 bg-ink mx-auto my-6 opacity-30"></div>
            <p className="text-xl md:text-2xl italic opacity-70 leading-relaxed font-light whitespace-pre-line">
                "{prologue.quote}"
            </p>
            
            <div className="mt-12">
                <a href="#chapters" className="text-xs uppercase tracking-[0.3em] border-b border-transparent hover:border-alta transition-all pb-1 cursor-pointer">{prologue.cta}</a>
            </div>
        </div>
        
        {/* Hero Image 1 */}
        <div 
            className="hidden md:block absolute top-1/2 right-[10%] w-64 h-80 bg-white p-3 shadow-lg rotate-3 z-0 opacity-80 hover:opacity-100 transition-all duration-500 ease-out hover:scale-105 hover:rotate-0 hover:z-20 hover:shadow-2xl"
            style={{ marginTop: '-10rem' }}
        >
            <div className="w-full h-full overflow-hidden bg-gray-100">
                <img 
                  src={prologue.heroImage1.src} 
                  alt={prologue.heroImage1.alt} 
                  loading="lazy"
                  className="w-full h-full object-cover sepia-[.3]" 
                />
            </div>
            <p className="font-hand absolute -bottom-8 right-0 text-xl text-ink transform -rotate-2">{prologue.heroImage1.caption}</p>
        </div>
        
        {/* Hero Image 2 */}
        <div 
            className="hidden md:block absolute top-[20%] left-[10%] w-48 h-60 bg-white p-3 shadow-lg -rotate-2 z-0 opacity-80 hover:opacity-100 transition-all duration-500 ease-out hover:scale-105 hover:rotate-0 hover:z-20 hover:shadow-2xl"
        >
            <div className="w-full h-full overflow-hidden bg-gray-100">
                 <img 
                   src={prologue.heroImage2.src} 
                   alt={prologue.heroImage2.alt} 
                   loading="lazy"
                   className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                 />
            </div>
        </div>
    </section>
  );
};

export default Prologue;