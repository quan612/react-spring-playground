import React from "react";
import { Parallax } from "react-spring/renderprops-addons.cjs";
import Hero from "./Hero";

const ParallaxTest = () => {
  return (
    <Parallax pages={2}>
      <Hero offset={0} />
    </Parallax>
  );
};

export default ParallaxTest;
