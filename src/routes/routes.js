import Detail from "../pages/Detail";
import Home from "../pages/Home/Home";
import CatePage from "../pages/CatePage";
import FavoritePage from "../pages/FavoritePage";

const publicRoutes = [
  {
    component: CatePage,
    path: "/search/:category/:keyword",
  },
  {
    component: Home,
    path: "/",
  },
  {
    component: CatePage,
    path: "/:category",
  },
  {
    component: Detail,
    path: "/:category/:id",
  },
  {
    component: FavoritePage,
    path: "/favorite",
  },
];

export default publicRoutes;
