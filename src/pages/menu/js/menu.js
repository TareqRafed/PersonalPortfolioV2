import React, { useContext } from 'react';
import { KeysCtx } from '../../../App';

// Style]
import Style from '../style/menu.modules.scss';

//Svg
import About from '../../../assets/images/about.svg'
import Contact from '../../../assets/images/contact.svg'
import Projects from '../../../assets/images/projects.svg'


const Menu = () => {
	const { Keys } = useContext(KeysCtx);
	return (
		<div className={Style.Menu}>
			<div className={Style.container}>
				<div className={Style.card}><About /><h2>About</h2></div>
				<div className={Style.card}><Projects /><h2>Projects</h2></div>
				<div className={Style.card}><Contact /><h2>Contact</h2></div>
			</div>
		</div>
	);
}


export default Menu;