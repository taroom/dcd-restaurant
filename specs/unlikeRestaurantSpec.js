import FavoriteRestaurantIdb from "../src/scripts/data/favourite-restaurant-idb";
import createLikeButtonPresenter from "./helpers/testFactories";

const addLikeButtonContainer = () => {
  document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe("Unlike sebuah restaurant", () => {
  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("harus ditampilkan unlike tombol ketika restoran disukai ", async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(
      document.querySelector(
        '[aria-label="hapus restoran dari daftar favorite"]'
      )
    ).toBeTruthy();
  });

  it("seharusnya tidak menampilkan tombol like ketika restoran telah disukai ", async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(
      document.querySelector(
        '[aria-label="tambahkan restoran ke daftar favorite"]'
      )
    ).toBeFalsy();
  });

  it("harus dapat menghapus restoran yang disukai dari daftar", async () => {
    await createLikeButtonPresenter({ id: 1 });

    document
      .querySelector('[aria-label="hapus restoran dari daftar favorite"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });

  it("tidak boleh menampilkan kesalahan jika restoran yang tidak disukai tidak ada dalam daftar", async () => {
    await createLikeButtonPresenter({ id: 1 });

    // hapus dulu dara restaurant dari daftar restaurant yang disukai
    await FavoriteRestaurantIdb.deleteRestaurant(1);

    // kemudian, simulasikan pengguna menekan tombol batal menyukai estaurant
    document
      .querySelector('[aria-label="hapus restoran dari daftar favorite"]')
      .dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
