import API from "../globals/api";
import CONFIGURATION from "../globals/configuration";

class RestaurantApiHandler {
  static async list() {
    const response = await fetch(API.LIST);
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async detail(id) {
    const response = await fetch(API.DETAIL(id));
    const responseJson = await response.json();
    return responseJson.restaurant;
  }

  static async search(query) {
    const response = await fetch(API.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.restaurants;
  }

  static async addReview(body) {
    const response = await fetch(API.ADD_REVIEW, {
      headers: {
        "X-Auth-Token": CONFIGURATION.KEY,
        "Content-Type": "application/json",
      },
      body,
      method: "POST",
    });
    const responseJson = await response.json();
    return responseJson.customerReviews;
  }
}

export default RestaurantApiHandler;
