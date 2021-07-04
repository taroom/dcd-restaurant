class AppHero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
            <section class="hero" aria-label="bagian hero">
              <div class="overlay"></div>
              <h1 class="hero-title">Restaurant Mama</h1>
            </section>
        `;
  }
}

customElements.define("app-hero", AppHero);
