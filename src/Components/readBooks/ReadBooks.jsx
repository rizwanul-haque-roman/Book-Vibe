import { getData } from "../../utilities/localStorage";
import BookListCard from "../bookListCard/BookListCard";

const ReadBooks = () => {
  const read = getData("read");
  return (
    <div>
      {read.map((book) => (
        <BookListCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default ReadBooks;
