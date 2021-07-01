import React, { useState, useEffect } from 'react';
import Style from '../style/tooltip.module.scss';
import PropTypes from 'prop-types';


const Tooltip = ({children, tip}) => {
	const [ShowTip, setShowTip] = useState(false);
	const [MousePos, setMousePos] = useState({"x":0, "y":0})
	useEffect(() => {
		if(!ShowTip) return

		console.log("render")
		const handleMovment = (e) =>{
			setMousePos({"x":e.clientX, "y":e.clientY})
		}

		let app = document.getElementById("root");
		app.addEventListener("mousemove", handleMovment)



		return () => {
			app.removeEventListener("mousemove", handleMovment);
		}
	}, [ShowTip])
	return(
		<div style={{cursor:"pointer"}} onMouseEnter={()=> setShowTip(true)} onMouseLeave={()=>setShowTip(false)}>
			{ShowTip && <span id="tooltip" style={{left:MousePos.x, top:MousePos.y, transform:"translate(-100%,-100%)", zIndex:100}} className={Style.box}>{tip}</span>}
			{children}
		</div>
	);
}

Tooltip.protoTypes = {
	tip: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired
}


export default Tooltip;