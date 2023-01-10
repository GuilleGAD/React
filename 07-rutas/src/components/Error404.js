import React from 'react'
import { Link } from 'react-router-dom'

const Error404 = () => {
  return (
    <div>
      <h1>Error 404</h1>
      <p><strong>Esta página no existe</strong></p>
      <Link to="/inicio">Vuelve al inicio</Link>
    </div>
  )
}

export default Error404
