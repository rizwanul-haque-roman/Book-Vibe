import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "./Components/home/Home";
import ListedBooks from "./Components/listedBooks/ListedBooks";
import PagesToRead from "./Components/pagesToRead/PagesToRead";
import BookDetails from "./Components/bookDetails/BookDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReadBooks from "./Components/readBooks/ReadBooks";
import WishList from "./Components/wishList/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed",
        element: <ListedBooks />,
        children: [
          {
            path: "/listed/read",
            element: <ReadBooks />,
          },
          {
            path: "/listed/wishlist",
            element: <WishList />,
          },
        ],
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/details",
        element: <BookDetails />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </React.StrictMode>
);
