import CONFIGURATION from "../../globals/configuration";
import extractNameFromObject from "../../utils/extract-name-from-object";

const _mappingList = (arrObj) => {
  let innerLi = "";
  arrObj.forEach((element) => {
    innerLi += `<li>${element}</li>`;
  });
  return innerLi;
};

const _displayReview = (arrObj, limit) => {
  let innerReview = "";
  for (let i = 0; i < arrObj.length; i++) {
    const element = arrObj[i];
    innerReview += `
            <div class="card-review">
                <p><u>${element.date} oleh <b>${element.name}</b></u></p>
                <p>${element.review}</p>
            </div>
        `;
    if (limit !== 0 && i === limit - 1) {
      break;
    }
  }
  return innerReview;
};

const createRestaurantDetailTemplate = (resto) => `
      <img src="${
        resto.pictureId
          ? `${CONFIGURATION.BASE_URL_IMAGE}/large/${resto.pictureId}`
          : "https://picsum.photos/id/666/800/450?grayscale"
      }" style="width:100%" tabindex="0" alt="Foto Restaurant ${resto.name}">
      <div class="bottom-corner">
          <span tabindex="0" aria-label="Restaurant ${
            resto.name
          } terletak di kota ${resto.city}">${resto.city}</span>
      </div>
  
      <h3 tabindex="0">
          ${resto.name}
      </h3>

      <p>${resto.address}, ${resto.city}</p>

      kategori : ${extractNameFromObject(resto.categories)} <br>
      Menu Makanan : <br>
      <ul>${_mappingList(extractNameFromObject(resto.menus.foods))}</ul>
      Menu Minuman : <br>
      <ul>${_mappingList(extractNameFromObject(resto.menus.drinks))}</ul>

      <div class="description">
          <p tabindex="0">${resto.description}</p>
      </div>
      <div class="rate">                  
          <span tabindex="0" aria-label="Rating Restaurant ${
            resto.name
          } bernilai ${resto.rating}">
            Rating : ${resto.rating}
          </span>
      </div>

      <div id="review-area">${_displayReview(resto.customerReviews, 3)}</div>
`;

const displayLikeButtonTemplate = () => `
    <button aria-label="tambahkan restoran ke daftar favorite" id="likeButton" class="like">
        Tambahkan Ke Favorite
    </button>
    `;

const displayLikedButtonTemplate = () => `
    <button aria-label="hapus restoran dari daftar favorite" id="likeButton" class="like">
        Hapus Dari Favorite
    </button>
    `;

export {
  createRestaurantDetailTemplate,
  displayLikeButtonTemplate,
  displayLikedButtonTemplate,
};
