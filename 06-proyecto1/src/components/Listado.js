import React, { useEffect, useState } from 'react';
import Editar from './Editar';

const Listado = ({ listState, setListState }) => {

  const [edit, setEdit] = useState(0);

  useEffect(() => {
    pullFilm();
  }, []);

  const pullFilm = () => {
    let films = JSON.parse(localStorage.getItem("films"));
    setListState(films);

    return films;
  }

  const deleteFilm = (id) => {
    // Conseguir peliculas almacenadas
    let films = pullFilm();

    // Filtrar esas peliculas por ID
    let new_films_list = films.filter(film => film.id !== parseInt(id));

    // Actualizar el listado
    setListState(new_films_list);

    // Actualizar los datos en el LocalStorage
    let list_string = JSON.stringify(new_films_list);
    localStorage.setItem("films", list_string);
  }

  return (
    <>
      {listState != null && listState.length !== 0 ?
        listState.map(film => {
          return (
            <article key={film.id} className="peli-item">
              <h3 className="title">{film.title}</h3>
              <p className="description">{film.description}</p>

              <button className="edit" onClick={() => { setEdit(film.id) }}>Editar</button>
              <button className="delete" onClick={() => deleteFilm(film.id)}>Borrar</button>
              {/* Aparece un formulario de editar */}
              {edit === film.id && (
                <Editar film={film}
                  pullFilm={pullFilm}
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
