class AppFooter extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <footer>
        Copyright &copy; 2021 - Restaurant Mama Tuban
      </footer>
    `;
  }
}

customElements.define("app-footer", AppFooter);
