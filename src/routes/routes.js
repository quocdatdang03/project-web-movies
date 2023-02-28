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
    path: "/movies",
  },
  {
    component: TvSeries,
    path: "/tvseries",
  },
];

export default publicRoutes;
