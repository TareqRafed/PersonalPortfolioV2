import React, { useContext } from "react";

// App config
import AppConfig from '../../../app.config';

// Logo
import Logo from "./logo";

// Style
import Style from "../style/home.modules.scss";

// Background animation
import BubblesAnimation from "./BubblesAnimation";

// CTX provider
import KeysCtx from "../../../context/keys";
import Inspect from "./homeMessage";

// Icons
import KeyIcon from '../../../assets/images/key.svg';
import Tooltip from "../../../components/tooltip/js/tooltip";
import LockIcon from '../../../assets/images/lock.svg';

const Home = () => {

  const { Keys } = useContext(KeysCtx);


  return (
    <div className={`${Style.Container} page`}>
      <div className={Style.appBar}>
        <div className={Style.headerText}>
          <div>
            <div className={Style.headerMain}>Tariq Rafid</div>
            <div className={Style.headerSecondary}>
              Software Engineer Based in Amman
            </div>
          </div>
        </div>
        <div className={Style.logoContainer}>
          <BubblesAnimation height="100%">
            <Logo />
          </BubblesAnimation>
        </div>
      </div>
      <div className={Style.main}>
        <div className={Style.leftColumn}>
          <Inspect />
        </div>
        <div className={Style.rightColumn}>
          <ul>
            <li>
              <Tooltip tip={`You have ${Keys} Keys`}>
                <KeyIcon />
              </Tooltip>
              </li>
            <li>
              <Tooltip tip={`You need at least ${AppConfig.KEYS_TO_UNLOCK_MAIN_LOCK} Key(s) to unlock this!`}>
                <LockIcon />
              </Tooltip>
            </li>
            <li>
              WTF!?
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
