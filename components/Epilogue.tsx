import React from 'react';
import { useContent } from '../context/ContentContext';

const Epilogue: React.FC = () => {
  const { content } = useContent();

  if (!content) return null;
  const { epilogue } = content;

  return (
    <footer id="epilogue" className="py-16 md:py-24 relative overflow-hidden text-center">
        {/* Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-20 bg-ink opacity-20"></div>

        <div className="max-w-xl mx-auto px-6 relative z-10">
            <h2 className="text-5xl font-serif italic mb-6">{epilogue.title}</h2>
            <p className="text-lg font-light mb-10 opacity-70 whitespace-pre-line">
                {epilogue.description}
            </p>
            
            <div className="flex flex-col md:flex-row gap-4 justify-center flex-wrap">
                <a href={epilogue.emailUrl} className="px-8 py-3 bg-ink text-paper text-sm tracking-widest uppercase hover:bg-alta transition-colors duration-300">
                    {epilogue.emailLabel}
                </a>
                <a href={epilogue.instagramUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-ink text-ink text-sm tracking-widest uppercase hover:bg-ink hover:text-paper transition-colors duration-300">
                    {epilogue.instagramLabel}
                </a>
                <a href={epilogue.whatsappUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-3 border border-ink text-ink text-sm tracking-widest uppercase hover:bg-ink hover:text-paper transition-colors duration-300">
                    {epilogue.whatsappLabel}
                </a>
            </div>

            <div className="mt-16 md:mt-20 opacity-40 text-xs tracking-widest">
                {epilogue.copyright}<br />
                <span className="font-bengali">{epilogue.bengaliFooter}</span>
            </div>
        </div>
    </footer>
  );
};

export default Epilogue;
