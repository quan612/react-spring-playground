import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const Interpolate = () => {
  const [on, toggle] = useState(false);

  const { x, c } = useSpring({
    from: { x: [0, 0], c: "green" },
    x: on ? 1 : 0,
    c: on ? 1 : 0,
    config: {
      mass: 50,
      tension: 40,
      friction: 60,
      clamp: false,
      duration: 2500
    }
  });

  return (
    <div>
      <animated.h1
        style={{
          //  transform: xy.interpolate((x, y) => `translate(${x}px, ${y}px)`),
          // color: c.interpolate(c => c)
          transform: x
            .interpolate({
              range: [0, 0.25, 0.5, 0.75, 1],
              output: [0, 500, 200, 800, 500]
            })
            .interpolate(x => `translateX(${x}px)`),
          color: c
            .interpolate({
              range: [0, 0.5, 1],
              output: ["red", "green", "blue"]
            })
            .interpolate(c => c)
        }}
      >
        {!on ? "Here" : "There"}
      </animated.h1>
      <button onClick={() => toggle(!on)}> change</button>
    </div>
  );
};

export default Interpolate;
