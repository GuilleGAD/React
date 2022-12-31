import React, { useState } from 'react'

const FormularioComponent = () => {

  const [usuario, setUsuario] = useState("");

  const conseguirDatosFormulario = e => {
    e.preventDefault();
    let datos = e.target;
    let usuario = {
      nombre: datos.name.value,
      apellido: datos.lastname.value,
      genero: datos.sex.value,
      biografia: datos.bio.value
    };
    alert(usuario.nombre + " " + usuario.apellido + " " + usuario.genero + " " + usuario.biografia);
  }

  return (
    <div>
      <h1>Formulario con React</h1>

      <form onSubmit={conseguirDatosFormulario}>
        <input type="text" name="name" placeholder='Nombre'></input>
        <input type="text" name="lastname" placeholder='Apellido'></input>
        <select name="sex">
          <option value="man">Hombre</option>
          <option value="woman">Mujer</option>
        </select>
        <textarea name="bio" placeholder='Biografia'></textarea>
        <input type='submit' value="Enviar" />
      </form>
    </div>
  )
}

export default FormularioComponent
