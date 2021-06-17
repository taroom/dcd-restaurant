// mendefinisikan route
import Home from "../views/page/home";
import Detail from "../views/page/detail";
import Favourite from "../views/page/favourite";

const routes = {
  "/": Home,
  "/home": Home,
  "/detail/:id": Detail,
  "/favourite": Favourite,
};

export default routes;
