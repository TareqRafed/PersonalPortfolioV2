import React from 'react';
import { Lottie } from '@crello/react-lottie'
import animationData from '../../../animations/lottie/bg.json';


const Background = ({ children }) => {


	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,

	};
	return (
		<div>

		<Lottie style={{position:"absolute", top:0}} height={"95vh"} config={defaultOptions} />
		
			{children}
		</div>
	);
}


export default Background;