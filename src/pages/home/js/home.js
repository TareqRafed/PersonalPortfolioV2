import React, { useState, useContext } from 'react';

// Logo 
import Logo from "./logo"

// Style
import Style from '../style/home.modules.scss';

// react-spring Animations
import BlinkingAnimation from '../../../animations/react-spring/blinking';

//Background animation
import Background from './bg';

// Componenets
import Message from './message';
import Portal from './portal';

// CTX provider
import { KeysCtx } from '../../../App';

const Home = () => {

	const [ShowMessage, setShowMessage] = useState(false);
	const [showTutorial, setshowTutorial] = useState(false);

	const { Keys } = useContext(KeysCtx);

	const setPopUps = (val) => {
		setShowMessage(val)
		setshowTutorial(val)
	}

	return (
		<div className={`${Style.Container} page`}>
			<Background>
				<div className={Style.logoContainer}><Logo /></div>
			</Background>
			<div className={Style.menu}>
				<BlinkingAnimation>
					<div className={`${Style.textCenter} ${Style.inspect}`}>
						<span onClick={()=> setShowMessage(true)} className={Style.clickable}>Inspect</span>
					</div>
				</BlinkingAnimation>
				<div className={`${Style.textCenter} ${Style.Portal}`}><Portal isLocked={Keys < 2} /></div>
			</div>
			<div onClick={()=>setshowTutorial(true)} className={Style.tutorial}>Tutorial</div>
			{(ShowMessage || showTutorial) && <Message tutorial={showTutorial} setShow={setPopUps} />}
		</div>

);
}


export default Home;