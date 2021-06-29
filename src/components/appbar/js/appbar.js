import React from 'react';
import Style from '../style/appbar.module.scss';
import PropTypes from 'prop-types';

// Svg
import Key from '../../../assets/images/key.svg';

const AppBar = ({keys}) => {
	return(
		<div className={Style.appBar} id="AppBar">
			<div className={Style.keysContainer}>
				<span>{keys}x<Key className={Style.keyImage} /></span>
			</div>
		</div>
	);
}

AppBar.propTypes = {
	keys: PropTypes.number.isRequired
}

export default AppBar;