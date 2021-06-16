import CONFIGURATION from "../../globals/configuration";

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
`;

export default createRestaurantDetailTemplate;
