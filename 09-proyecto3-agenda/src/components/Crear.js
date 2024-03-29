import React, { useState } from 'react'
import { SaveInStorage } from '../helpers/SaveInStorage';

const Crear = ({listState, setListState}) => {

  const titleComponent = "Añadir Pelicula";
  const [elemState, setElemState] = useState({
    title:'',
    description:''
  })

  let {title, description} = elemState;


  const getFormValues = e => {
    // Evitar que se recargue la pagina al enviar el formulario
    e.preventDefault();

    // Conseguir datos del formulario
    let target = e.target;
    let title = target.title.value;
    let description = target.description.value;

    // Crear objeto de la pelicula a guardar
    let elem = {
      id: new Date().getTime(),
      title,
      description
    }

    // Guardar estado
    setElemState(elem);

    let messageError = "La pelicula fue agregada previamente";
    // Guardar en almacenamiento local
    SaveInStorage("elems",elem, listState, setListState, messageError);
  }

  
  return (
    <div className="add">
      <h3 className="title">{titleComponent}</h3>

      <strong>
        {(title && description) && "Has creado la peli " + title}
      </strong>

      <form onSubmit={getFormValues}>
        <input type="text"
                id="title"
                name="title"
                placeholder="Titulo" />

        <textarea id="description"
                  name="description"
                  placeholder="Descripción"></textarea>

        <input type="submit" id="save" value="Guardar" />
      </form>
    </div>
  )
}

export default Crear
