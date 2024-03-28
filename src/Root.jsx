import { Outlet } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
