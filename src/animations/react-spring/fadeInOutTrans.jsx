import React from "react";
import { Switch, useLocation } from "react-router-dom";
import { useTransition } from "@react-spring/core";
import { animated } from "@react-spring/web";

const FadeInOutTrans = ({ children }) => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });

  return transitions(
    (styles, item) =>
      item && (
        <animated.div style={styles}>
          <Switch location={item}> {children} </Switch>{" "}
        </animated.div>
      )
  );
};

export default FadeInOutTrans;
