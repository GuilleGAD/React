import React, { useState } from 'react';
import { Button, Form, InputGroup } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

const FormularioComponent = () => {

  const [usuario, setUsuario] = useState({});

  const conseguirDatosFormulario = e => {
    e.preventDefault();
    let datos = e.target;
    let usuario = {
      nombre: datos.nombre.value,
      apellido: datos.apellido.value,
      genero: datos.genero.value,
      biografia: datos.biografia.value,
      enviar: datos.enviar.name
    };
    /*alert(usuario.nombre + " " + usuario.apellido + " " + usuario.genero + " " + usuario.biografia);*/
    setUsuario(usuario);
  }

  const modUsuario = e => {
    let name_input = e.target.id;
    let usuario_para_modificar = usuario;

    //usuario_para_modificar[name_input] = e.target.value;

    setUsuario(estado_previo => {
      return {
        ...estado_previo,
        [name_input]: e.target.value
      }
    });
    
  };

  return (
    <div>
      <h1>Formulario con React</h1>

      {usuario.enviar &&
        (
          <Card
            bg='info'
            key='info'
            text='dark'
            style={{ width: '18rem' }}
            className="mb-2"
          >
            <Card.Body>
              {usuario.nombre} {usuario.apellido} es un {usuario.genero}
              <p>y su biografía es la siguiente:</p>
              <p>{usuario.biografia}</p>
            </Card.Body>
          </Card>
        )
      }

      <Form onSubmit={conseguirDatosFormulario}>
        <Form.Group className="mb-3" controlId="nombre">
          <Form.Control type="text" onChange={modUsuario} placeholder="Ingrese su Nombre" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="apellido">
          <Form.Control type="text" onChange={modUsuario} placeholder="Ingrese su Apellido" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="genero">
          <Form.Select className='mb-3' >
            <option value="hombre">Hombre</option>
            <option value="mujer">Mujer</option>
          </Form.Select>
        </Form.Group>
        <InputGroup>
          <Form.Control as="textarea" aria-label="With textarea" onChange={modUsuario} id="biografia" />
        </InputGroup>
        <Button variant="primary" type="submit" name="enviar">
          Enviar
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
