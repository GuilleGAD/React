import React from 'react';
import { Link } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

const Portafolio = () => {
  document.body.style.backgroundColor = "#fff";
  return (
    <div className='page'>
      <h1 className='heading'>Portafolio</h1>

      {
        trabajos.map(trabajo => (
          <article key={trabajo.id}>
            <span>{trabajo.categorias}</span>
            <h2><Link to={"/proyecto/"+trabajo.id}>{trabajo.nombre}</Link></h2>
            <h3>{trabajo.tegnologias}</h3>
          </article>
        ))
      }
      
    </div>
  )
}

export default Portafolio
