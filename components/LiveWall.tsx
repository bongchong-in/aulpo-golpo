import React from 'react';
import content from '../content';

export default function LiveWall() {
  const { liveWall } = content;
  const { items } = liveWall;

  return (
    <section className="py-20 bg-stone-200/50 relative">
        <div className="container mx-auto px-6">
            <div className="text-center mb-16">
                <span className="font-hand text-3xl text-alta block mb-2">{liveWall.label}</span>
                <h3 className="text-3xl font-serif tracking-wide">{liveWall.title}</h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                {items.map(item => (
                  <div key={item.id} className="aspect-square bg-white p-2 shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
                      {item.type === 'image' ? (
                        <div className="w-full h-full overflow-hidden bg-stone-100">
                            <img 
                                src={item.image} 
                                alt="Gallery highlight" 
                                loading="lazy"
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                            />
                        </div>
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-stone-100 text-center p-4">
                            <p className="font-serif italic text-sm text-gray-500">{liveWall.comingSoonText}</p>
                        </div>
                      )}
                  </div>
                ))}
            </div>
            
            <div className="text-center mt-8">
                 <p className="text-xs uppercase tracking-widest opacity-50">{liveWall.footer}</p>
            </div>
        </div>
    </section>
  );
}