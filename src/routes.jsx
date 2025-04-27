import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie";
import ErrorPage from "./pages/ErrorPage"; // optional for 404s

const routes = [
  {
    path: "/",
    Component: Home,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    Component: Actors
  },
  {
    path: "/directors",
    Component: Directors
  },
  {
    path: "/movie/:id",
    Component: Movie
  }
];

export default routes;
