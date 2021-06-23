import React from 'react';

//Componenets
import AppBar from './components/appbar/js/appbar';

// Pages
import Home from './pages/home/js/home';

// css
import './app.scss'





const App = () => { 
  return (
    <div id="App">
        <AppBar />
        <Home />
    </div>
  );
};





export default App;