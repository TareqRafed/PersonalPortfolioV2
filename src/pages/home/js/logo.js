import React, { useRef } from 'react';
import Lottie from 'react-lottie';
import * as animationData from '../../../animations/lottie/logo.json'


const Logo = () => {
	const lottie = useRef(null);

	const defaultOptions = {
		loop: false,
		autoplay: false,
		animationData: animationData,

	};
	return (
		 <span onMouseEnter={()=>lottie.current.play()} onMouseLeave={() => lottie.current.stop()}>
			<Lottie ref={lottie} options={defaultOptions} />
		 </span>
		
	);
}


export default Logo;