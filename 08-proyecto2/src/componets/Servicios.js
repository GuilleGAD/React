import React from 'react'

const Servicios = () => {
  document.body.style.backgroundColor = "#fff";
  return (
    <div className='page'>
      <h1 className='heading'>Servicios</h1>
      <section className='services'>
        <article className='service'>
          <h2>Diseño Web</h2>
          <p>Hago que tu web sea bonita</p>
        </article>
        <article className='service'>
          <h2>Desarrollo Web</h2>
          <p>Creo tu página web desde cero</p>
        </article>
        <article className='service'>
          <h2>Desarrollo Web</h2>
          <p>Hago que tu web aparezca en Google y la vea la gente</p>
        </article>

      </section>
    </div>
  )
}

export default Servicios
