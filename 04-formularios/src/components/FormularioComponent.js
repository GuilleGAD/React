import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';

const FormularioComponent = () => {

  const [usuario, setUsuario] = useState("");

  const conseguirDatosFormulario = e => {
    e.preventDefault();
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.sexo.value,
      biografia: datos.biografia.value
    };
    alert(usuario.nombre + " " + usuario.apellido + " " + usuario.genero + " " + usuario.biografia);
  
  }

  return (
    <div>
      <h1>Formulario con React</h1>

      <Form onSubmit={conseguirDatosFormulario}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Control type="text" placeholder="Ingrese su Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Control type="text" placeholder="Ingrese su Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="sexo">
          <Form.Select className='mb-3'>
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </Form.Select>
        </Form.Group>
        <InputGroup>
          <Form.Control as="textarea" aria-label="With textarea" id="biografia" />
        </InputGroup>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>


      {/*
      //Codigo sin ReactBoostrap
      <br/><br/>
      <form onSubmit={conseguirDatosFormulario}>
        <input type="text" name="name" placeholder='Nombre'></input>
        <input type="text" name="lastname" placeholder='Apellido'></input>
        <select name="sex">
          <option value="man">Hombre</option>
          <option value="woman">Mujer</option>
        </select>
        <textarea name="bio" placeholder='Biografia'></textarea>
        <Button type="submit">Enviar</Button>
      </form>*/}
    </div>
  )
}

export default FormularioComponent
