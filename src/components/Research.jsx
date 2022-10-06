import ReserchCard from "./ReserchCard";
import { publications } from "./Data";

const Research = () => {
  return (
    <div className="container px-6 mb-10 mt-20" id="research">
      <h2 className="title">Research Paper</h2>
      <div className="mt-10">
        {publications.map((data) => (
          <ReserchCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Research;
