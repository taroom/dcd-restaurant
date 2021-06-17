import FavouriteRestaurantIdb from "../../data/favourite-restaurant-idb";
import LoaderInitiator from "../../utils/loader-initiator";

const Favourite = {
  async render() {
    return `
    <app-grid></app-grid>
    `;
  },
  async afterRender() {
    const restoContainer = document.querySelector("app-grid");

    const fallbackResult = (message) => {
      restoContainer.fallbackResult(message);
    };

    const renderResult = (results) => {
      restoContainer.grids = results;
    };

    LoaderInitiator.init();

    LoaderInitiator.showLoader();

    try {
      const restaurant = await FavouriteRestaurantIdb.getAllRestaurants();

      if (restaurant.length === 0) {
        fallbackResult("Tidak ada restaurant favorite");
      } else {
        renderResult(restaurant);
      }
    } catch (message) {
      fallbackResult(message);
    }

    LoaderInitiator.hideLoader();
  },
};

export default Favourite;
