import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import './App.css';
import AboutMariana from './pages/about-mariana';

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="home" element={<Home />} />
      <Route path="about/mariana" element={<AboutMariana />} />
    </Routes>
  );
}

export default App;
