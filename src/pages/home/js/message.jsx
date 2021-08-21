import React from 'react';
import PropTypes from 'prop-types';
import Style from '../style/message.modules.scss';
import Tutorial from './messages/tutorial';
import Inspect from './messages/inspect';

const Message = ({ tutorial, setShow }) => (
		<div onClick={()=> setShow(false)} className={Style.messageContainer}>
			<div onClick={e => e.stopPropagation()} className={Style.message}>
				<div onClick={()=> setShow(false)} className={Style.exit}>
					x
				</div>
				{tutorial ? <Tutorial /> : <Inspect />}
			</div>	
		</div>
	)

Message.propTypes = {
	tutorial: PropTypes.bool.isRequired,
	setShow: PropTypes.func.isRequired,
}

export default Message;