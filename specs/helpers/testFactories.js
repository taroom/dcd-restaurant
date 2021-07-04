import LikeButtonInitiator from "../../src/scripts/utils/like-button-initiator";

const createLikeButtonPresenter = async (restaurant) => {
  await LikeButtonInitiator.init({
    likeButtonContainer: document.querySelector("#likeButtonContainer"),
    restaurant,
  });
};

export default createLikeButtonPresenter;
