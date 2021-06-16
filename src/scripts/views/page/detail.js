import RestaurantApiHandler from "../../data/restaurant-api-handler";
import UrlParser from "../../routes/url-parser";
import { createRestaurantDetailTemplate } from "../template/template-creator";

const Detail = {
  async render() {
    return `<div id="restaurant-one">`;
  },
  async afterRender() {
    // fungsi after render
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurantDetail = await RestaurantApiHandler.detail(url.id);
    console.log(restaurantDetail);
    const restoContainer = document.querySelector("#restaurant-one");
    restoContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail);
  },
};

export default Detail;
