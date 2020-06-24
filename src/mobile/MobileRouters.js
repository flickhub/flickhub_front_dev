import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import flickhub from "../assets/images/logo3.jpg";
import About from "../About";
import Hamburger from "./Hamburger";

export const ulRouter = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  top: "0",
  position: "fixed",
  tansition: "all 0.3s ease",
};

const MobileRouters = () => {
  const [showMenu, setShowMenu] = React.useState(false);

  return (
    <Router>
      <ul style={ulRouter}>
        <li style={{marginLeft: "-35px"}}>
          <Link to="/">
            <img src={flickhub} height="30" width="30" alt=""  />
          </Link>
        </li>

        <li>
          <Link to="/menu">
            <button
              type="button"
              className="btn btn-link"
              onClick={() => setShowMenu(!showMenu)}
            >
              +
            </button>
          </Link>
        </li>
      </ul>

      <Switch>
        <Route path="/menu">
          <div>{showMenu ? <Hamburger /> : null}</div>
        </Route>
        <Route path="/" exact>
          <h1>Image</h1>
        </Route>
      </Switch>
    </Router>
  );
};

export default MobileRouters;
