import React, { useContext } from 'react';
import { KeysCtx } from '../../../App';

// react spring anim
import FadeWithMovement from '../../../animations/react-spring/fade-with-movement';

// Style
import Style from '../style/menu.modules.scss';

//Svg
import About from '../../../assets/images/about.svg'
import Contact from '../../../assets/images/contact.svg'
import Projects from '../../../assets/images/projects.svg'
import { Link } from 'react-router-dom';


const Menu = () => {
	// TODO : lock contact page
	const { Keys } = useContext(KeysCtx);
	return (
		<div className={`${Style.Menu} page`}>
			<div className={Style.container}>
				<FadeWithMovement fromY={"-40%"}>
					<Link to="/about">
						<div className={Style.card}><About /><h2>About</h2></div>
					</Link>
				</FadeWithMovement>

				<FadeWithMovement fromY={"-40%"}>
					<Link to="/projects">
						<div className={Style.card}><Projects /><h2>Projects</h2></div>
					</Link>
				</FadeWithMovement>

				<FadeWithMovement fromY={"-40%"}>
					<div className={Style.card}><Contact /><h2>Contact</h2></div>
				</FadeWithMovement>
			</div>
			<h2>Choose your hero</h2>
		</div>
	);
}


export default Menu;