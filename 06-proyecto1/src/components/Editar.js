import React from 'react'

const Editar = ({film, pullFilm, setEdit, setListState}) => {
  const component_tittle = "Editar Pelicula";

  const saveEdition = (e, id) =>{
    e.preventDefault();
    
    // Conseguir el target del evento
    let target = e.target;

    // Buscar el indice del objeto de la pelicula a actualizar
    const filmsInStorage = pullFilm();
    const index = filmsInStorage.findIndex(peli => peli.id === id);
    
    // Crear objeto con el id de ese indice, con el titulo y descripcion del formulario
    let film_update = {
      id,
      title: target.title.value,
      description: target.description.value
    }
    
    // Actualizar el elemento con ese índice
    filmsInStorage[index] = film_update;

    // Guardar en el LocalStorage
    localStorage.setItem("films", JSON.stringify(filmsInStorage));

    // Actualziar estados
    setListState(filmsInStorage);
    setEdit(0);
  }

  return (
    <div className="edit_form">
      <h3 className='title'>{component_tittle}</h3>
      <form onSubmit={e => saveEdition(e, film.id)}>
        <input type="text"
          name="title"
          className="titulo_editado"
          defaultValue={film.title}/>
        <textarea name='description'
          defaultValue={film.description}
          className='descripcion_editada' />
        <input type="submit" className="editar" value="Actualiar" />
      </form>
    </div>
  )
}

export default Editar
