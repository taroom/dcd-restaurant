import { openDB } from "idb";
import CONFIGURATION from "../globals/configuration";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_ID } = CONFIGURATION;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_ID, { keyPath: "id" });
  },
});

const FavoriteRestaurantIdb = {
  async getRestaurant(id) {
    return (await dbPromise).get(OBJECT_STORE_ID, id);
  },

  async getAllRestaurants() {
    return (await dbPromise).getAll(OBJECT_STORE_ID);
  },

  async putRestaurant(restaurant) {
    return (await dbPromise).put(OBJECT_STORE_ID, restaurant);
  },

  async deleteRestaurant(id) {
    return (await dbPromise).delete(OBJECT_STORE_ID, id);
  },
};

export default FavoriteRestaurantIdb;
