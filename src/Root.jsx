import { Outlet } from "react-router-dom";
import Navbar from "./Components/navbar/Navbar";
import { BookContext } from "./utilities/context";
import { useState } from "react";
import Footer from "./Components/footer/Footer";

const Root = () => {
  const [book, setBook] = useState([]);
  // console.log(book);
  return (
    <div>
      <BookContext.Provider value={{ book, setBook }}>
        <Navbar />
        <Outlet />
        <Footer />
      </BookContext.Provider>
    </div>
  );
};

export default Root;
