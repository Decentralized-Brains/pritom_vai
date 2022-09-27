import React from "react";
import BlockchainProject from "../components/BlockchainProject";
import Datascienceprojects from "../components/Datascienceprojects";
import Education from "../components/Education";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Research from "../components/Research";
import Skills from "../components/Skills";

const Home = () => {
  return (
    <div>
      <Hero />
      <Education />
      <Skills />
      <BlockchainProject />
      <Datascienceprojects />
      <Research />
      <Footer />
    </div>
  );
};

export default Home;
