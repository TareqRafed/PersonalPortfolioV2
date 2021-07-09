import React, { createContext, useState } from 'react';

//Componenets
import AppBar from './components/appbar/js/appbar';

// Pages
import Home from './pages/home/js/home';

// css
import './app.scss'



export const KeysCtx = createContext(0);


const App = () => {
  const [Keys, setKeys] = useState(0);
  return (
    <KeysCtx.Provider value={{Keys, setKeys}}>
      <div id="App">
        <AppBar keys={Keys} />
        <Home />
      </div>
    </KeysCtx.Provider>
  );
};





export default App;