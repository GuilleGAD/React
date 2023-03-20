import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';

const HeaderNav = () => {
  return (
    <header>
      <nav className="navbar bg-dark navbar-expand-md bg-body-tertiary justify-content-end" data-bs-theme="dark">
        <div className='container-fluid navbar-brand'>
          <img src={logo} className="navbar-brand"/>
          <h3 className='nombre-logo'>Guillermo A. Diarte</h3>
        </div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/inicio">Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/portafolio">Portafolio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/servicios">Servicios</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/curriculum">Curriculum</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contacto">Contacto</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default HeaderNav
