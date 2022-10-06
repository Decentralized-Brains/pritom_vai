import { AiOutlineArrowRight } from "react-icons/ai";

const ChainCard = ({ data }) => {
  const { description, url, thumbnail, title } = data;
  return (
    <div className="max-w-[400px] min-h-[380px] shadow-xl my-10 border border-sky-600 shadow-sky-600/30 mx-3 bg-[#191525] p-4 rounded-xl">
      <video
        className="w-full rounded-lg"
        src={thumbnail}
        autoPlay
        loop
        muted
      />

      <h3 className="mt-2 text-white text-2xl">{title}</h3>
      <p className="text-gray-300">{description}</p>
      <a href={url} target="_blank">
        <button className="mt-2 mx-auto">
          Live Preview <AiOutlineArrowRight />
        </button>
      </a>
    </div>
  );
};

export default ChainCard;
