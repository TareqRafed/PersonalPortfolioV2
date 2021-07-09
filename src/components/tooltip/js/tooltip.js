import React, { useState, useEffect } from 'react';
import Style from '../style/tooltip.module.scss';
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";


const Tooltip = ({ children, tip, xOffset = -100 }) => {
	const [ShowTip, setShowTip] = useState(false);
	const [MousePos, setMousePos] = useState({ "x": 0, "y": 0 })
	useEffect(() => {
		if (!ShowTip) return

		console.log("render")
		const handleMovment = (e) => {
			setMousePos({ "x": e.clientX, "y": e.clientY })
		}
		window.addEventListener("mousemove", handleMovment)

		return () => {
			window.removeEventListener("mousemove", handleMovment);
		}
	}, [ShowTip])
	return (
		<span style={{ cursor: "pointer" }} onMouseEnter={() => setShowTip(true)} onMouseLeave={() => setShowTip(false)}>
			{ShowTip && createPortal(<span id="tooltip" style={{ left: MousePos.x, top: MousePos.y, transform: `translate(${xOffset}%,-100%)`, zIndex: 100 }} className={Style.box}>{tip}</span>, document.getElementById("root"))}
			{children}
		</span>
		
	);
}

Tooltip.protoTypes = {
	tip: PropTypes.string.isRequired,
	children: PropTypes.any.isRequired
}


export default Tooltip;