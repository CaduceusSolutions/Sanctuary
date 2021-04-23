class Footer extends HTMLElement {
    constructor() {
      super();
    }
  

connectedCallback() {
    this.innerHTML = `

    <div class = "container" style = "text-align: center;">
    <footer class="container">
    <p class="float-right"><a href="#">Back to top</a></p>
    <p>&copy; 2021 Caduceus Solutions &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
    </main>
    </div>


    `;
}
}

customElements.define('footer-component', Footer);