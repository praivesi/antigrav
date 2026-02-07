import React, { createContext, useState, useEffect, useContext } from 'react';
import { artistData as initialArtistData, academyData as initialAcademyData } from '../data/sampleData';

const DataContext = createContext();

export const useData = () => {
  return useContext(DataContext);
};

export const DataProvider = ({ children }) => {
  // Initialize state from localStorage or use initial sample data
  const [artists, setArtists] = useState(() => {
    const saved = localStorage.getItem('soundfolio_artists');
    return saved ? JSON.parse(saved) : initialArtistData;
  });

  const [academies, setAcademies] = useState(() => {
    const saved = localStorage.getItem('soundfolio_academies');
    return saved ? JSON.parse(saved) : initialAcademyData;
  });

  // Save to localStorage whenever data changes
  useEffect(() => {
    localStorage.setItem('soundfolio_artists', JSON.stringify(artists));
  }, [artists]);

  useEffect(() => {
    localStorage.setItem('soundfolio_academies', JSON.stringify(academies));
  }, [academies]);

  const addArtist = (newArtist) => {
    setArtists(prev => [...prev, newArtist]);
  };

  const addAcademy = (newAcademy) => {
    setAcademies(prev => [...prev, newAcademy]);
  };

  const value = {
    artists,
    academies,
    addArtist,
    addAcademy
  };

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  );
};
