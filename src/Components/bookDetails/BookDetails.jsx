import { useContext } from "react";
import { BookContext } from "../../utilities/context";

const BookDetails = () => {
  const { book } = useContext(BookContext);
  const {
    image,
    name,
    author,
    category,
    review,
    tags,
    pages,
    publisher,
    yearOfPublishing,
    rating,
  } = book;

  return (
    <div className="grid grid-cols-2 container mx-auto gap-12 space-y-6">
      <div className="flex justify-center items-center bg-[#1313130C] rounded-2xl">
        <img src={image} alt="" />
      </div>
      <div>
        <h2 className="playfair text-black text-4xl font-bold pb-3">{name}</h2>
        <p className="work-sans font-medium text-[#131313CC] pb-6 text-xl">
          By: {author}
        </p>
        <p className="py-4 border-t-2 border-b-2 work-sans font-medium text-[#131313CC] text-xl">
          {category}
        </p>
        <p className="py-6 leading-[26px]">
          <span className="font-bold">Review :</span>
          {review}
        </p>
        <div className="flex gap-6 work-sans items-center">
          <p className="font-bold">Tags</p>
          <p className="py-2 px-4 bg-[#23BE0A29] rounded-lg text-[#23BE0A]">
            #{tags[0]}
          </p>
          <p className="p-2 px-4 bg-[#23BE0A29] rounded-lg text-[#23BE0A]">
            #{tags[1]}
          </p>
        </div>
        <div className="flex gap-16 my-6">
          <div className="space-y-3">
            <p>Number of Pages:</p>
            <p>Publisher:</p>
            <p>Year of publishing:</p>
            <p>Rating: </p>
          </div>
          <div className="font-bold space-y-3">
            <p>{pages}</p>
            <p>{publisher}</p>
            <p>{yearOfPublishing}</p>
            <p>{rating}</p>
          </div>
        </div>
        <div className="work-sans flex gap-4 mt-8">
          <button className="btn btn-outline px-7 text-lg">Read</button>
          <button className="btn px-7 bg-[#50B1C9] hover:bg-[#337181] text-white text-lg">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;