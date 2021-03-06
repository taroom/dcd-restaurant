import FavouriteRestaurantIdb from "../data/favourite-restaurant-idb";
import {
  displayLikeButtonTemplate,
  displayLikedButtonTemplate,
} from "../views/template/template-creator";

const LikeButtonInitiator = {
  async init({ likeButtonContainer, restaurant }) {
    this.likeButtonContainer = likeButtonContainer;
    this._restaurant = restaurant;

    await this.renderButton();
  },

  async renderButton() {
    const { id } = this._restaurant;
    if (await this._isRestaurantExist(id)) {
      this.renderLiked();
    } else {
      this.renderLike();
    }
  },

  async _isRestaurantExist(id) {
    const restaurant = await FavouriteRestaurantIdb.getRestaurant(id);
    return !!restaurant;
  },

  renderLike() {
    this.likeButtonContainer.innerHTML = displayLikeButtonTemplate();

    const likeButton = document.querySelector("#likeButton");
    likeButton.addEventListener("click", async () => {
      await FavouriteRestaurantIdb.putRestaurant(this._restaurant);
      this.renderButton();
    });
  },

  renderLiked() {
    this.likeButtonContainer.innerHTML = displayLikedButtonTemplate();

    const likeButton = document.querySelector("#likedButton");
    likeButton.addEventListener("click", async () => {
      await FavouriteRestaurantIdb.deleteRestaurant(this._restaurant.id);
      this.renderButton();
    });
  },
};

export default LikeButtonInitiator;
