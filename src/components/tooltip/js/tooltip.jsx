import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import Style from "../style/tooltip.module.scss";

const Tooltip = ({ children, tip, xOffset = -100 }) => {
  const [ShowTip, setShowTip] = useState(false);
  const [MousePos, setMousePos] = useState({ x: 0, y: 0 });
  useEffect(() => {
    if (!ShowTip) return {};
    const handleMovement = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMovement);

    return () => {
      window.removeEventListener("mousemove", handleMovement);
    };
  }, [ShowTip]);
  return (
    <span
      style={{ cursor: "pointer" }}
      onMouseEnter={() => setShowTip(true)}
      onMouseLeave={() => setShowTip(false)}
    >
      {ShowTip &&
        createPortal(
          <span
            id="tooltip"
            style={{
              left: MousePos.x,
              top: MousePos.y,
              transform: `translate(${xOffset}%,-100%)`,
              zIndex: 100,
            }}
            className={Style.box}
          >
            {tip}
          </span>,
          document.getElementById("root")
        )}
      {children}
    </span>
  );
};

Tooltip.propTypes = {
  tip: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  xOffset: PropTypes.number.isRequired,
};

export default Tooltip;
