import React, {useState} from 'react';
import PropTypes from "prop-types";

const EjercicioComponent = ({year}) => {

    const [yearNow, setYearNow] = useState(year);

    const cambiarYear = (e, valor) => {
        let yearInt = parseInt(yearNow);
        
        valor === true ?
            setYearNow(yearInt-1)
        :
            setYearNow(yearInt+1);
    }

    const cambiarYearText = e => {
        let dato = parseInt(e.target.value);

        if(!isNaN(dato)){
            setYearNow(dato);
        }
    }

  return (
    <div>
        <h2>Ejercicio con Eventos y UseState</h2> 
        <strong className='lavel'>{yearNow}</strong>
        <p>
            <button onClick={e => cambiarYear(e, true)}>ANTERIOR</button>
            &nbsp;
            <button onClick={e => cambiarYear(e, false)}>SIGUIENTE</button>
        </p>
        <p>
            <input type="text" placeholder='Cambiar año' onChange={cambiarYearText}/>
        </p>
    </div>
  )
}

EjercicioComponent.prototype = {
    year: PropTypes.number.isRequired
}

export default EjercicioComponent
