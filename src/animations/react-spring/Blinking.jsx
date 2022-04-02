import React from "react";
import PropTypes from "prop-types";
import { useSpring } from "@react-spring/core";
import { animated, config } from "react-spring";

const Blinking = ({ children }) => {
  const styles = useSpring({
    config: config.molasses,
    loop: { reverse: true },
    to: { opacity: 1 },

    from: { opacity: 0.2 },
  });

  return <animated.div style={styles}>{children}</animated.div>;
};

Blinking.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Blinking;
