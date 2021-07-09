import React from 'react';
import Lock from '../../../assets/images/lock.svg'
import Tooltip from '../../../components/tooltip/js/tooltip';
import Key from '../../../assets/images/key.svg';

const Portal = ({isLocked}) => {

	return(
		<>
			{isLocked ? <Tooltip tip={<span>2x <Key width="15px" /></span>}> <Lock /> </Tooltip> : "Teleportar"}
		</>
	);
}



export default Portal;