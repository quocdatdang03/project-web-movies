import Detail from "../pages/Detail";
import Home from "../pages/Home/Home";
import Movies from "../pages/Movies";
import TvSeries from "../pages/TvSeries";

const publicRoutes = [
  {
    component: Home,
    path: "/",
  },
  {
    component: Movies,
    path: "/:category",
  },
  {
    component: TvSeries,
    path: "/tv",
  },
  {
    component: Detail,
    path: "/:category/:id",
  },
];

export default publicRoutes;
