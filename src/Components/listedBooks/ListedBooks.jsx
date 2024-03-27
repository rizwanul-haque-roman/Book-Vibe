import ReadBooks from "../readBooks/ReadBooks";
import WishList from "../wishList/WishList";

const ListedBooks = () => {
  return (
    <div className="container mx-auto">
      <h1 className="work-sans text-black text-5xl font-bold text-center py-10 bg-base-200 rounded-2xl">
        Explored Books
      </h1>
      <div className="text-center my-11">
        <select
          name=""
          id=""
          defaultChecked="sort"
          className="p-4 border rounded-lg bg-[#23BE0A] text-white text-lg font-medium work-sans"
        >
          <option value="sort">Sort By</option>
          <option value="rating">Rating</option>
          <option value="pages">Number of pages</option>
          <option value="year">Published Year</option>
        </select>
      </div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab text-lg work-sans"
          aria-label="Read Books"
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
          aria-label="Wishlisted Books"
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
