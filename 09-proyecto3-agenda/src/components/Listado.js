import React, { useEffect, useState } from 'react';
import Editar from './Editar';

const Listado = ({ listState, setListState }) => {

  const [edit, setEdit] = useState(0);

  useEffect(() => {
    pullElem();
  }, []);

  const pullElem = () => {
    let elems = JSON.parse(localStorage.getItem("elems"));
    setListState(elems);

    return elems;
  }

  const deleteElem = (id) => {
    // Conseguir peliculas almacenadas
    let elems = pullElem();

    // Filtrar esas peliculas por ID
    let new_elems_list = elems.filter(elem => elem.id !== parseInt(id));

    // Actualizar el listado
    setListState(new_elems_list);

    // Actualizar los datos en el LocalStorage
    let list_string = JSON.stringify(new_elems_list);
    localStorage.setItem("elems", list_string);
  }

  return (
    <>
      {listState != null && listState.length !== 0 ?
        listState.map(elem => {
          return (
            <article key={elem.id} className="peli-item">
              <h3 className="title">{elem.title}</h3>
              <p className="description">{elem.description}</p>

              <button className="edit" onClick={() => { setEdit(elem.id) }}>Editar</button>
              <button className="delete" onClick={() => deleteElem(elem.id)}>Borrar</button>
              {/* Aparece un formulario de editar */}
              {edit === elem.id && (
                <Editar elem={elem}
                  pullElem={pullElem}
                  setEdit={setEdit}
                  setListState={setListState}
                />
              )}
            </article>
          );
        })
        : <h2>No hay peliculas por el momento</h2>

      }

    </>
  )
}

export default Listado
