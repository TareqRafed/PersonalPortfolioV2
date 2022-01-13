import React, { useState } from "react";
import { Route } from "react-router-dom";
import {
  Home,
  Menu,
  Projects,
  ProjectDetails,
  Error404,
  About,
} from "@pages/index";
import { BackButton } from "@components/index";
import KeysCtx from "@context/keys";
import FadeInOutTrans from "../animations/react-spring/FadeInOutTrans";
import "./style/app.scss";
import Style from "./style/app.module.scss";

const App = () => {
  const [Keys, setKeys] = useState(0);
  return (
    <KeysCtx.Provider value={{ Keys, setKeys }}>
      <div id="App">
        <FadeInOutTrans>
          <Route component={Home} exact path="/" />
          <Route component={Menu} path="/menu" />
          <Route component={Projects} path="/projects" />
          <Route
            render={(props) => <ProjectDetails {...props} />}
            path="/project/:id"
          />
          <Route component={About} path="/about" />
          <Route component={Error404} path="*" />
        </FadeInOutTrans>
        <BackButton className={Style.backPos} />
      </div>
    </KeysCtx.Provider>
  );
};

export default App;
