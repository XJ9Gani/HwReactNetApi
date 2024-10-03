import { useRoutes } from "react-router-dom";
import Posts from "../pages/Posts";
import Users from "../pages/Users";
import { Navigate } from "react-router-dom";

const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Navigate to="/" /> },
    { path: "/posts", element: <Posts /> },
    { path: "/users", element: <Users /> },
  ]);
  return routes;
};

export default AppRoutes;
