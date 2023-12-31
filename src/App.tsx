import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import { Members, AdailsonPage, JoaoVictorPage, MarceloPage, MarianaPage, RenanPage, MarceloAudiometria, RenanAudiometria, RenanExercicio1 } from './pages/members';
import { Container } from '@mui/material';
import { Reports } from './pages/reports';
import Report1 from './pages/reports/report1';
import Report3 from './pages/reports/report3';
import Report4 from './pages/reports/report4';
import ExtensionProject from './pages/extension-project';
import Report5 from './pages/reports/report5';
import Guide from './pages/extension-project/guide/Guide';
import Report7 from './pages/reports/report7';
import Report8 from './pages/reports/report8';
import Report9 from './pages/reports/report9';

function App() {
  return (
    <div className="App">
      <Header/>
      <Container fixed>
        <Routes>
          <Route index element={<Members />} />
          <Route path="integrantes" element={<Members />} />
          <Route path="integrantes/adailson" element={<AdailsonPage />} />
          <Route path="integrantes/joao-victor" element={<JoaoVictorPage />} />
          <Route path="integrantes/marcelo" element={<MarceloPage />} />
          <Route path="integrantes/marcelo/audiometria" element={<MarceloAudiometria />} />
          <Route path="integrantes/mariana" element={<MarianaPage />} />
          <Route path="integrantes/renan" element={<RenanPage />} />
          <Route path="integrantes/renan/audiometria" element={<RenanAudiometria />} />
          <Route path="integrantes/renan/ex1" element={<RenanExercicio1 />} />
          <Route path="relatorios" element={<Reports />} />
          <Route path="relatorios/1" element={<Report1 />} />
          <Route path="relatorios/3" element={<Report3 />} />
          <Route path="relatorios/4" element={<Report4 />} />
          <Route path="relatorios/5" element={<Report5 />} />
          <Route path="relatorios/7" element={<Report7 />} />
          <Route path="relatorios/8" element={<Report8 />} />
          <Route path="relatorios/9" element={<Report9 />} />
          <Route path="extensao" element={<ExtensionProject />} />
          <Route path="extensao/roteiro" element={<Guide />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
