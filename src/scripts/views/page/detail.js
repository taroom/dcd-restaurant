import RestaurantApiHandler from "../../data/restaurant-api-handler";
import UrlParser from "../../routes/url-parser";
import LikeButtonInitiator from "../../utils/like-button-initiator";
import LoaderInitiator from "../../utils/loader-initiator";
import {
  createRestaurantDetailTemplate,
  _displayReview,
} from "../template/template-creator";

const Detail = {
  async render() {
    return `
    <h1 class="txt-center" id="restaurant-name" tabindex="0"></h1>
    <div class="app-detail-wrap">
      <div id="restaurant-one"></div>
      <div id="likeButtonContainer"></div>

      <p><b>Add Review</b></p>
      <div class="tambah-review">
          <div class="inputan">
              <p class="label">Nama</p>
              <input class="input" type="text" id="name" name="name" placeholder="Nama Kamu.."></input>
          </div>
          <div class="inputan">
              <p class="label">Review</p>
              <textarea class="input" type="text" id="review" name="review" placeholder="Review Kamu.."></textarea>
          </div>
          <button id="btn-submit" class="btn-44">Submit</button>
      </div>
    </div>
    `;
  },
  async afterRender() {
    // fungsi after render
    LoaderInitiator.init();

    LoaderInitiator.showLoader();

    const url = UrlParser.parseActiveUrlWithoutCombiner();

    const restaurantDetail = await RestaurantApiHandler.detail(url.id);
    const restoName = document.querySelector("#restaurant-name");
    const restoContainer = document.querySelector("#restaurant-one");
    restoName.innerHTML = restaurantDetail.name;
    restoContainer.innerHTML = createRestaurantDetailTemplate(restaurantDetail);

    const reviewContainer = document.querySelector("#review-area");
    const btnShow = document.querySelector("#btn-show");
    btnShow.addEventListener("click", () => {
      reviewContainer.innerHTML = _displayReview(
        restaurantDetail.customerReviews,
        0
      );
      btnShow.classList.add("hide");
    });

    // add review fx
    const btnSubmit = document.querySelector("#btn-submit");
    const name = document.querySelector("#name");
    const review = document.querySelector("#review");

    btnSubmit.addEventListener("click", async () => {
      LoaderInitiator.showLoader();
      if (!name.value || !review.value) {
        alert("Lengkapi isian");
      } else {
        const reviews = await RestaurantApiHandler.addReview(
          JSON.stringify({
            id: `${url.id}`,
            name: `${name.value}`,
            review: `${review.value}`,
          })
        );
        reviewContainer.innerHTML = _displayReview(reviews);
        name.value = "";
        review.value = "";
      }
      LoaderInitiator.hideLoader();
    });

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
