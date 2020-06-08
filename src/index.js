import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Watch from './Watch.js'
import CardInitial from './CardInitial.js'
import * as serviceWorker from './serviceWorker';
import Navbar from './Navbar';
import Cards from './Cards'
import Search from './Search'
import Filter from './Filter'
import './App.css';
import { theWitcher } from './utils/response';
import { icons } from './constants/icons';

ReactDOM.render(
  <div
    id="mainDiv"
    style={{
      zIndex: "1",
      // border: "1px solid #9999",
      boxShadow: "10px 5px 15px -8px #333333",
      paddingBottom: "450px",
      paddingTop: "150px",
      paddingLeft: "30px",
      marginBottom: "100px",
      backgroundColor: "#101010",
    }}
  >
    <Navbar />
    {/* <Filter netflixIcon={icons. netflixIcon} primeVideoIcon={icons.primeVideoIcon} hotstarIcon={icons.hotstarIcon} /> */}
    <Search />
    <Cards />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
