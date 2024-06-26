import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/index';
import ContactPage from './pages/contact';
import BioProduct from './pages/BioEstres';
import BioProductD from './pages/BioIra';
import BioDefensas from './pages/BioDefensas';
import BioApetito from './pages/BioApetito';
import BioAlergia from './pages/BioAlergia';
import BioColageno from './pages/BioColageno';
import BioResentimiento from './pages/BioResentimiento';
import BioPaz from './pages/BioPaz';
import BioRescate from './pages/BioRescate';
import BioResistencia from './pages/BioResistencia';
import BioInsomnio from './pages/BioInsomnio';
import BioMigrana from './pages/BioMigrana';
import Nosotros from './pages/nosotros';
import Productos from './pages/productos';
import BioAnsiedadAngustia from './pages/BioAnsiedadAngustia';
import BioIra from './pages/BioIra';
import BioDepresion from './pages/BioDepresion';
import BioTristeza from './pages/BioTristeza';
import BioHombre from './pages/BioHombre';
import BioMujer from './pages/BioMujer';
import BioMemoria from './pages/BioMemoria';
import BioConcentracion from './pages/BioConcentracion';
import BioDigestion from './pages/BioDigestion';
import BioDetox from './pages/BioDetox';
import BioPesoControl from './pages/BioPesoControl';
import BioMiedoTemor from './pages/BioMiedoTemor';
import BioLinfa from './pages/BioLinfa';
import BioArtritis from './pages/BioArtritis';
import BioCristal from './pages/BioCristal';
import BioCabello from './pages/BioCabello';
import BioArcilla from './pages/BioArcilla';
import InfoProductos from './pages/InfoProductos';
import FloatingWhatsApp from 'react-floating-whatsapp';
import avatar from './images/avatar.jpg';

function App() {
  return (
    
    <Router>
     
      <Routes> 
        <Route path="/" element={<Home />} exact />
        <Route path="/nosotros" element={<Nosotros />} exact />
        <Route path="/contacto" element={<ContactPage />} exact />
        <Route path="/productos" element={<Productos />} exact />
        <Route path="/infoproductos" element={<InfoProductos />} exact />
        <Route path="/bioansiedadangustia" element={<BioAnsiedadAngustia />} exact />
        <Route path="/biodepresion" element={<BioDepresion />} exact />
        <Route path="/biotristeza" element={<BioTristeza />} exact />
        <Route path="/bioira" element={<BioIra />} exact />
        <Route path="/bioestres" element={<BioProduct />} exact />
        <Route path="/bioproductd" element={<BioProductD />} exact />
        <Route path="/biodefensas" element={<BioDefensas />} exact />
        <Route path="/bioapetito" element={<BioApetito />} exact />
        <Route path="/biohombre" element={<BioHombre />} exact />
        <Route path="/biomujer" element={<BioMujer />} exact />
        <Route path="/biomemoria" element={<BioMemoria />} exact />
        <Route path="/bioconcentracion" element={<BioConcentracion />} exact />
        <Route path="/biodigestion" element={<BioDigestion />} exact />
        <Route path="/biodetox" element={<BioDetox />} exact />
        <Route path="/biopesocontrol" element={<BioPesoControl />} exact />
        <Route path="/biomiedotemor" element={<BioMiedoTemor />} exact />
        <Route path="/biolinfa" element={<BioLinfa />} exact />
        <Route path="/bioalergia" element={<BioAlergia />} exact />
        <Route path="/biocolageno" element={<BioColageno />} exact />
        <Route path="/bioresentimiento" element={<BioResentimiento />} exact />
        <Route path="/biopaz" element={<BioPaz />} exact />
        <Route path="/biorescate" element={<BioRescate />} exact />
        <Route path="/bioresistencia" element={<BioResistencia />} exact />
        <Route path="/bioinsomnio" element={<BioInsomnio />} exact />
        <Route path="/biomigrana" element={<BioMigrana />} exact />
        <Route path="/bioartritis" element={<BioArtritis />} exact />
        <Route path="/biocristal" element={<BioCristal />} exact />
        <Route path="/biocabellosano" element={<BioCabello />} exact />
        <Route path="/bioarcilla" element={<BioArcilla />} exact />
      </Routes>
      <FloatingWhatsApp
      phoneNumber='593988363602'
      accountName='Bio Luniel'
      statusMessage='Elixires Florales'
      chatMessage='Bienvenidos! 🤝 Como podemos ayudarte?'
      allowClickAway
      avatar={avatar}
      notification
      notificationDelay={30000}
    />
    </Router>
  );
}

export default App;
