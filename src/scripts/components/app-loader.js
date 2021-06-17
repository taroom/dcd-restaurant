class AppLoader extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="overlay">
            <div class="spanner">
                <div class="loader"></div>
            </div>
        </div>
    `;
  }
}

customElements.define("app-loader", AppLoader);
