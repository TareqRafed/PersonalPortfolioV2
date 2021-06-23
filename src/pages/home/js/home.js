import React from 'react';

// Logo 
import Logo from "../../../assets/images/logo.svg"

// Style
import Style from '../style/home.modules.scss';


const Home = () => {
	return(
		<div className={Style.Container}>
			<div className={Style.logoContainer}><Logo className={Style.logo} /></div>
			<div>Inspect</div>
			<div>Teleporter</div>
		</div>
	);
}


export default Home;