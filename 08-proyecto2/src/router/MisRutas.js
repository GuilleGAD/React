import React from 'react';
import { Routes, Route, BrowserRouter, NavLink, Navigate} from "react-router-dom";
import Contacto from '../componets/Contacto';
import Curriculum from '../componets/Curriculum';
import Error404 from '../componets/Error404';
import Inicio from '../componets/Inicio';
import Footer from '../componets/layout/Footer';
import HeaderNav from '../componets/layout/HeaderNav';
import Portafolio from '../componets/Portafolio';
import Servicios from '../componets/Servicios';

const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* Header y Navegación */}
      <HeaderNav />
      
      {/* Contenido Central */}
      <div className='layout'>
        <Routes>
          <Route path='/' element={<Navigate to="/inicio" />} />
          <Route path='/inicio' element={<Inicio />} />
          <Route path='/portafolio' element={<Portafolio />} />
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/curriculum' element={<Curriculum />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      </div>
      
      {/* Pié de página */}
      <Footer />
    </BrowserRouter>
  )
}

export default MisRutas
