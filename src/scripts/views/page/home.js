import RestaurantApiHandler from "../../data/restaurant-api-handler";
import LoaderInitiator from "../../utils/loader-initiator";

const Home = {
  async render() {
    return `
    <app-grid></app-grid>
    `;
  },

  async afterRender() {
    // fungsi after render
    LoaderInitiator.init();

    LoaderInitiator.showLoader();
    const restoContainer = document.querySelector("app-grid");
    const fallbackResult = (message) => {
      restoContainer.fallbackResult(message);
    };

    const renderResult = (results) => {
      restoContainer.grids = results;
    };

    try {
      const restaurant = await RestaurantApiHandler.list();
      renderResult(restaurant);
    } catch (message) {
      fallbackResult(message);
    }

    LoaderInitiator.hideLoader();
  },
};

export default Home;
