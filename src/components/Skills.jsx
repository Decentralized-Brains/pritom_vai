import { skillsData } from "./Data";

const Skills = () => {
  return (
    <div className="container px-6 py-20">
      <h2 className="title">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 py-12">
        {skillsData.map((data) => (
          <div className="bg-sky-600/20 rounded-xl flex flex-col items-center pt-5 pb-2 hover:scale-105 duration-300 hover:bg-sky-600/40 gap-4">
            <img src={data.img} alt="" />
            <h4 className="text-white">{data.tech}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
