class AppNav extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <a id="hamburger" href="javascript:void(0)">☰</a>
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
              <a id="fav" href="#/favorite" aria-label="link menuju favorite">Favorite</a>
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
