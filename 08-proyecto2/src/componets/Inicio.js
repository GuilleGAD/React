import React from 'react';
import { Link } from 'react-router-dom';


const Inicio = () => {
  document.body.style.backgroundColor = "#fff";
  return (
    <div>
      <h1>
        Hola, soy Guillermo A. Diarte y soy Desarrolador Web,
        y ofrezco mis servicios de programación y desarrollo en
        todo tipo de proyectos web.
      </h1>

      <h2>
        Te ayudo a crear tu sitio o aplicación web, tener más
        visibilidad y relevancia en internet. <Link to="/contacto">Contacta conmigo</Link>
      </h2>

      <section className='last-works'>
        <h2>Alguno de mis proyectos</h2>
        <p>Estos son algunos de mis trabajos de desarrollo web.</p>
        <div className='works'>

        </div>
      </section>
    </div>
  )
}

export default Inicio
