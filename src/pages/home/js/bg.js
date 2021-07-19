import React from 'react';
import { Lottie } from '@crello/react-lottie'
import animationData from '../../../animations/lottie/bg.json';
import { useSpring } from '@react-spring/core';
import { animated } from '@react-spring/web';


const Background = ({ children }) => {

	const props = useSpring({
		from: {
			transform:'scale(0)'
		},
		to: {
			transform:'scale(1)',
		},

	});


	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,

	};
	return (
		<animated.div style={props}>

		<Lottie style={{position:"absolute", top:0, maxHeight: "-webkit-fill-available", zIndex:-100}} height={"95vh"} config={defaultOptions} />
		
			{children}
		</animated.div>
	);
}


export default Background;