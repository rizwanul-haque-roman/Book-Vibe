import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li className="text-black text-lg">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "btn btn-outline text-[#23BE0A] lg:hover:bg-[#23BE0A] lg:hover:border-[#23BE0A] text-lg"
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="text-black text-lg">
        <NavLink
          to="/listed"
          className={({ isActive }) =>
            isActive
              ? "btn btn-outline text-[#23BE0A] lg:hover:bg-[#23BE0A] lg:hover:border-[#23BE0A] text-lg"
              : ""
          }
        >
          Listed Books
        </NavLink>
      </li>
      <li className="text-black text-lg">
        <NavLink
          to="/pages-to-read"
          className={({ isActive }) =>
            isActive
              ? "btn btn-outline text-[#23BE0A] lg:hover:bg-[#23BE0A] lg:hover:border-[#23BE0A] text-lg"
              : ""
          }
        >
          Pages to Read
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="container mx-auto work-sans my-6">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className=" text-3xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-8 items-center">
            {links}
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <a className="btn bg-[#23BE0A] text-white text-lg">Sign in</a>
          <a className="btn bg-[#59C6D2] text-white text-lg">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
