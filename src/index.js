import React from "react";
import ReactDOM from "react-dom";

import * as serviceWorker from "./serviceWorker";

import "./index.css";
import "./App.css";
import Routers, { RoutersGo } from "./Routers";
import Search from "./Search";
import CardInitial from "./CardInitial";
import Cards from "./Cards";
import Flickhub from "./Flickhub";

ReactDOM.render(

  <div>
    <Routers />
  </div>
  
  ,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
