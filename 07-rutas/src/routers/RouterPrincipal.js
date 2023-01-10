import React from 'react'
import { Routes, Route, NavLink, BrowserRouter, Navigate } from 'react-router-dom'
import Articulos from '../components/Articulos'
import Contacto from '../components/Contacto'
import Error404 from '../components/Error404'
import Inicio from '../components/Inicio'
import Persona from '../components/Persona'
import PanelControl from '../components/PanelControl'
import InicioPC from '../components/panel/Inicio'
import Crear from '../components/panel/Crear'
import Gestion from '../components/panel/Gestion'
import Acerca from '../components/panel/Acerca'

const RouterPrincipal = () => {

  const isActive = ({isActive}) =>{
    let cName = "";

    if(isActive){
      cName="activado";
    }

    return cName;
  }

  return (
    <BrowserRouter>
      <h1>Cabecera</h1>
      <hr />

      <nav>
        <ul>
          <li>
            <NavLink className={isActive} to="/inicio">Inicio</NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="/articulos">Articulos</NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="/contacto">Contacto</NavLink>
          </li>
          <li>
            <NavLink className={isActive} to="/panel">Panel de Control</NavLink>
          </li>
        </ul>
      </nav>

      <hr />

      <section className='contenido-principal'>
        <Routes>
          <Route path='/' element={<Inicio />}></Route>
          <Route path='/inicio' element={<Inicio />}></Route>
          <Route path='/articulos' element={<Articulos />}></Route>
          <Route path='/contacto' element={<Contacto />}></Route>
          <Route path='/persona' element={<Persona />}></Route>
          <Route path='/persona/:nombre' element={<Persona />}></Route>
          <Route path='/persona/:nombre/:apellido' element={<Persona />}></Route>
          <Route path='/redirigir' element={<Navigate to="/persona/Guille/Diarte"/>}></Route>
          <Route path='/panel/*' element={<PanelControl />}>
            <Route index element={<InicioPC />}></Route>
            <Route path='inicio' element={<InicioPC />}></Route>
            <Route path='crear-articulo' element={<Crear />}></Route>
            <Route path='gestion-usuario' element={<Gestion />}></Route>
            <Route path='acerca-de' element={<Acerca />}></Route>
            <Route path='*' element={<Error404 />}></Route>
          </Route>
          <Route path='*' element={<Error404 />}></Route>
        </Routes>
      </section>

      <hr />
      <footer>Este es el pie de página</footer>
    </BrowserRouter>
  )
}

export default RouterPrincipal
