import { FiStar } from "react-icons/fi";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Book = ({ book }) => {
  const { id, image, tags, name, author, category, rating } = book;
  return (
    <NavLink to={`/details/${id}`}>
      <div className="border rounded-2xl p-6 flex flex-col justify-between">
        <div className="bg-slate-100 flex justify-center items-center rounded-2xl py-10 h-[350px]">
          <img src={image} alt="" className="w-[150px]" />
        </div>
        <div className="flex gap-6 work-sans">
          <p className="py-2 px-4 bg-[#23BE0A29] my-6 rounded-lg text-[#23BE0A]">
            {tags[0]}
          </p>
          <p className="p-2 px-4 bg-[#23BE0A29] my-6 rounded-lg text-[#23BE0A]">
            {tags[1]}
          </p>
        </div>
        <h2 className="text-left playfair text-black text-2xl font-bold pb-3">
          {name}
        </h2>
        <p className="text-left work-sans font-medium text-[#131313CC] pb-3 border-b-2 border-dashed">
          By: {author}
        </p>
        <div className="pt-5 work-sans font-medium text-[#131313CC] flex justify-between">
          <p>{category}</p>
          <p className="flex items-center gap-2">
            {rating} <FiStar />
          </p>
        </div>
      </div>
    </NavLink>
  );
};

export default Book;
Book.propTypes = {
  book: PropTypes.object,
};
