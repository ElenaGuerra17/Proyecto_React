import './App.css'

function App() {
  function mostrarMensaje() {
    alert("Este proyecto forma parte de una actividad de la materia de Tecnologías Web, en la que aprendemos a utilizar Git y GitHub. En esta página se presentan sus conceptos principales, comandos básicos y la importancia del control de versiones.")
  }

  return (
    <>
      <h1>Git y GitHub</h1>

      <button onClick={mostrarMensaje} className="btn btn-primary">
        Descripción
      </button>

      <p className="introduccion">
        Git y GitHub son herramientas muy utilizadas en el desarrollo de software.
        Permiten administrar proyectos y llevar un registro de los cambios realizados
        en ellos.
      </p>

      <hr />

      <div className="derecha">
        <img src={`${import.meta.env.BASE_URL}GIT.png`} width="250" alt="Git" />

        <h2>¿Qué es Git?</h2>

        <p>
          Git es un sistema de control de versiones distribuido, gratuito y de
          código abierto que permite registrar y rastrear todos los cambios
          realizados en el código fuente de un proyecto a lo largo del tiempo.
        </p>
      </div>

      <hr />

      <div className="izquierda">
        <img src={`${import.meta.env.BASE_URL}GitHub.png`} width="300" alt="GitHub" />

        <h2>¿Qué es GitHub?</h2>

        <p>
          GitHub es una plataforma en la nube que permite almacenar, administrar
          y colaborar en proyectos de código mediante el sistema de control de
          versiones Git. También funciona como una plataforma de colaboración
          para desarrolladores.
        </p>
      </div>

      <hr />

      <div className="container">
        <div className="row g-4">

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">¿Qué es un repositorio?</h3>

                <p className="card-text">
                  Un repositorio es un espacio de almacenamiento donde se
                  guardan, organizan y administran los archivos y el código
                  fuente de un proyecto. También permite conservar el
                  historial de cambios realizados.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">¿Qué es un commit?</h3>

                <p className="card-text">
                  Un commit es un registro de los cambios realizados en un
                  proyecto. Cada commit puede tener un mensaje que permite
                  identificar qué modificación se realizó.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100">
              <div className="card-body">
                <h3 className="card-title">
                  ¿Para qué sirve el control de versiones?
                </h3>

                <p className="card-text">
                  El control de versiones permite mantener un historial de
                  los cambios de un proyecto. También permite consultar
                  versiones anteriores y trabajar de una manera más organizada.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <hr />

      <h2 className="titulo-comandos">Comandos básicos de Git</h2>

      <p className="texto-comandos">
        Algunos comandos básicos que se utilizan para trabajar con Git son:
      </p>

      <ul>
        <li><strong>git init</strong> - Inicializa un repositorio.</li>
        <li><strong>git status</strong> - Muestra el estado del repositorio.</li>
        <li><strong>git add</strong> - Prepara los archivos para un commit.</li>
        <li><strong>git commit</strong> - Guarda los cambios en el historial.</li>
        <li><strong>git push</strong> - Envía los cambios a GitHub.</li>
      </ul>

      <hr />

      <h2 className="titulo-AcercaDeMi">Acerca de mí</h2>

      <p className="AcercaDeMi">
        Soy estudiante de Ingeniería en Sistemas Informáticos y actualmente
        estoy aprendiendo sobre desarrollo web, Git y GitHub. Este proyecto
        forma parte de una actividad práctica en la que estoy aprendiendo a
        administrar y publicar proyectos utilizando comandos desde la terminal.
      </p>
    </>
  )
}

export default App