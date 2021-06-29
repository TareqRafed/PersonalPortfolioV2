import React, { useRef } from 'react';
import { Lottie } from '@crello/react-lottie'
import animationData from '../../../animations/lottie/logo.json'


const Logo = () => {
	const lottie = useRef(null);

	const defaultOptions = {
		loop: false,
		autoplay: false,
		animationData: animationData,

	};
	return (
		 <span onMouseEnter={()=>lottie.current.play()} onMouseLeave={() => lottie.current.stop()}>
			<Lottie animationRef={lottie} config={defaultOptions} />
		 </span>
		
	);
}


export default Logo;