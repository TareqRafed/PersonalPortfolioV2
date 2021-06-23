import React from 'react';

import Style from '../style/appbar.module.scss';

const AppBar = () => {
	return(
		<div className={Style.appBar} id="AppBar">
			<div className={Style.keys}>
				10x <span>keys</span>
			</div>
		</div>
	);
}


export default AppBar;