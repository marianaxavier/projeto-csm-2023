import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home/home';
import './App.css';
import AboutMariana from './pages/about-mariana';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="about/mariana" element={<AboutMariana />} />
      </Routes>
    </div>
  );
}

export default App;
