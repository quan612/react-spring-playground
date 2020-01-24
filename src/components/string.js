import React from "react";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

const String = () => {
  const Background = styled.div`
    height: 50%;
    background: green;
  `;

  const animation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: { duration: 1000 }
  });

  const colorAnimation = useSpring({
    from: { color: "blue" },
    to: { color: `rgb(255,0,0)` },
    config: { duration: 1000 }
  });

  const multiAnimation = useSpring({
    from: { opacity: 0, color: "red" },
    to: [
      { opacity: 1, color: "#ffaaee" },
      { opacity: 0 },
      { opacity: 1, color: "red" },
      { opacity: 0 },
      { opacity: 0.5, color: "#008000" },
      { opacity: 0.8, color: "black" }
    ],
    delay: 1000,
    config: { duration: 1000 }
  });

  return (
    <Background>
      <animated.h1 style={animation}>Hi Quan</animated.h1>
      <animated.h1 style={colorAnimation}>Hi Bon Bon</animated.h1>
      <animated.h1 style={multiAnimation}>Hi Ngoc</animated.h1>
    </Background>
  );
};

export default String;
