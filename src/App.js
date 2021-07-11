import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//Componenets
import AppBar from './components/appbar/js/appbar';
import BackButton from './components/backButton/js/back';

// Pages
import Home from './pages/home/js/home';
import Menu from './pages/menu/js/menu';

// css
import './app.scss'
import Style from './app.module.scss'



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
          </Switch>
          <BackButton className={Style.backPos} />
        </div>
      </KeysCtx.Provider>
    </Router>
  );
};





export default App;