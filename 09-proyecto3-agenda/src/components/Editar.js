import React from 'react'

const Editar = ({elem, pullElem, setEdit, setListState}) => {
  const component_tittle = "Editar Pelicula";

  const saveEdition = (e, id) =>{
    e.preventDefault();
    
    // Conseguir el target del evento
    let target = e.target;

    // Buscar el indice del objeto de la pelicula a actualizar
    const elemsInStorage = pullElem();
    const index = elemsInStorage.findIndex(peli => peli.id === id);
    
    // Crear objeto con el id de ese indice, con el titulo y descripcion del formulario
    let elem_update = {
      id,
      title: target.title.value,
      description: target.description.value
    }
    
    // Actualizar el elemento con ese índice
    elemsInStorage[index] = elem_update;

    // Guardar en el LocalStorage
    localStorage.setItem("elems", JSON.stringify(elemsInStorage));

    // Actualziar estados
    setListState(elemsInStorage);
    setEdit(0);
  }

  return (
    <div className="edit_form">
      <h3 className='title'>{component_tittle}</h3>
      <form onSubmit={e => saveEdition(e, elem.id)}>
        <input type="text"
          name="title"
          className="titulo_editado"
          defaultValue={elem.title}/>
        <textarea name='description'
          defaultValue={elem.description}
          className='descripcion_editada' />
        <input type="submit" className="editar" value="Actualiar" />
      </form>
    </div>
  )
}

export default Editar
