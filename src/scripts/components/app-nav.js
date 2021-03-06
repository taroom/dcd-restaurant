class AppNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <button id="hamburger">☰</button>
    <nav id="drawer">
      <div class="navbar">
        <div class="navbar-brand">
          <b>Restaurant Mama</b>
        </div>
        <div class="drawer-menu" id="drawer-menu">
          <ul>
            <li>
              <a id="home-link" href="#/home" aria-label="link menuju home">Home</a>
            </li>
            <li>
              <a id="fav" href="#/favourite" aria-label="link menuju favorite">Favorite</a>
            </li>
            <li>
              <a id="about-me" aria-label="menuju halaman tentang kami" target="_blank" href="https://agussutarom.wordpress.com">About Us</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    `;

    // navigation drawer
    const hamburgerButtonElement = document.querySelector("#hamburger");
    const drawerElement = document.querySelector("#drawer");
    const mainElement = document.querySelector("main");

    hamburgerButtonElement.addEventListener("click", (event) => {
      drawerElement.classList.toggle("open");
      event.stopPropagation();
    });

    mainElement.addEventListener("click", (event) => {
      drawerElement.classList.remove("open");
      event.stopPropagation();
    });
  }
}

customElements.define("app-nav", AppNav);
