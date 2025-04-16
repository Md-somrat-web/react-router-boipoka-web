import React from "react";

import bookimage from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex justify-between items-center p-20 gap-4 shadow     mt-8">
      <div>
        <h1 className="text-5xl font-bold space-y-1.5">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn bg-[#23BE0A] py-7 px-5 mt-7 text-white rounded-xl">
          View The List
        </button>
      </div>
      <div>
        <img className="w-/12" src={bookimage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
