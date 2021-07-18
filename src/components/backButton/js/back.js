import React from 'react';
import { useHistory } from 'react-router';
import Style from '../style/back.modules.scss';
import { useLocation } from 'react-router-dom';

/*
	button to get to the previous page, shows up only if you were not on the homepage
	position is configured in the app.js styling file 
*/

const BackButton = ({ className }) => {
	const History = useHistory();
	const location = useLocation();
	return (location.pathname != "/" && <div className={`${Style.back} ${className}`} onClick={() => History.goBack()}> Back</div>);
}

export default BackButton;