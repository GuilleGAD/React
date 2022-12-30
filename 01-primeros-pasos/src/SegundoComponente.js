import React from 'react'

const SegundoComponente = () => {

    const libros = ["Harry Potter", "Juegos de Tronos", "Clean Code"];
  return (
    <div className='segundo-componente'>
        <h1>Listado de libros:</h1>
        {libros.length > 0 ? (
            <ul>
                {
                    libros.map((libro,indice) => {
                        return <li key={indice}>{libro}</li>;
                    })
                }
            </ul>
            )
            :(
            <p>No hay libros</p>
            )
        }
    </div>
  )
}

export default SegundoComponente
