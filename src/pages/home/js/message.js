import React from 'react';

import Style from '../style/message.modules.scss';


const Message = ({ setShow }) => {
	return (
		<div onClick={()=> setShow(false)} className={Style.messageContainer}>
			<div className={Style.message}>
				Hey Stranger,<br />
				a Software Engineer here,<br />
				I use the latest technologies in the industry to build wonderful experiences for my clients.<br />
				take a look at my projects, if interested in working together; shoot me an e-mail or fill the contact form.<br />
				Peace,<br />
				Tariq<br />
			</div>
		</div>
	);
}

export default Message;