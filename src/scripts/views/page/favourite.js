import FavouriteRestaurantIdb from "../../data/favourite-restaurant-idb";

const Favourite = {
  async render() {
    return ``;
  },
  async afterRender() {
    const restoContainer = document.querySelector("app-grid");

    const fallbackResult = (message) => {
      restoContainer.fallbackResult(message);
    };

    const renderResult = (results) => {
      restoContainer.grids = results;
    };

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
  },
};

export default Favourite;
