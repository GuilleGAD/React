// Importar modulos de react/dependencias
import React from "react";

// Funcion del componente
const MiComponente = () =>{

    let usuario = {
      nombre: "Guillermo",
      apellido: "Diarte",
      web: "www.guillermodiarte.com"  
    };

    return (
        <>
            <h2>Componente Creado</h2>
            <h3>Datos del usuario:</h3>
            <ul>
                <li>Nombre: <strong>{usuario.nombre} {usuario.apellido}</strong></li>
                <li>Web: {usuario.web}</li>
            </ul>
            <p>Este es mi primer componente!</p>
            <ul>
                <li>
                    React
                </li>
                <li>
                    Angular
                </li>
                <li>
                    Vue
                </li>
            </ul>
        </>
    );
};

// Export

export default MiComponente;