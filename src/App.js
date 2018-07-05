import React, { Component } from 'react';
import './styles/css/generalFile.css';
// import {Animated} from "react-animated-css";
import {MenuItems} from './DataController/DataController';
import LeftMenuComponent from './Components/LeftMenuComponent';
import HeaderBlock from './Components/HeaderBlock';
import PortfolioBlock from './Components/PortfolioBlock';




class App extends Component {


  render() {
    return (
      <div className="App">

        <LeftMenuComponent menuData={MenuItems} />
        <HeaderBlock />
        <PortfolioBlock />

      </div>
    );
  }
}

export default App;
