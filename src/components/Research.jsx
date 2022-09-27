import ReserchCard from "./ReserchCard";

const Research = () => {
  return (
    <div className="container px-6 mb-10 mt-20" id="research">
      <h2 className="title">Research Paper</h2>
      <div className="mt-10">
        <ReserchCard />
        <ReserchCard />
        <ReserchCard />
      </div>
    </div>
  );
};

export default Research;
