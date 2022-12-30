import React from 'react'

const EventosComponente = () => {

    const hasDadoClick = (e, nombre) => {
        alert(`Hola ${nombre} soy un click`);
    }

    const hasDadoDobleClick = (e, nombre) => {
        alert(`Hola ${nombre} has dado doble click`);
    }

    const hasEntrado = (e, accion) => {
        alert(`Has ${accion} a la caja con el mouse`);
    }

    const estasDentro = (e) => {
        console.log("Estas dentro del input, mete tu nombre");
    }

    const estasFuera = (e) => {
        console.log("Estas FUERA del input, CHAU!");
    }

    return (
    <div>
        <h1>Eventos en React</h1>
        {/* Evento Click */}
        <p>
            <button onClick={e => hasDadoClick(e, "Guille")}>Dame Click!</button>
        </p>
        
        {/* Evento Doble Click */}
        <p>
           <button onDoubleClick={e => hasDadoDobleClick(e, "Guille")}>Dame Doble Click!</button>
        </p>

        {/* Evento onMouseEnter onMouseLeave */}
        <div id='caja' 
            onMouseEnter={e => hasEntrado(e, "Entrado")} 
            onMouseLeave={e =>hasEntrado(e, "Salido")}
        >
           Pasa por encima!!
        </div>

        {/* Evento onFocus onBlur */}
        <p>
            <input type="text" 
                onFocus={estasDentro}
                placeholder="Introduce tu nombre..."
                onBlur={estasFuera}
            >
            </input>
        </p>
        
    </div>
    )
}

export default EventosComponente
