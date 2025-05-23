import React, { use } from "react";
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from "react-router";

const Book = ({ singelBook }) => {
  //   const data = use(BookPromised);
  const {
    bookName,
    author,
    bookId,
    image,
    rating,
    category,
    tags,
    yearOfPublishing,
    publisher,
  } = singelBook;

  return (
    <Link to={`/BookDetails/${bookId}`}>
      <div className="card bg-base-100 w-96 shadow-sm border p-6">
        <figure className="bg-gray-100 w-2/3 mx-auto p-4">
          <img className="h-[166px]" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex gap-10 justify-center">
            {tags.map((tag) => (
              <button>{tag}</button>
            ))}
          </div>
          <h2 className="card-title">
            {bookName}
            <div className="badge badge-secondary">{yearOfPublishing}</div>
          </h2>
          <p> Book Publisher :{publisher}</p>
          <div className="border-t-1 border-dashed"></div>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{category}</div>
            <div className="badge badge-outline">
              {rating}
              <FaRegStarHalfStroke />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
