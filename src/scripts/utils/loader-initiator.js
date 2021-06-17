const LoaderInitiator = {
  init() {
    this.overlay = document.querySelector("#overlay");
    this.spanner = document.querySelector("#spanner");
  },

  showLoader() {
    this.overlay.classList.add("show");
    this.spanner.classList.add("show");
  },

  hideLoader() {
    this.overlay.classList.remove("show");
    this.spanner.classList.remove("show");
  },
};

export default LoaderInitiator;
