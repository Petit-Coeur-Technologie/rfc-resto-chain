// filepath: /home/lamine-diallo/Bureau/TMLD/Work PCT/rfc-resto-chain/src/routes/AppRoutes.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import MenuPage from '../pages/MenuPage';
import Kobayah from '../pages/location/Kobayah';
import Kipe from '../pages/location/Kipe';
import Nongo from '../pages/location/Nongo';


const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/location/kobayah" element={<Kobayah />} />
        <Route path="/location/kipe" element={<Kipe />} />
        <Route path="/location/nongo" element={<Nongo />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;