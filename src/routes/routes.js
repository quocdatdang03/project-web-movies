import Detail from "../pages/Detail";
import Home from "../pages/Home/Home";
import CatePage from "../pages/CatePage";

const publicRoutes = [
  {
    component: Home,
    path: "/",
  },
  {
    component: CatePage,
    path: "/:category",
  },
  // {
  //   component: TvSeries,
  //   path: "/tv",
  // },
  {
    component: Detail,
    path: "/:category/:id",
  },
];

export default publicRoutes;
