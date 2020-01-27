import React from "react";
import { useSpring, animated } from "react-spring";
import "./App.css";
import String from "./components/string";
import Interpolate from "./components/Interpolate";
import ParallaxTest from "./components/Parallax";

const App = () => {
  return (
    <div className="App">
      <String />
      <Interpolate />
      <ParallaxTest />
    </div>
  );
};

export default App;
