import FavouriteRestaurantIdb from "../../data/favourite-restaurant-idb";
import LoaderInitiator from "../../utils/loader-initiator";

const Favourite = {
  async render() {
    return `
    <h1 id="header-title-restaurant" class="txt-center" tabindex="0">Restaurant Favourite</h1>
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
        fallbackResult(
          `<div class="empty-favourite"><div class="container-title">Belum Ada Restaurant Favorite Yang Dimasukan</div></div>`
        );
      } else {
        renderResult(restaurant);
      }
    } catch (message) {
      console.log(message);
      fallbackResult(message);
    }

    LoaderInitiator.hideLoader();
  },
};

export default Favourite;
