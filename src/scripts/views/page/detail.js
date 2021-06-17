import RestaurantApiHandler from "../../data/restaurant-api-handler";
import UrlParser from "../../routes/url-parser";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import LoaderInitiator from "../../utils/loader-initiator";
import { createRestaurantDetailTemplate } from "../template/template-creator";

const Detail = {
  async render() {
    return `
    <div id="restaurant-one"></div>
    <div id="likeButtonContainer"></div>
    `;
  },
  async afterRender() {
    // fungsi after render
    LoaderInitiator.init();

    LoaderInitiator.showLoader();

    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const restaurantDetail = await RestaurantApiHandler.detail(url.id);
    console.log(restaurantDetail);
    const restoContainer = document.querySelector("#restaurant-one");
    restoContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail);

    // show like button
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector("#likeButtonContainer"),
      restaurant: {
        id: restaurantDetail.id,
        name: restaurantDetail.name,
        pictureId: restaurantDetail.pictureId,
        city: restaurantDetail.city,
        rating: restaurantDetail.rating,
        description: restaurantDetail.description,
      },
    });

    LoaderInitiator.hideLoader();
  },
};

export default Detail;
