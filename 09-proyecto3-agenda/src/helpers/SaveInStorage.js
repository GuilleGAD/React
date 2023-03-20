// *value es el nombre del elemento en storage
// *element es el elemento que queremos agregar dentro de value
// *messageError es el error que queremos mostrar en caso de que haya 
//  un elemento que ya fue agregado previamente
export const SaveInStorage = (value, element, listState, setListState, messageError) => {
  // Conseguir los elementos que ya tenemos en el localstorage
  let elements = JSON.parse(localStorage.getItem(value));
  let existElement = false;
  // Comprobar si value es un array
  if (Array.isArray(elements)) {
    // Verifico que el elemento no esté repetido
    for (const iterator of elements) {
      if (element.title.toLowerCase() === iterator.title.toLowerCase()) {
        alert(messageError);
        existElement = true;
        break;
      }
    }
    if (!existElement) {
      // Añadir dentro del array un elemento nuevo
      elements.push(element);
    }
  } else {
    // Crear un array con el elemento nuevo
    elements = [element];
  }

  if (!existElement) {
    // Actualizar el listado principal
    if (listState !== null) {
      setListState(elements => {
        return [...elements, element];
      });
    } else {
      setListState([element]);
    }

    // Guardar en el localstorage
    localStorage.setItem(value, JSON.stringify(elements));

  }

  // (opcional) Devolver el objeto guardado
  return element;
}
