import React from "react";
import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singelBook = data.find((book) => book.bookId === bookId);

  const {
    bookName,
    image,
    author,
    review,
    tags,
    totalPages,

    publisher,

    yearOfPublishing,
    rating,
  } = singelBook;
  return (
    <div className=" mx-auto flex items-center gap-12 justify-between mt-10">
      <div className="shadow p-18 ">
        <img className="w-7xl " src={image} alt="" />
      </div>
      <div>
        <h1 className="text-4xl font-bold">{bookName}</h1>
        <p className="font-semibold text-2xl mt-3">by :{author}</p>
        <p className="mt-3 text-[#131313] leading-8">
          <span className="font-bold">Reviwe : </span>
          {review}
        </p>
        <div className="flex gap-10 mt-4 ">
          <h5 className="font-bold">Tags</h5>{" "}
          {tags.map((tag) => (
            <button className="btn text-[#23BE0A]">{tag}</button>
          ))}
        </div>
        <div className="border-b"></div>
        <div className="space-y-5 mt-5 ">
          <p className="flex gap-9">
            Number Of Page : <div className="font-bold">{totalPages}</div>
          </p>
          <p className="flex gap-24">
            Publisher: <div className="font-bold">{publisher}</div>
          </p>
          <p className="flex gap-9">
            Year of Publishing:{" "}
            <div className="font-bold">{yearOfPublishing}</div>
          </p>
          <p className="flex gap-28">
            Rating : <div className="font-bold">{rating}</div>
          </p>
        </div>
        <button className="btn btn-accent m-2"> mark as Read</button>
        <button className="btn btn-info  m-2"> add to WishList</button>
      </div>
    </div>
  );
};

export default BookDetails;
