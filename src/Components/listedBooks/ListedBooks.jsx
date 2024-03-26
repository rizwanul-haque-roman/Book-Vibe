import { NavLink, Outlet } from "react-router-dom";

const ListedBooks = () => {
  return (
    <div className="container mx-auto">
      <h1 className="work-sans text-black text-5xl font-bold text-center py-10 bg-base-200 rounded-2xl">
        Explored Books
      </h1>
      <div className="text-center my-11">
        <button className="btn bg-[#23BE0A] font-semibold text-lg work-sans text-white">
          Sort
        </button>
      </div>
      <div className="border-b-2">
        <NavLink
          to="/listed/read"
          className={({ isActive }) =>
            isActive
              ? "border border-l-2 border-t-2 border-r-2 border-b-0 pt-3 pb-[7px] bg-white rounded-t-lg"
              : ""
          }
        >
          <button className="px-5 text-lg work-sans">Read Books</button>
        </NavLink>
        <NavLink
          to="/listed/wishlist"
          className={({ isActive }) =>
            isActive
              ? "border border-l-2 border-t-2 border-r-2 border-b-0 pt-3 pb-[7px] bg-white rounded-t-lg"
              : ""
          }
        >
          <button className="px-5 text-lg work-sans">Wish List</button>
        </NavLink>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ListedBooks;
