import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { checkExist, setData, setWishlist } from "../../utilities/localStorage";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";

const BookDetails = () => {
  const [book, setBook] = useState({});
  const [tag1, setTag1] = useState("");
  const [tag2, setTag2] = useState("");

  const { id } = useParams();
  const books = useLoaderData();

  useEffect(() => {
    const book = books.find((item) => item.id == id);
    setBook(book);

    const tags = book.tags;
    setTag1(tags[0]);
    setTag2(tags[1]);
  }, [books, id]);

  // console.log("id:", id, "Books:", books);
  // console.log(book);
  // console.log("id:", id, "single book:", book);
  // console.log(tag1, tag2);

  const handleRead = () => {
    const exist = checkExist(book, "read");
    if (!exist) {
      setData(book, "read");
      setWishlist(book);
    }
    exist === false
      ? toast.success("Book added to Read successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      : toast.error("Book already Read", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  };
  const handleWishlist = () => {
    const exist = checkExist(book, "read");
    if (!exist) {
      setData(book, "wishlist");
    }
    exist === false
      ? toast.success("Book added to wishlist successfully", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        })
      : toast.error("Book already Read", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
  };

  return (
    <div className="grid lg:grid-cols-2 container mx-auto w-11/12 lg:w-full gap-12 space-y-6 my-10">
      <div className="flex justify-center items-center bg-[#F1F5F9] rounded-2xl">
        <img
          src={book.image}
          alt=""
          className="w-1/2 lg:w-auto py-16 lg:py-0"
        />
      </div>
      <div>
        <h2 className="playfair text-black text-4xl font-bold pb-3">
          {book.name}
        </h2>
        <p className="work-sans font-medium text-[#131313CC] pb-6 text-xl">
          By: {book.author}
        </p>
        <p className="py-4 border-t-2 border-b-2 work-sans font-medium text-[#131313CC] text-xl">
          {book.category}
        </p>
        <p className="py-6 leading-[26px]">
          <span className="font-bold">Review :</span>
          {book.review}
        </p>
        <div className="flex gap-6 work-sans items-center">
          <p className="font-bold">Tags</p>
          <p className="py-2 px-4 bg-[#23BE0A0D] rounded-lg text-[#23BE0A]">
            #{tag1}
          </p>
          <p className="p-2 px-4 bg-[#23BE0A0D] rounded-lg text-[#23BE0A]">
            #{tag2}
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
            <p>{book.pages}</p>
            <p>{book.publisher}</p>
            <p>{book.yearOfPublishing}</p>
            <p>{book.rating}</p>
          </div>
        </div>
        <div className="work-sans flex gap-4 mt-8">
          <button onClick={handleRead} className="btn btn-outline px-7 text-lg">
            Read
          </button>
          <button
            onClick={handleWishlist}
            className="btn px-7 bg-[#50B1C9] hover:bg-[#337181] text-white text-lg"
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
    // <div>details</div>
  );
};

export default BookDetails;
