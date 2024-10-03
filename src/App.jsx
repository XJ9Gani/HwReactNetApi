import Header from "./components/Header";
import AppRoutes from "./components/AppRoutes";
import { BrowserRouter } from "react-router-dom";
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
