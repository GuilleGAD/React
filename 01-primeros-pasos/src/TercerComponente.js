import React from 'react';
import PropsTypes from "prop-types";

const TercerComponente = (props) => {
  return (
    <div>
      <h1>Comunicación entre componentes</h1>
      <ul>
          <li>{props.nombre}</li>
          <li>{props.apellido}</li>
          <li>{props.ficha.grupo}</li>
      </ul>
    </div>
  )
}

TercerComponente.propsTypes = {
    nombre: PropsTypes.string.isRequired,
    apellido: PropsTypes.string,
    ficha: PropsTypes.object
}

export default TercerComponente
