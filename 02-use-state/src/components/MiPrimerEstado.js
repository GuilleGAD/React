import React, {useState} from 'react';

const MiPrimerEstado = () => {

    /*
    // Problemática

    let nombre = "Guillermo Diarte";
    
    const cambiarNombre = (e) => {
        nombre = "Antonio Diarte"
    };
    */

    const [ nombre, setNombre ] = useState("Guillermo Diarte");

    const cambiarNombre = (e) => {
        if (nombre.match("Guillermo Diarte")){
            setNombre("Antonio Diarte");
        }else{
            setNombre("Guillermo Diarte");
        }
    }

    const cambiarNombreKeyUp = (e, nombre) => {
        nombre.length===0 ?
            setNombre("Guillermo Diarte")
        :
            setNombre(nombre);
        
    }

  return (
    <div>
      <h3>Componente: MiPrimerEstado</h3>
      <strong>{nombre}</strong>
      &nbsp;
      <button onClick={cambiarNombre}>Cambiar</button>
      &nbsp;
      <input type="text" placeholder='Cambia el nombre' 
      onKeyUp={e => cambiarNombreKeyUp(e, e.target.value) }/>
    </div>
  )
}

export default MiPrimerEstado
