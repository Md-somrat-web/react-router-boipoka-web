import React, { Suspense, useEffect, useState } from "react";
import { data } from "react-router";
import Book from "../Book/Book";

const Books = ({ data }) => {
  const [allBooks, setAllBooks] = useState([]);

  // useEffect(() => {
  //   fetch("BookData.json")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setAllBooks(data);
  //     });
  // });

  // const BookPromised = fetch("./BookData.json").then((res) => res.json());

  return (
    <div>
      <h2 className="text-2xl text-center mt-8 mb-8 p-6">boooooooks</h2>
      <Suspense fallback={<span>Loddding...</span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7  ">
          {data.map((singelBook) => (
            <Book key={singelBook.bookId} singelBook={singelBook}></Book>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Books;
