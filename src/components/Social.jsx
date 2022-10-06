import React from "react";
import { social } from "./Data";

const Social = () => {
  return (
    <>
      <ul className="z-[100] w-[50px] bg-sky-300/20 hover:bg-sky-300/30 duration-300 flex flex-col items-center gap-4 py-4 rounded-full">
        {social.map((val) => (
          <li key={val.id} className="">
            <a
              href={val.url}
              className="text-white text-2xl cursor-pointer hover:text-sky-400 duration-300"
              target="_blank"
            >
              {val.icon}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Social;
