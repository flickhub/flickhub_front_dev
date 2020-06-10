import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Filter from "./Filter";
import "./App.css";
import { icons } from "./constants/icons";
import HoverCard2 from "./HoverCard2";

ReactDOM.render(
  <div
    id="mainDiv"
    style={{
      zIndex: "1",
      paddingBottom: "450px",
      paddingTop: "150px",
      paddingLeft: "30px",
      marginBottom: "100px",
      backgroundColor: "#101010",
    }}
  >
    <Navbar />
    <Cards />
  </div>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
