import React, { useEffect, useState } from 'react';
import AvisoComponent from "./AvisoComponent";

const PruebasComponent = () => {

  const autor = "Guillermo A. Diarte";

  const [usuario, setUsuario] = useState(autor);
  const [hora, setHora] = useState("00:00:00");
  const [contador, setContador] = useState(0);

  const modUsuario = e => {
    e.target.value.length>0 ?
      setUsuario(e.target.value)
    :
      setUsuario(autor);
  };

  const cambiarHora = e => {
    setHora(new Date().toLocaleTimeString());
  }

  // Con los [] al final solo se ejecuta una vez
  useEffect(() =>{
    console.log("Se ejecuta una sola vez al cargar");
  }, []);

  // Se ejecuta solo cuando cambio el usuario
  useEffect(() =>{
    setContador(contador+1);
    console.log("Has modificado el usuario: " + contador + " veces");
  }, [usuario]);

  return (
    <div>
      <h1>El efecto - Hook useEffect</h1>
      <strong className={contador>10 ? "label label-pink" : "label"}>{usuario}</strong>
      <strong className='label label-green'>{hora}</strong>
      <p>
        <input type="text" 
          onChange={modUsuario}
          placeholder="Cambia el nombre">
        </input>
        <button onClick={cambiarHora}>Cambiar Hora</button>
      </p>

      <strong>{usuario == "Guillote" && <AvisoComponent />}</strong>
    </div>
  )
}

export default PruebasComponent
