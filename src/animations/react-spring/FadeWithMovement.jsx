import React from "react";
import PropTypes from "prop-types";
import { useSpring } from "@react-spring/core";
import { animated, config } from "react-spring";

const FadeWithMovement = ({
  children,
  fromX = "0%",
  toX = "0%",
  fromY = "0%",
  toY = "0%",
}) => {
  const styles = useSpring({
    config: config.molasses,
    to: {
      opacity: 1,
      transform: `translate(${toX},${toY})`,
    },

    from: {
      opacity: 0.2,
      transform: `translate(${fromX},${fromY})`,
    },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

export default FadeWithMovement;

FadeWithMovement.propTypes = {
  children: PropTypes.element.isRequired,
  fromX: PropTypes.string.isRequired,
  toX: PropTypes.string.isRequired,
  fromY: PropTypes.string.isRequired,
  toY: PropTypes.string.isRequired,
};
