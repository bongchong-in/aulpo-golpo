import React, { createContext, useContext, useEffect, useState } from 'react';
import { Content } from '../types';
import { getAppContent } from '../utils/contentParser';

interface ContentContextType {
  content: Content | null;
  loading: boolean;
  error: string | null;
}

const ContentContext = createContext<ContentContextType>({ content: null, loading: true, error: null });

export const useContent = () => useContext(ContentContext);

export const ContentProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [content, setContent] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = () => {
      try {
        const data = getAppContent();
        setContent(data);
      } catch (err) {
        console.error("Failed to load content data:", err);
        setError('Failed to load journal content.');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, []);

  return (
    <ContentContext.Provider value={{ content, loading, error }}>
      {children}
    </ContentContext.Provider>
  );
};
