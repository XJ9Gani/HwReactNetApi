import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header>
        <NavLink to="/users">User</NavLink>
        <NavLink to="/posts">Post</NavLink>
      </header>
    </>
  );
}
