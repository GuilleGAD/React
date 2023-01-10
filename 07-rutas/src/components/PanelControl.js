import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const PanelControl = () => {
  return (
    <div>
      <h1>Página de Panel de Control</h1>
      <p>Elige una de estas opciones</p>
      <nav>
        <ul>
          <li>
            <NavLink to='/panel/inicio'>Inicio</NavLink>
          </li>
          <li>
            <NavLink to='/panel/crear-articulo'>Crear Articulo</NavLink>
          </li>
          <li>
            <NavLink to='/panel/gestion-usuario'>Gestion Usuario</NavLink>
          </li>
          <li>
            <NavLink to='/panel/acerca-de'>Acerca De</NavLink>
          </li>
        </ul>
      </nav>
      <div>
        {/* Aquí quiero cargar los componentes de las subrutas o rutas anidadas */}
        <Outlet />
      </div>
    </div>
  )
}

export default PanelControl
