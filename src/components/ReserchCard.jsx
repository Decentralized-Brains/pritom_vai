import React from "react";

const ReserchCard = ({ data }) => {
  const { id, title, desc, date, url } = data;
  return (
    <div className="text-white border border-gray-400/50 p-4 rounded-xl relative flex flex-col md:flex-row justify-between items-center gap-4 mb-10 hover:border-sky-500 duration-200">
      <div>
        <p className="absolute -top-4 bg-[#04012c] px-5 border border-sky-500 rounded-lg py-1">
          Paper-0{id}
        </p>
        <p className="pt-4">{date}</p>
        <h4>{title}</h4>
        <p>{desc}</p>
      </div>
      <div>
        <a
          className="bg-sky-700 flex min-w-[140px] py-2 px-4 rounded-lg font-semibold hover:bg-sky-800 duration-200"
          href={url}
          target="blank"
        >
          View Publication
        </a>
      </div>
    </div>
  );
};

export default ReserchCard;
