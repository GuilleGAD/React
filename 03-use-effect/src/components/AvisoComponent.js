import React, { useEffect } from 'react'

const AvisoComponent = () => {

  useEffect(() => {
    // Detecta cuando el componente se monta
    alert("El componente AvisoComponent está montado");

    // Detecta cuando el componente se desmonta

    return () => {
      alert("El componente se desmontó");
    };
  }, []); // Se ejecuta una vez porque le paso el []

  return (
    <div>
      <hr/>
      <h3>Saludos Guillote</h3>
      <button onClick={e => {
        alert("Bienvenido");
      }}>Mostrar Alerta</button>
    </div>
  )
}

export default AvisoComponent
