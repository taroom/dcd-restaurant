const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener("click", (event) => {
      if (drawer.classList.contains("hidden")) {
        this.toggleDrawer(event, drawer);
      } else {
        this.closeDrawer(event, drawer);
      }
    });

    content.addEventListener("click", (event) => {
      this.closeDrawer(event, drawer);
    });
  },

  toggleDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove("hidden");
  },

  closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.add("hidden");
  },
};

export default DrawerInitiator;
