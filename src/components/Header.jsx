import { NavLink } from "react-router-dom";
import { Container, Stack, Button } from "react-bootstrap";
import { useCallback } from "react";
import useTheme from "../hook/use-theme";
export default function Header() {
  const [theme, toggleTheme] = useTheme();
  const activateLink = useCallback(
    ({ isActive }) =>
      isActive
        ? `text-success  text-shadow nav-link fs-1`
        : ` text-shadow text-shadow nav-link fs-1`,
    []
  );
  return (
    <>
      <header>
        <Container>
          <Stack direction="horizontal" gap={4}>
            <NavLink className={activateLink} to="/users">
              User
            </NavLink>
            <NavLink className={activateLink} to="/posts">
              Post
            </NavLink>
            <Button
              className="ms-auto"
              variant={theme === "light" ? "dark" : "light"}
              onClick={toggleTheme}
            >
              {theme}
            </Button>
          </Stack>
        </Container>
      </header>
    </>
  );
}
