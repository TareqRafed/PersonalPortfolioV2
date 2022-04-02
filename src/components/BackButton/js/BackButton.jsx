import React from "react";
import PropTypes from "prop-types";
import { useLocation, useHistory } from "react-router-dom";
import Style from "../style/back.modules.scss";

/*
	button to get to the previous page, shows up only if you were not on the homepage
	position is configured in the app.js styling file 
*/

const BackButton = ({ className }) => {
  const History = useHistory();
  const location = useLocation();
  return (
    location.pathname !== "/" && (
      <div
        className={`${Style.back} ${className}`}
        onClick={() => History.goBack()}
      >
        {" "}
        Back
      </div>
    )
  );
};

BackButton.propTypes = {
  className: PropTypes.string.isRequired,
};

export default BackButton;
