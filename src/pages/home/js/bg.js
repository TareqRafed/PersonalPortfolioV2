import React, { useRef } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../../animations/lottie/bg.json';


const Background = ({ children }) => {


	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,

	};
	return (
		<div>

		<Lottie style={{position:"absolute", top:0}} isClickToPauseDisabled options={defaultOptions} />
		
			{children}
		</div>
	);
}


export default Background;