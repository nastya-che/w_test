import React, { Component } from 'react';
import './styles/css/generalFile.css';
// import {Animated} from "react-animated-css";
import {MenuItems, GalleryItems} from './DataController/DataController';
import LeftMenuComponent from './Components/LeftMenuComponent';
import HeaderBlock from './Components/HeaderBlock';
import GalleryBlock from './Components/GalleryBlock';




class App extends Component {


  render() {
    return (
      <div className="App">

        <LeftMenuComponent menuData={MenuItems} />
        <HeaderBlock />
        <GalleryBlock galleryItems={GalleryItems}/>

      </div>
    );
  }
}

export default App;
