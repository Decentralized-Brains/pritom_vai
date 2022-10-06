import { ProjectData } from "./Data";
import "../App.css";

import Slider from "react-slick";
import ChainCard from "./ChainCard";

import { Settings } from "./Settings";

const BlockchainProject = () => {
  return (
    <div className="container px-6" id="projects">
      <h2 className="title">Blockchain Projects</h2>
      <div className="w-full py-10">
        <Slider {...Settings}>
          {ProjectData.map((data) => (
            <ChainCard key={data.id} data={data} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlockchainProject;
