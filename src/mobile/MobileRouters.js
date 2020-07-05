import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  HashRouter,
  Redirect,
} from "react-router-dom";

import flickhub from "../assets/images/logo3.jpg";
import MobileFlickhub from "./MobileFlickhub";
import About from "../About";
import Filter from "../Filter";
import MobileFeedback from "./MobileFeedback";
import { SearchItem } from "../Flickhub";
import MobileSpinner from "./MobileSpinner";
import { Info } from "../Routers";

export const ulRouter = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  top: "0",
  position: "fixed",
  tansition: "all 0.3s ease",
  padding: "10px 40px",
};

export const SearchMobile = (props) => {
  const [respObj, setRespObj] = React.useState(null);

  // Link to server for making requests
  React.useEffect(() => {
    fetch("http://3.7.155.169/submit", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mv_name: props.match.params.searchString }),
    })
      .then((response) => response.json())
      // .then(response => console.log("Response mobile: ",response))
      .then((response) => setRespObj(response))
      .catch((error) => console.log("error", error));
  }, []);

  return respObj ? (
    <div style={{ marginTop: "75px" }}>
      <SearchItem
        respObj={respObj.data}
        mobileCard={true}
        searchFor={props.match.params.searchString}
      />
    </div>
  ) : (
    <MobileSpinner />
  );
};

const MobileRouters = (props) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const collapseRef = React.useRef();

  const [respObj, setRespObj] = React.useState(null);

  // Link to server for making requests
  React.useEffect(() => {
    fetch("http://3.7.155.169/submit", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      // body: JSON.stringify({ mv_name: props.match.params.searchString }),
    })
      .then((response) => response.json())
      .then((response) => setRespObj(response))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      <Router>
        <ul style={ulRouter}>
          <li style={{ marginLeft: "-35px" }}>
            <Link to="/">
              <img src={flickhub} height="30" width="30" alt="" />
            </Link>
          </li>
        </ul>

        <Switch>
          <Route
            path={`/search/:searchString`}
            // exact
            component={SearchMobile}
          />
          <Route path="/title/:id" component={Info} />
          <Route path="/about">
            <div style={{ margin: "-50px 0px 50px 0px" }}>
              <About font="18px" headFontSize="35px" margin="10px" />
            </div>
          </Route>
          <Route path="/filter">
            <Filter />
          </Route>
          <Route path="/feedback">
            <MobileFeedback />
          </Route>

          <Route path="/">
            <MobileFlickhub />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MobileRouters;
