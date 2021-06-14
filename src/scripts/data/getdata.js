import data from "./DATA.json";

class getData {
  static getAllData() {
    return new Promise((resolve, reject) => {
      try {
        resolve(data.restaurants);
      } catch (error) {
        reject("Tidak bisa mengurai file json");
      }
    });
  }
}

export default getData;
