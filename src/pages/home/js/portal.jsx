import React from "react";
import PropTypes from "prop-types";
import Lock from "../../../assets/images/lock.svg";
import Tooltip from "../../../components/tooltip/js/tooltip";
import Key from "../../../assets/images/key.svg";

const Portal = ({ isLocked }) => (
  <>
    {isLocked ? (
      <Tooltip
        tip={
          <span>
            2x <Key width="15px" />
          </span>
        }
      >
        {" "}
        <Lock />{" "}
      </Tooltip>
    ) : (
      "Teleportar"
    )}
  </>
);

Portal.propTypes = {
  isLocked: PropTypes.bool.isRequired,
};

export default Portal;
