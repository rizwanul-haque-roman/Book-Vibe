import ReadBooks from "../readBooks/ReadBooks";
import WishList from "../wishList/WishList";
import { sortByRating } from "../../utilities/localStorage";

const ListedBooks = () => {
  return (
    <div className="container mx-auto w-11/12 lg:w-auto">
      <h1 className="work-sans text-black text-4xl lg:text-5xl font-bold text-center py-10 bg-[#F1F5F9] rounded-2xl">
        Explored Books
      </h1>
      <div className="text-center my-11">
        {/* <select
          name=""
          id=""
          defaultChecked="sort"
          className="p-4 border rounded-lg bg-[#23BE0A] text-white text-lg font-medium work-sans"
        >
          <option value="sort" className="disabled" selected>
            Sort By
          </option>
          <option value="rating">rating</option>
          <option value="pages">Number of pages</option>
          <option value="year">Published Year</option>
        </select> */}
        <details className="dropdown">
          <summary className="m-1 btn">open or close</summary>
          <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
            <li>
              <button onClick={sortByRating}>Rating</button>>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </details>
        {/* <button onClick={sortByRating}>Rating</button> */}
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-lg work-sans"
          aria-label="Read"
          defaultChecked
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 border-b-0 border-x-0"
        >
          <ReadBooks />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-lg work-sans"
          aria-label="Wishlist"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 border-b-0 border-x-0"
        >
          <WishList />
        </div>
      </div>
    </div>
  );
};

export default ListedBooks;
