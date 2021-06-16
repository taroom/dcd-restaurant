import RestaurantApiHandler from "../../data/restaurant-api-handler";
import UrlParser from "../../routes/url-parser";

const Detail = {
  async render() {
    return `<h1>Halaman Detail</h1>`;
  },
  async afterRender() {
    // fungsi after render
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await RestaurantApiHandler.detail(url.id);
    console.log(restaurantDetail);
  },
};

export default Detail;
