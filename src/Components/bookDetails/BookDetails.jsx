import { useParams } from "react-router-dom";
import { useLoaderData } from "react-router-dom";
import { checkExist, setData, setWishlist } from "../../utilities/localStorage";
import { toast } from "react-toastify";

const BookDetails = () => {
  const books = useLoaderData();
  const { id } = useParams();
  console.log(id);
  const item = books.filter((item) => item.id == id);
  const book = item[0];
  console.log(book);
  const handleRead = () => {
    // setData(book, "wishlist");
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
    <div className="grid lg:grid-cols-2 container mx-auto w-11/12 lg:w-full gap-12 space-y-6 my-10">
      <div className="flex justify-center items-center bg-[#F1F5F9] rounded-2xl">
        <img src={image} alt="" className="w-1/2 lg:w-auto py-16 lg:py-0" />
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
          <p className="py-2 px-4 bg-[#23BE0A0D] rounded-lg text-[#23BE0A]">
            #{tags[0]}
          </p>
          <p className="p-2 px-4 bg-[#23BE0A0D] rounded-lg text-[#23BE0A]">
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
  );
};

export default BookDetails;
