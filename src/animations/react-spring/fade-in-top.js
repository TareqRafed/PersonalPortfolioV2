import React from "react";
import { useSpring } from "@react-spring/core";
import { animated, config } from "react-spring";

const FadeInTop = ({ children }) => {
	const styles = useSpring({
		config: config.molasses,
		to: {
			opacity: 1,
			transform: "translate(0,0)"
		},

		from: {
			opacity: 0.2,
			transform: "translate(0,-40%)"
		},
	});

	return <animated.div style={styles}>{children}</animated.div>;
};


export default FadeInTop;