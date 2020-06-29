import React from "react";
import { BrowserRouter as Router, Route, Link, Switch, HashRouter, Redirect } from "react-router-dom";

import flickhub from "../assets/images/logo3.jpg";
import MobileFlickhub from "./MobileFlickhub"
import InfoPage from "../InfoPage"
import About from "../About";
import Filter from "../Filter";
import MobileFeedback from "./MobileFeedback";
import { SearchItem } from "../Flickhub";
import MobileSpinner from "./MobileSpinner";

export const ulRouter = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  top: "0",
  position: "fixed",
  tansition: "all 0.3s ease",
  padding: "10px 40px"
};



const MobileRouters = (props) => {
  const [showMenu, setShowMenu] = React.useState(false);
  const [respObj, setRespObj] = React.useState(null)

  const collapseRef = React.useRef()

  React.useEffect(() => {
    fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mv_name: "iron man" }),
    })
      .then((response) => response.json())
      //   .then(response => console.log("Response mobile: ",response))
      .then((response) => setRespObj(response))
      .catch((error) => console.log("error", error));
  }, []);
  
  const SearchMobile = props => {
    return (
      <div style={{marginTop: "75px"}}>
        <SearchItem respObj={respObj.data} mobileCard={true} searchFor={props.match.params.searchString} />
      </div>
    )
  }

  return (
    <div>
      <Router>
        <ul style={ulRouter}>
          <li style={{ marginLeft: "-35px" }}>
            <a href="/#/home">
              <img src={flickhub} height="30" width="30" alt="" />
            </a>
          </li>
        </ul>

        <Switch>
          {respObj ? (
            respObj.data.map((item, index) => {
              return (
                <Route
                  path={`/title/${item.name}`}
                  exact
                  key={`title-number-${index}`}
                  render={() => <InfoPage item={item} />}
                />
              );
            })
          ) : (
            <div style={{ margin: "75px 0px" }}>
              <MobileSpinner />
            </div>
          )}
          {respObj ? (
            <Route
              path={`/search/:searchString`}
              component={SearchMobile}
            />
          ) : (
            <MobileSpinner />
          )}

          <Route path="/about">
            <About font="18px" headFontSize="35px" margin="30px" />
          </Route>
          <Route path="/filter">
            <Filter />
          </Route>
          <Route path="/feedback">
            <MobileFeedback />
          </Route>

          <Route path="/" exact>
            <MobileFlickhub />
           </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default MobileRouters;
