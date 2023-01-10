import React, { useState } from 'react'

const Buscador = ({listState, setListState}) => {

  const [search, setSearch] = useState("");
  const [notFound, setNotFound] = useState(false);

  const searchFilm = (e) =>{
    // Crear estado y actualizarlo
    setSearch(e.target.value);

    // Filtrar para buscar coincidencias
    let film_seach = listState.filter(film => {
      return film.title.toLowerCase().includes(search.toLowerCase());
    });

    if(search.length <= 1 || film_seach <= 0){
      film_seach = JSON.parse(localStorage.getItem("films"));
      setNotFound(true);
    }else{
      setNotFound(false);
    }

    // Actualizar el estado del listado principal
    //con lo que he logrado filtrar
    setListState(film_seach);

  }
  
  return (
    <div className="search">
      <h3 className="title">Buscador</h3>
      {notFound == true && search.length > 2  && (
        <span className='not-found'>No se encontró ninguna coincidencia</span>
      )}
      <form>
        <input type="text"
          id="search_field"
          name='search'
          autoComplete='off'
          value={search}
          onChange={searchFilm}
        />
        <button id="search">Buscar</button>
      </form>
    </div>
  )
}

export default Buscador
