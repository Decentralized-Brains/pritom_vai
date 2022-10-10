import React from "react";
import { dataScienceProojects } from "./Data";

const Datascienceprojects = () => {
  return (
    <div className="container px-6 py-12 mt-6">
      <h2 className="title">Data Science Projects</h2>
      <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-3 gap-6">
        {dataScienceProojects.map((data) => (
          <a
            key={data.id}
            href={data.url}
            className="border border-gray-400/50 hover:border-sky-500 duration-300 p-4 rounded-lg"
          >
            <h3 className="text-gray-100 text-xl">{data.name}</h3>
            <p className="text-gray-400 font-semibold">{data.desc}</p>
            <a
              href={data.url}
              className="text-sky-500 font-semibold hover:text-sky-400"
            >
              Learn more
            </a>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Datascienceprojects;
