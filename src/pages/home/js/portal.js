import React from 'react';
import Lock from '../../../assets/images/lock.svg'
import Tooltip from '../../../components/tooltip/js/tooltip';

const Portal = ({isLocked}) => {

	return(
		<>
			{isLocked ? <Tooltip tip={"Lorem Ipsum"}> <Lock /> </Tooltip> : "Teleportar"}
		</>
	);
}



export default Portal;