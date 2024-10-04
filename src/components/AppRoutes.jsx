import { useRoutes } from "react-router-dom";
import Posts from "../pages/Posts";
import Users from "../pages/Users";
import { Navigate } from "react-router-dom";
import UserPosts from "../pages/UserPost";
import PostDeteils from "../pages/PostDeteils";
const AppRoutes = () => {
  const routes = useRoutes([
    { path: "/", element: <Navigate to="/" /> },
    { path: "/posts", element: <Posts /> },
    { path: "/users", element: <Users /> },
    { path: "/user/id/posts", element: <UserPosts /> },
    { path: "/post/id", element: <PostDeteils /> },
  ]);
  return routes;
};

export default AppRoutes;
