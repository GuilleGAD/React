import React from 'react'

const Contacto = () => {
  return (
    <div className='page'>
    <h1>Contacto</h1>
    <form className='contact'>
      <input type="text" placeholder="Nombre"/>
      <input type="text" placeholder="Apellido"/>
      <input type="text" placeholder="Email"/>
      <textarea placeholder="Motivo del contacto"/>

    </form>
  </div>
  )
}

export default Contacto
