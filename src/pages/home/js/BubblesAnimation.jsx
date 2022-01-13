import React from "react";
import PropTypes from "prop-types";
import { Lottie } from "@crello/react-lottie";
import { useSpring } from "@react-spring/core";
import { animated } from "@react-spring/web";
import animationData from "@animations/lottie/bg.json";
import Style from "../style/bubblesAnimation.module.scss";

const BubblesAnimation = ({ children, height }) => {
  const props = useSpring({
    from: {
      transform: "scale(0)",
    },
    to: {
      transform: "scale(1)",
    },
  });

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData,
  };
  return (
    <animated.div style={{ ...props, height }} className={Style.wrapper}>
      <Lottie config={defaultOptions} className={Style.background} />
      <div className={Style.content}>{children}</div>
    </animated.div>
  );
};

BubblesAnimation.propTypes = {
  children: PropTypes.element.isRequired,
  height: PropTypes.string.isRequired,
};

export default BubblesAnimation;
