import React from 'react';
import GrainOverlay from './components/GrainOverlay';
import Navbar from './components/Navbar';
import Prologue from './components/Prologue';
import Chapters from './components/Chapters';
import LiveWall from './components/LiveWall';
import Epilogue from './components/Epilogue';

const App: React.FC = () => {
  return (
    <main className="relative">
      <GrainOverlay />
      <Navbar />
      <Prologue />
      <Chapters />
      <LiveWall />
      <Epilogue />
    </main>
  );
};

export default App;