import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';

import { BrowserRouter } from 'react-router-dom';

class App extends Component {


render(){
  return (
      <div>
        <Main />
      </div>
  );
}
}

export default App;