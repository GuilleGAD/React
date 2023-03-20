import React from 'react'

const Contacto = () => {
  document.body.style.backgroundColor = "#fff";
  return (
    <div className='page contacto'>
      <h1 className='heading'>Contacto</h1>

      {/* Section: Contact v.2 */}
      <section className="mb-4">

        <div className="row">

          {/* Grid column */}
          <div className="col-md-9 mb-md-0 mb-5">
            {/* Section description */}
            <p className="text-center w-responsive mx-auto mb-5">Tienes alguan pregunta? Por favor, no dude en contactarme. Me comunicaré contigo en cuestión de horas para ayudarte.</p>
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

              {/* Grid row */}
              <div className="row">

                {/* Grid column */}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="name" name="name" className="form-control" />
                      <label for="name" className="">Nombre</label>
                  </div>
                </div>
                {/* Grid column */}

                {/* Grid column */}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                    <input type="text" id="email" name="email" className="form-control" />
                      <label for="email" className="">Email</label>
                  </div>
                </div>
                {/* Grid column */}

              </div>
              {/* Grid row */}

              {/* Grid row */}
              <div className="row">
                <div className="col-md-12">
                  <div className="md-form mb-0">
                    <input type="text" id="subject" name="subject" className="form-control" />
                      <label for="subject" className="">Asunto</label>
                  </div>
                </div>
              </div>
              {/* Grid row */}

              {/* Grid row */}
              <div className="row">

                {/* Grid column */}
                <div className="col-md-12">

                  <div className="md-form">
                    <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                    <label for="message">Mensaje</label>
                  </div>

                </div>
              </div>
              {/* Grid row */}

            </form>

            <div className="text-center text-md-left">
              <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Enviar</a>
            </div>
            <div className="status"></div>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
              <li><i className="fas fa-map-marker-alt fa-2x"></i>
                <p>Almería, CP 04004, España</p>
              </li>

              <li><i className="fas fa-phone mt-4 fa-2x"></i>
                <p>+34 654988821</p>
              </li>

              <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                <p>guillermo.diarte@gmail.com</p>
              </li>
            </ul>
          </div>
          {/* Grid column */}

        </div>

      </section>
      {/* Section: Contact v.2 */}

    </div>
  )
}

export default Contacto
