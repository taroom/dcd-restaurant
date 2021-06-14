class AppGridItem extends HTMLElement {
  set grid(grid) {
    this._grid = grid;
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="card">
          <div class="card-img">
              <img src="${this._grid.pictureId}" style="width:100%" tabindex="0" alt="Foto Restaurant ${this._grid.name}">
              <div class="bottom-corner">
                  <span tabindex="0" aria-label="Restaurant ${this._grid.name} terletak di kota ${this._grid.city}">${this._grid.city}</span>
              </div>
          </div>
          <div class="card-body">
              <h3 tabindex="0">
                  ${this._grid.name}
              </h3>
              <div class="description">
                  <p tabindex="0">${this._grid.description}</p>
              </div>
              <div class="rate">                  
                  <span tabindex="0" aria-label="Rating Restaurant ${this._grid.name} bernilai ${this._grid.rating}">
                    Rating : ${this._grid.rating}
                  </span>
              </div>
          </div>
      </div>
      `;
  }
}

customElements.define("app-grid-item", AppGridItem);
