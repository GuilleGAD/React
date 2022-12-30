import React from 'react'
import { useEffect, useState } from 'react';

const AjaxComponent = () => {


  const [usuarios, setUsuarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errores, setErrores] = useState("");

  // Generico para rellenar ese estado (array)
  const getUsuarioEstaticos = () => {
    setUsuarios([
      {
        "id": 1,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
      },
      {
        "id": 2,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
      },
      {
        "id": 3,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
      },
    ]);
  }

  const getUsuarioAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then(respuesta => respuesta.json())
      .then(resultado_final => {
        setUsuarios(resultado_final.data);
      },
        error => {
          console.log("Error");
        })
  }

  const getUsuarioAjaxAW = async () => {

    setTimeout(async () => {
      try{
        const peticion = await fetch("https://reqres.in/api/users?page=2");
        const { data } = await peticion.json();
        setUsuarios(data);
        setLoading(false);
      }catch(error){
        setErrores(error.message);
      }
      
    }, 2000);
  }

  useEffect(() => {
    //getUsuarioEstaticos();
    //getUsuarioAjaxPms();
    getUsuarioAjaxAW();
  }, []);

  if (errores!==""){
    // Cuando pasa algun error
    return (
      <div className='errores'>
        {errores}
      </div>
    );
  }else if (loading) {
    // Cuando está cargando
    return (
      <div className='loading'>
        Cargando datos....
      </div>
    );
  } else {
    // Cuando ha ido todo bien
    return (
      <div>
        <h2>Listado de usuarios via AJAX</h2>
        <ol className='usuarios'>
          {
            usuarios.map(usuario => {
              return <li key={usuario.id}>
                <img src={usuario.avatar} width="30"/>
                &nbsp;
                {usuario.first_name} {usuario.last_name}</li>
            })
          }
        </ol>
      </div>
    )
  }
}

export default AjaxComponent
