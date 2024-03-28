import { useEffect, useState } from "react";
import Book from "../book/Book";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("./books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  console.log(books);
  return (
    <div className="my-24">
      <h2 className=" playfair text-black text-4xl lg:text-5xl font-bold text-center my-10">
        Get Lost in a World of Books
      </h2>
      <div className="grid lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Books;
