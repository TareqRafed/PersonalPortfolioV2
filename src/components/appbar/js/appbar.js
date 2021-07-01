import React from 'react';
import Style from '../style/appbar.module.scss';
import PropTypes from 'prop-types';
import Tooltip from '../../tooltip/js/tooltip';

// Svg
import Key from '../../../assets/images/key.svg';

const AppBar = ({keys}) => {
	return(
		<div className={Style.appBar} id="AppBar">
			<Tooltip tip={"Collect keys to unlock the Portal!"}>
				<div className={Style.keysContainer}>
					<span>{keys}x<Key className={Style.keyImage} /></span>
				</div>
			</Tooltip>
		</div>
	);
}

AppBar.propTypes = {
	keys: PropTypes.number.isRequired
}

export default AppBar;