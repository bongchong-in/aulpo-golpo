import React, { useState, useEffect } from 'react';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import Prologue from './components/Prologue';
import Chapters from './components/Chapters';
import LiveWall from './components/LiveWall';
import Epilogue from './components/Epilogue';
import CommunityPopup from './components/CommunityPopup';
import { ContentProvider, useContent } from './context/ContentContext';

const JournalContent: React.FC = () => {
  const { loading, error, content } = useContent();
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Only set the timer if content has loaded successfully
    if (!loading && !error && content) {
      const timer = setTimeout(() => {
        setShowPopup(true);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [loading, error, content]);

  if (loading) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-paper text-ink font-serif italic text-xl animate-pulse">
        Opening Journal...
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="h-screen w-full flex items-center justify-center bg-paper text-alta font-serif">
        {error || 'Unable to load content.'}
      </div>
    );
  }

  return (
    <main className="relative">
      <GrainOverlay />
      <Navbar />
      <Prologue />
      <Chapters />
      <LiveWall />
      <Epilogue />
      <CommunityPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </main>
  );
};

const App: React.FC = () => {
  return (
    <ContentProvider>
      <JournalContent />
    </ContentProvider>
  );
};

export default App;
