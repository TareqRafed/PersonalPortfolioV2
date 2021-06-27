import React from 'react';

// Logo 
import Logo from "./logo"

// Style
import Style from '../style/home.modules.scss';

// react-spring Animations
import BlinkingAnimation from '../../../animations/react-spring/blinking';


const Home = () => {

	return (
		<div className={Style.Container}>
			<div className={Style.logoContainer}><Logo /></div>
			<BlinkingAnimation>
				<div className={`${Style.textCenter} ${Style.inspect}`}>
					<span className={Style.clickable}>Inspect</span>
				</div>
			</BlinkingAnimation>
			<div className={Style.textCenter}>Teleporter</div>
			<div className={Style.tutorial}>Tutorial</div>
		</div>
	);
}


export default Home;