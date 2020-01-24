import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Interpolate = () => {
  const [on, toggle] = useState(false);

  const { xy } = useSpring({
    from: { xy: [-500, -500], c: "green" },
    xy: on ? [800, 200] : [0, 0],
    c: on ? "red" : "green"
  });

  return (
    <div>
      <animated.h1
        style={{
          transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`),
          color: xy.interpolate()
        }}
      >
        {!on ? "Here" : "There"}
      </animated.h1>
      <button onClick={() => toggle(!on)}> change</button>
    </div>
  );
};

export default Interpolate;
