class Header extends HTMLElement {
    constructor() {
      super();
    }
  

connectedCallback() {
    this.innerHTML = `

    <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top justify-content-between container" >
    <div class="container-fluid">
    <a class="navbar-brand" href="index.html">
        <img src="images/vision.png" width="40" height="40" class="d-inline-block align-top" alt="">
      
      </a>
      <a class="navbar-brand" href="index.html" style = "font-family: 'Poppins', sans-serif;">Caduceus Solutions</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">


          <li class="nav-item">
            <a id = "navlink" class="nav-link active" aria-current="page" href="index.html">Home</a>
          </li>
          <li class="nav-item">
            <a id = "navlink" class="nav-link" href="ourproduct.html">Sanctuary</a>

          </li>

          <li class="nav-item">
            <a id = "navlink" class="nav-link" href="history.html">History</a>

          </li>
          <li class="nav-item">
            <a id = "navlink" class="nav-link" href="signup.html">Schedule</a>

          </li>

         

          </li>
          
          
         
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" style = "font-family: 'Oxygen', sans-serif;" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Stay In Touch
            </a>
            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
              <li><a id = "navlink" class="dropdown-item" href="twitter.html">Our Twitter</a></li>
              <li><a id = "navlink" class="dropdown-item" href="contact.html">Contact Us</a></li>
      
            </ul>
          </li>

          <li class="nav-item">
          <a id = "navlink" class="nav-link" href="about.html">About</a>

        </li>

         
        </ul>
   
      </div>
    </div>
  </nav>




    `;
}
}

customElements.define('header-component', Header);