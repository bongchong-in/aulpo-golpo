import React from 'react';
import StoryCard from './StoryCard';
import { useContent } from '../context/ContentContext';

const Chapters: React.FC = () => {
  const { content } = useContent();

  if (!content) return null;
  const { chapters } = content;

  return (
    <section id="chapters" className="relative py-12 md:py-20 overflow-hidden">
        {/* The Center Line */}
        <div className="hidden md:block absolute left-1/2 w-[2px] bg-[#d4d4d4] h-full -translate-x-1/2 z-0 top-0 opacity-40"></div>

        <div className="container mx-auto px-6 relative z-10">
            {chapters.map(story => (
              <StoryCard key={story.id} story={story} />
            ))}
        </div>
    </section>
  );
};

export default Chapters;
