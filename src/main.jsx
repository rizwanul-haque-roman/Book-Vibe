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
import ErrorPage from "./Components/errorPage/ErrorPage";
import Request from "./Components/request/Request";
import Featured from "./Components/featured/Featured";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed",
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/request",
        element: <Request />,
      },
      {
        path: "/featured",
        element: <Featured />,
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
