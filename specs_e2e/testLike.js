const assert = require("assert");

function seeEmptyFavouriteRestaurant(I) {
  //   I.seeElement("#empty-favourite");
  I.see("Belum Ada Restaurant Favorite Yang Dimasukan", ".container-title");
}

Feature("Liking Restaurant");

Before(({ I }) => {
  I.amOnPage("/#/favourite");
});

Scenario("melihat restaurant yang kosong", ({ I }) => {
  seeEmptyFavouriteRestaurant(I);
});

Scenario("menyukai satu restaurant", async ({ I }) => {
  seeEmptyFavouriteRestaurant(I);

  I.amOnPage("/");

  I.waitForElement(".link-none");
  I.seeElement(".link-none");

  const firstRestaurantLink = locate(".link-none").first();
  const firstRestaurant = locate(".card-link-title").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  // I.scrollTo("#header-title-restaurant");
  I.waitForClickable(firstRestaurantLink, 2);
  I.click(firstRestaurantLink);

  // in detail page first resto
  I.wait(3);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  // back to favorite
  I.amOnPage("/#/favourite");
  const Liked = locate(".card-link-title").first();
  const likedRestaurantTitle = await I.grabTextFrom(Liked);
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario("Batal menyukai 1 restaurant ", async ({ I }) => {
  seeEmptyFavouriteRestaurant(I);

  I.amOnPage("/");

  // see first list element
  I.waitForElement(".link-none");
  I.seeElement(".link-none");
  const firstRestaurantLink = locate(".link-none").first();
  const firstRestaurant = locate(".card-link-title").first();
  const firstRestaurantTitle = await I.grabTextFrom(firstRestaurant);

  // I.scrollTo("#header-title-restaurant");
  I.waitForClickable(firstRestaurantLink, 2);
  I.click(firstRestaurantLink);

  // waiting and click like button, detail page
  I.wait(3);
  I.seeElement("#likeButton");
  I.click("#likeButton");

  // back to favorite page
  I.amOnPage("/#/favourite");
  const Liked = locate(".card-link-title").first();
  const likedRestaurantTitle = await I.grabTextFrom(Liked);
  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);

  // dislike action
  I.wait(3);
  I.waitForElement(".link-none");
  I.seeElement(".link-none");
  const favRestaurantLink = locate(".link-none").first();
  I.waitForClickable(favRestaurantLink, 3);
  I.click(favRestaurantLink);

  // on detail page
  //   pause();
  I.wait(3);
  I.waitForElement("#likedButton");
  I.seeElement("#likedButton");
  //   I.waitForClickable("#likedButton");
  //   pause();
  I.click("#likedButton");

  // check favorite page is empty
  I.amOnPage("/#/favourite");
  seeEmptyFavouriteRestaurant(I);
});
