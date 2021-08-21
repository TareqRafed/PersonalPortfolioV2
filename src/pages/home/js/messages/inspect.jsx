import React from "react";
import { Link } from "react-router-dom";
import BlinkingAnimation from "../../../../animations/react-spring/blinking";
import Tooltip from "../../../../components/tooltip/js/tooltip";
import Style from "../../style/message.modules.scss";


// TODO: Change hard coded text
const Inspect = () => (
  <>
    Hey Stranger,
    <br />
    a Software Engineer here,
    <br />
    I use the latest technologies in the industry to build wonderful experiences
    for my clients.
    <br />
    take a look at my <Tooltip tip="Lorem Ipsum">projects</Tooltip>, if
    interested in working together; shoot me an e-mail or fill the{" "}
    <Tooltip tip="Lorem Ipsum">contact</Tooltip> form.
    <br />
    Peace,
    <br />
    Tariq
    <br />
    <div className={Style.nextButton}>
      <BlinkingAnimation>
        <Link to="/menu">Next</Link>
      </BlinkingAnimation>
    </div>
  </>
);

export default Inspect;
