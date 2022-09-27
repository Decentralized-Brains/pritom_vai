import React from "react";

const ReserchCard = () => {
  return (
    <div className="text-white border border-gray-400/50 p-4 rounded-xl relative flex justify-between items-center gap-4 mb-10 hover:border-sky-500 duration-200">
      <div>
        <p className="absolute -top-4 bg-[#04012c] px-5 border border-sky-500 rounded-lg py-1">
          Paper-01
        </p>
        <p className="pt-4">Jun 13,2020</p>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Inventore, obcaecati.
        </p>
      </div>
      <div>
        <a
          className="bg-sky-700 flex min-w-[140px] py-2 px-4 rounded-lg font-semibold hover:bg-sky-800 duration-200"
          href="#"
        >
          View Publication
        </a>
      </div>
    </div>
  );
};

export default ReserchCard;
