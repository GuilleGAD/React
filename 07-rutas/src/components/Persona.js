import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Persona = () => {
  const {nombre, apellido} = useParams();
  const navegar = useNavigate();

  const enviar = e => {
    e.preventDefault();
    let nombre = e.target.nombre.value;
    let apellido = e.target.apellido.value;
    let url = "/persona"

    if(nombre){
      url = `/persona/${nombre}`;
      if(apellido){
        url = `/persona/${nombre}/${apellido}`
      }
    }

    navegar(url);
  };

  return (
    <div>
      <h1>Página de Persona</h1>
      {!nombre && <h3>No hay persona que mostrar</h3>}
      {nombre && <p>La persona que buscas se llama <strong>{nombre} {apellido}</strong></p>}

      <form onSubmit={enviar}>
        <input type="text" name="nombre" />
        <input type="text" name="apellido" />
        <input type="submit" name="enviar" value="enviar" />
      </form>
    </div>
  )
}

export default Persona
