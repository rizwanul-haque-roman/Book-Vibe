import { Outlet } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
