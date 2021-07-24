import React, { createContext, useState } from 'react';
import { Route } from "react-router-dom";
import FadeInOutTrans from './animations/react-spring/fadeInOutTrans';

//Componenets
import AppBar from './components/appbar/js/appbar';
import BackButton from './components/backButton/js/back';

// Pages
import Home from './pages/home/js/home';
import Menu from './pages/menu/js/menu';
import Projects from './pages/projects/js/projects';
import ProjectDetails from './pages/projectDetails/js/projectDetails';

// css
import './app.scss'
import Style from './app.module.scss'
import About from './pages/about/js/about';



export const KeysCtx = createContext(0);


const App = () => {
  const [Keys, setKeys] = useState(0);
  return (
    <KeysCtx.Provider value={{ Keys, setKeys }}>
      <div id="App">
        <AppBar keys={Keys} />
            <FadeInOutTrans>
              <Route component={Home} exact path="/" />
              <Route component={Menu} path="/menu" />
              <Route component={Projects} path="/projects" />
              <Route render={(props) => (<ProjectDetails {...props} /> )} path="/project/:id" />
              <Route component={About} path="/about" />
            </FadeInOutTrans>
        <BackButton className={Style.backPos} />
      </div>
    </KeysCtx.Provider>
  );
};





export default App;