import ReadBooks from "../readBooks/ReadBooks";
import WishList from "../wishList/WishList";
import {
  sortByRating,
  sortByPages,
  sortByYear,
} from "../../utilities/localStorage";
import { useEffect, useState } from "react";

const ListedBooks = () => {
  const [value, setValue] = useState();

  const options = [
    { label: "Rating", value: "rating" },
    { label: "Number of pages", value: "pages" },
    { label: "Published year", value: "year" },
  ];

  const handleSelect = (event) => {
    setValue(event.target.value);
    console.log("working");
  };
  console.log(value);

  useEffect(() => {
    if (value === "rating") {
      sortByRating();
    }
    if (value === "pages") {
      sortByPages();
    }
    if (value === "year") {
      sortByYear();
    }
  }, [value]);

  return (
    <div className="container mx-auto w-11/12 lg:w-auto">
      <h1 className="work-sans text-black text-4xl lg:text-5xl font-bold text-center py-10 bg-[#F1F5F9] rounded-2xl">
        Explored Books
      </h1>
      <div className="flex justify-center items-center my-8 work-sans">
        <div className="border py-3 px-4 rounded-xl bg-[#50BE08] text-white">
          <select
            name=""
            id=""
            className="bg-[#50BE08]"
            onChange={handleSelect}
          >
            <option>Sort By</option>
            {options.map((option, idx) => (
              <option key={idx} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      {/* <button onClick={sortByRating}>Rating</button> */}
      <div role="tablist" className="tabs tabs-lifted my-10">
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
