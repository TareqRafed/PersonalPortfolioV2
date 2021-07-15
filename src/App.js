import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componenets
import AppBar from './components/appbar/js/appbar';
import BackButton from './components/backButton/js/back';

// Pages
import Home from './pages/home/js/home';
import Menu from './pages/menu/js/menu';
import Projects from './pages/projects/js/projects';

// css
import './app.scss'
import Style from './app.module.scss'
import About from './pages/about/js/about';



export const KeysCtx = createContext(0);


const App = () => {
  const [Keys, setKeys] = useState(0);
  return (
    <Router>
      <KeysCtx.Provider value={{ Keys, setKeys }}>
        <div id="App">
          <AppBar keys={Keys} />
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={Menu} path="/menu" />
            <Route component={Projects} path="/projects" />
            <Route component={About} path="/about" />
          </Switch>
          <BackButton className={Style.backPos} />
        </div>
      </KeysCtx.Provider>
    </Router>
  );
};





export default App;