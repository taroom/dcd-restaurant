import RestaurantApiHandler from "../../data/restaurant-api-handler";

const Home = {
  async render() {
    return `<h1>Halaman Beranda</h1>`;
  },
  async afterRender() {
    // fungsi after render
    const restaurant = await RestaurantApiHandler.list();
    console.log(restaurant);
  },
};

export default Home;
