class Footer extends HTMLElement {
    constructor() {
      super();
    }
  

connectedCallback() {
    //add a class = "btn btn-primary" for button for back to top
    this.innerHTML = `
  
    <div class = "container" style = "text-align: center;">
    <footer class="container">
    <a  href = "#">Back To The Top</a>
  
    <p style = "font-family: 'Raleway', sans-serif;">&copy; 2021 Caduceus Solutions &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
    </main>
    </div>


    `;
}
}

customElements.define('footer-component', Footer);