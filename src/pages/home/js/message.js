import React from 'react';
import BlinkingAnimation from '../../../animations/react-spring/blinking';
import Style from '../style/message.modules.scss';
import Tooltip from '../../../components/tooltip/js/tooltip';


const Message = ({ setShow }) => {
	return (
		<div onClick={()=> setShow(false)} className={Style.messageContainer}>
			<div onClick={e => e.stopPropagation()} className={Style.message}>
				<div onClick={()=> setShow(false)} className={Style.exit}>
					x
				</div>
				Hey Stranger,<br />
				a Software Engineer here,<br />
				I use the latest technologies in the industry to build wonderful experiences for my clients.<br />
				take a look at my <Tooltip tip={"Lorem Ipsum"}>projects</Tooltip>, if interested in working together; shoot me an e-mail or fill the <Tooltip tip={"Lorem Ipsum"}>contact</Tooltip> form.<br />
				Peace,<br />
				Tariq<br />
				<div className={Style.nextButton}>
					<BlinkingAnimation>
						Next
					</BlinkingAnimation>
				</div>
			</div>
			
		</div>
	);
}

export default Message;