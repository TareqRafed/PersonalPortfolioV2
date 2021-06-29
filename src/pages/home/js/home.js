import React from 'react';

// Logo 
import Logo from "./logo"

// Style
import Style from '../style/home.modules.scss';

// react-spring Animations
import BlinkingAnimation from '../../../animations/react-spring/blinking';

//Background animation
import Background from './bg'

const Home = () => {

	return (

		<div className={Style.Container}>
			<Background>
				<div className={Style.logoContainer}><Logo /></div>
			</Background>
			<div className={Style.menu}>
				<BlinkingAnimation>
					<div className={`${Style.textCenter} ${Style.inspect}`}>
						<span className={Style.clickable}>Inspect</span>
					</div>
				</BlinkingAnimation>
				<div className={Style.textCenter}>Teleporter</div>
			</div>
			<div className={Style.tutorial}>Tutorial</div>
		</div>

	);
}


export default Home;