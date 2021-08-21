import React from "react";
import PropTypes from 'prop-types';
import { useSpring } from "@react-spring/core";
import { animated, config } from "react-spring";

const BlinkingAnimation = ({ children }) => {
  const styles = useSpring({
    config: config.molasses,
    loop: { reverse: true },
    to: { opacity: 1 },

    from: { opacity: 0.2 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

BlinkingAnimation.propTypes = {
  children: PropTypes.element.isRequired,
}

export default BlinkingAnimation;
