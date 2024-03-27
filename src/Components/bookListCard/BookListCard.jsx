import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { BookContext } from "../../utilities/context";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { HiOutlineUsers } from "react-icons/hi2";
import { HiOutlineDocumentChartBar } from "react-icons/hi2";

const BookListCard = ({ book }) => {
  const { setBook } = useContext(BookContext);
  const {
    image,
    name,
    author,
    category,
    tags,
    pages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div className="grid grid-cols-4 gap-6 items-center border rounded-xl p-6 my-6">
      <div className="col-span-1 flex justify-center items-center bg-[#1313130C] rounded-2xl h-full">
        <img src={image} alt="" className="w-[120px]" />
      </div>
      <div className="col-span-3">
        <h2 className="playfair text-black text-2xl font-bold pb-3">{name}</h2>
        <p className="work-sans font-medium text-[#131313CC]">By: {author}</p>
        <div className="flex gap-3 work-sans items-center my-4">
          <p className="font-bold">Tags</p>
          <p className="py-2 px-4 bg-[#23BE0A0D] rounded-3xl text-[#23BE0A]">
            #{tags[0]}
          </p>
          <p className="p-2 px-4 bg-[#23BE0A0D] rounded-3xl text-[#23BE0A]">
            #{tags[1]}
          </p>
          <p className="work-sans text-[#131313CC] flex gap-2 items-center">
            <IoCalendarNumberOutline /> Year of publishing: {yearOfPublishing}
          </p>
        </div>
        <div className="flex gap-6 work-sans text-[#13131399]">
          <p className="flex gap-2 items-center">
            <HiOutlineUsers /> Publisher: {publisher}
          </p>
          <p className="flex gap-2 items-center">
            <HiOutlineDocumentChartBar /> Pages {pages}
          </p>
        </div>
        <hr className="border-b-1 my-4" />
        <div className="flex gap-3 my-6">
          <p className="py-2 px-4 bg-[#328EFF26] rounded-3xl text-[#328EFF]">
            Category: {category}
          </p>
          <p className="py-2 px-4 bg-[#FFAC3326] rounded-3xl text-[#FFAC33]">
            Rating: {rating}
          </p>
          <NavLink to={"/details"}>
            <button
              onClick={() => setBook(book)}
              className="py-2 px-4 bg-[#23BE0A] rounded-3xl text-white"
            >
              View Details
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default BookListCard;

BookListCard.propTypes = {
  book: PropTypes.object,
};
