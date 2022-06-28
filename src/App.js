import React, { Component } from 'react';
import './App.css';
import Main from './components/MainComponent';

function refreshPage() {
  window.location.reload(false);
}

class App extends Component {

render(){
  return (
      <div>
        <Main {...refreshPage}/>
      </div>
  );
}
}

export default App;