import React from "react";
import BlockchainProject from "../components/BlockchainProject";
import Education from "../components/Education";
import Hero from "../components/Hero";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Education />
      <Skills />
      <BlockchainProject />
    </div>
  );
};

export default Home;
