// mendefinisikan route
import Home from "../views/page/home";
import Detail from "../views/page/detail";
import Favorite from "../views/page/favorite";

const routes = {
  "/": Home,
  "/home": Home,
  "/detail/:id": Detail,
  "/favourite": Favorite,
};

export default routes;
