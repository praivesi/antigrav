import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';
import MainPage from './pages/MainPage';
import ArtistTemplate from './pages/ArtistTemplate';
import AcademyTemplate from './pages/AcademyTemplate';
// Future imports for Create pages
import ArtistCreate from './pages/ArtistCreate';
import AcademyCreate from './pages/AcademyCreate';

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          
          {/* Create Routes */}
          <Route path="/artist/create" element={<ArtistCreate />} />
          <Route path="/academy/create" element={<AcademyCreate />} />

          {/* Dynamic Route for different IDs */}
          <Route path="/artist/:id" element={<ArtistTemplate />} />
          <Route path="/academy/:id" element={<AcademyTemplate />} />
          
          {/* Fallback routes */}
          <Route path="/artist" element={<ArtistTemplate />} />
          <Route path="/academy" element={<AcademyTemplate />} />
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
