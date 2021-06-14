class AppGrid extends HTMLElement {
  constructor() {
    super();
    this._grids = [];
  }

  set grids(grids) {
    this._grids = grids;
    this.render();
  }

  renderError(message) {
    this.innerHTML = "Error terjadi " + message;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = ``;
    this._grids.forEach((datarestaurant) => {
      const gridItemElm = document.createElement("app-grid-item");
      gridItemElm.grid = datarestaurant;
      this.appendChild(gridItemElm);
    });

    document.querySelector("app-grid").classList.add("app-grid-wrap");
  }
}

customElements.define("app-grid", AppGrid);
