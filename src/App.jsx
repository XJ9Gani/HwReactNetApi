import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter } from "react-router-dom";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <AppRoutes />
      </BrowserRouter>
    </>
  );
}
