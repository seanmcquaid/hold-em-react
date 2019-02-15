import React, { Component } from 'react';
import PokerTable from "./components/PokerTable";
import './App.css';

class App extends Component {
  render() {
    return (
     <div className="container">
     <PokerTable />
     </div>
    )
  }
}

export default App;
