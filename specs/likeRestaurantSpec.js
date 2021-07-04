import FavoriteRestaurantIdb from "../src/scripts/data/favourite-restaurant-idb";
import createLikeButtonPresenter from "./helpers/testFactories";

describe("Menyukai Restaurant", () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it("menampilkan tombol like ketika restaurant belum di like sebelumnya", async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(
      document.querySelector(
        '[aria-label="tambahkan restoran ke daftar favorite"]'
      )
    ).toBeTruthy();
  });

  it("tidak boleh menampilkan tombol suka ketika restoran belum pernah disukai sebelumnya ", async () => {
    await createLikeButtonPresenter({ id: 1 });

    expect(
      document.querySelector(
        '[aria-label="hapus restoran dari daftar favorite"]'
      )
    ).toBeFalsy();
  });

  it("bisa menyukai restoran ", async () => {
    await createLikeButtonPresenter({ id: 1 });

    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    const Restaurant = await FavoriteRestaurantIdb.getRestaurant(1);

    expect(Restaurant).toEqual({ id: 1 });

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("sebaiknya tidak menambahkan restoran lagi ketika sudah disukai ", async () => {
    await createLikeButtonPresenter({ id: 1 });

    // Tambahkan restaurant dengan ID 1 ke daftar film yang disukai
    await FavoriteRestaurantIdb.putRestaurant({ id: 1 });
    // Simulasikan pengguna menekan tombol suka film
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));
    // tidak ada film yang ganda
    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([
      { id: 1 },
    ]);

    FavoriteRestaurantIdb.deleteRestaurant(1);
  });

  it("tidak boleh menambahkan restoran ketika tidak memiliki id", async () => {
    await createLikeButtonPresenter({});
    document.querySelector("#likeButton").dispatchEvent(new Event("click"));

    expect(await FavoriteRestaurantIdb.getAllRestaurants()).toEqual([]);
  });
});
