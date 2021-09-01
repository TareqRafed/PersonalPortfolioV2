import React, { useState } from "react";
import { Route } from "react-router-dom";
import KeysCtx from './context/keys';
import FadeInOutTrans from "./animations/react-spring/fadeInOutTrans";

// Componenets
import BackButton from "./components/backButton/js/back";

// Pages
import Home from "./pages/home/js/home";
import Menu from "./pages/menu/js/menu";
import Projects from "./pages/projects/js/projects";
import ProjectDetails from "./pages/projectDetails/js/projectDetails";
import Error404 from "./pages/error404/js/error404"

// css
import "./app.scss";
import Style from "./app.module.scss";
import About from "./pages/about/js/about";


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
