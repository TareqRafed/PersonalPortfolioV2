import React, { useState, useEffect } from 'react';
import Style from '../style/tooltip.module.scss';
import PropTypes from 'prop-types';



// The parent element must be either a fullscreen absolute, or any other position 
const Tooltip = ({children, tip}) => {
	const [ShowTip, setShowTip] = useState(false);
	const [MousePos, setMousePos] = useState({"x":0, "y":0})
	useEffect(() => {
		if(!ShowTip) return

		console.log("render")
		const handleMovment = (e) =>{
			setMousePos({"x":e.screenX, "y":e.screenY})
		}
		window.addEventListener("mousemove", handleMovment)

		return () => {
			window.removeEventListener("mousemove", handleMovment);
		}
	}, [ShowTip])
	return(
		<span style={{cursor:"pointer"}} onMouseEnter={()=> setShowTip(true)} onMouseLeave={()=>setShowTip(false)}>
			{ShowTip && <span id="tooltip" style={{left:MousePos.x, top:MousePos.y, transform:"translate(-100%,-400%)", zIndex:100}} className={Style.box}>{tip}</span>}
			{children}
		</span>
	);
}

Tooltip.protoTypes = {
	tip: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired
}


export default Tooltip;