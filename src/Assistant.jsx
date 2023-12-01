export const Assistant = () => {
  //test comment
  return (
    <>
    <div class="container-fluid">

      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Assistant</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
              <a class="nav-link" href="#">Features</a>
              <a class="nav-link" href="#">Pricing</a>
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>

      <div class="message_left_button"><button type="button" class="btn btn-success">Visitar nuestro website</button></div>

      <div class="message_left_button"><button type="button" class="btn btn-success">Hacer una prueba gratis</button></div>

      <div class="message_right">Hola, necesito ayuda</div>

      <div class="message_left">Hola, en que puedo ayudarle?</div>

      <input type="text" class="message_input" id="fname" name="fname" placeholder="Mensaje..."></input>

      

    </div>
    </>
  )
}
