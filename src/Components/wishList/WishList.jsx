import { getData } from "../../utilities/localStorage";
import BookListCard from "../bookListCard/BookListCard";

const WishList = () => {
  const wishlist = getData("wishlist");
  return (
    <div>
      {wishlist.map((book) => (
        <BookListCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default WishList;
