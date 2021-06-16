import RestaurantApiHandler from "../../data/restaurant-api-handler";

const Home = {
  async render() {
    return ``;
  },
  async afterRender() {
    // fungsi after render
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
  },
};

export default Home;
