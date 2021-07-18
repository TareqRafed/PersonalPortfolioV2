import React, { useContext } from 'react';
import { KeysCtx } from '../../../App';

// Style
import Style from '../style/menu.modules.scss';

//Svg
import About from '../../../assets/images/about.svg'
import Contact from '../../../assets/images/contact.svg'
import Projects from '../../../assets/images/projects.svg'
import FadeInTop from '../../../animations/react-spring/fade-in-top';
import { Link } from 'react-router-dom';


const Menu = () => {
	// TODO : lock contact page
	const { Keys } = useContext(KeysCtx);
	return (
		<div className={`${Style.Menu} page`}>
			<div className={Style.container}>
				<FadeInTop>
					<Link to="/about">
						<div className={Style.card}><About /><h2>About</h2></div>
					</Link>
				</FadeInTop>

				<FadeInTop>
					<Link to="/projects">
						<div className={Style.card}><Projects /><h2>Projects</h2></div>
					</Link>
				</FadeInTop>

				<FadeInTop>
					<div className={Style.card}><Contact /><h2>Contact</h2></div>
				</FadeInTop>
			</div>
			<h2>Choose your hero</h2>
		</div>
	);
}


export default Menu;