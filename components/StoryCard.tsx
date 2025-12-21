import React from 'react';
import { Story } from '../types';

interface StoryCardProps {
  story: Story;
}

const StoryCard: React.FC<StoryCardProps> = ({ story }) => {
  const isRight = story.orientation === 'right';

  return (
    <div className="flex flex-col md:flex-row items-center justify-between mb-32 group relative">
        {/* Text Section */}
        {/* 
            Desktop Order Logic:
            - If Image is Right (isRight=true): Text is Left (Order 1).
            - If Image is Left (isRight=false): Text is Right (Order 2).
        */}
        <div className={`w-full md:w-5/12 mt-8 md:mt-0 
            ${isRight 
                ? 'md:order-1 md:pl-12 text-left' 
                : 'md:order-2 md:pr-12 text-right'
            }
        `}>
            <span className="text-alta font-bengali text-lg mb-2 block">{story.bengaliTitle}</span>
            <h2 className="text-4xl italic mb-4">{story.title}</h2>
            <p className="text-lg font-light opacity-80 leading-relaxed mb-6">
                {story.description}
            </p>
            <a 
              href={story.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-xs uppercase tracking-widest border border-ink/30 px-6 py-3 hover:bg-alta hover:text-paper hover:border-alta transition-all duration-300"
            >
                {isRight ? 'View Gallery' : 'Read on Instagram'}
            </a>
        </div>
        
        {/* Image Section */}
        {/* 
            Desktop Order Logic:
            - If Image is Right (isRight=true): Image is Right (Order 2).
            - If Image is Left (isRight=false): Image is Left (Order 1).
        */}
        <div className={`w-full md:w-5/12 relative 
            ${isRight ? 'md:order-2' : 'md:order-1'}
        `}>
            {/* Tape Effect */}
            <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-100/60 z-20 shadow-sm ${isRight ? '-rotate-1' : 'rotate-2'}`}></div>
            
            <div className={`bg-white p-4 shadow-xl transform transition-transform duration-500 ${isRight ? 'group-hover:-rotate-1' : 'group-hover:rotate-1'}`}>
                 <img src={story.image} alt={story.title} className="w-full h-[400px] object-cover" />
            </div>
            
            <span className={`font-hand absolute -bottom-6 text-2xl text-ink/70 ${isRight ? '-right-4' : '-left-4'}`}>
                {story.date}
            </span>
        </div>
    </div>
  );
};

export default StoryCard;