import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Flickhub, { SearchItem } from "./Flickhub";
import Feedback from "./Feedback";
import About, { Contact } from "./About";
import flickhub from "./assets/images/logo3.jpg";
import Filter2 from "./Filter2";
import InfoPage from "./InfoPage";
import Shimmer from "./Shimmer";
import MobileHover from "./mobile/MobileHover";
import Hover from "./Hover";
import { responseObj } from "./utils/network";
import { useMediaQuery } from "react-responsive";
import MobileSpinner from "./mobile/MobileSpinner";

export const SearchScreen = (props) => {
  const [respObj, setRespObj] = React.useState(null);

  // Link to server for making requests
  React.useEffect(() => {
    fetch("http://3.7.155.169/submit", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify({ mv_name: props.match.params.searchString }),
    })
      .then((response) => response.json())
      .then((response) => {
        setRespObj(response);
        response === null ? console.log("No results") : console.log("Success!");
        console.log("Response", response);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return (
    <div
      style={{
        margin: "100px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {respObj ? (
        <div>
          <SearchItem
            searchFor={props.match.params.searchString}
            respObj={respObj.data}
          />
        </div>
      ) : (
        <div>
          <Shimmer />
        </div>
      )}
    </div>
  );
};

export const Info = (props) => {
  const [respObj, setRespObj] = React.useState(null);
  const mobile = useMediaQuery({ minWidth: 850 });

  console.log("id", props.match.params.id);
  React.useEffect(() => {
    fetch(`http://3.7.155.169/title/${props.match.params.id}`, {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setRespObj(response);
        console.log(response);
      })
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div>
      {respObj ? (
        <InfoPage item={respObj.data[0]} />
      ) : (
        <div
          style={{
            height: "100vh",
            width: "100vw",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {mobile ? <Shimmer /> : <MobileSpinner />}
        </div>
      )}
    </div>
  );
};

function Routers(props) {
  const [search, setSearch] = React.useState(false);
  const [find, setFind] = React.useState("marvel");
  const [respObj, setRespObj] = React.useState(null);

  const aboutRef = React.useRef();

  const searchBar = (
    <input
      type="text"
      placeholder="Search"
      autoFocus={true}
      style={{
        transition: "all 0.5s ease",
        width: "0px",
        background: "rgba(50,50,50)",
        border: "none",
        borderRadius: "15px",
        padding: "10px",
        color: "white",
        marginLeft: "550px",
      }}
      onFocus={(e) => {
        e.target.style.width = "300px";
      }}
      onChange={(e) => {
        onChange(e);
      }}
    />
  );

  const onChange = (e) => {
    setFind(e.target.value);
  };

  return (
    <Router>
      <ul>
        <li id="leftBtn" style={{ color: "white" }}>
          <Link to="/">
            <div style={{ display: "flex", transition: "all 1s ease" }}>
              <img
                alt=""
                src={flickhub}
                height="45px"
                width="45px"
                style={{ padding: "5px" }}
              />
            </div>
          </Link>
        </li>
        <li id="leftBtn" style={{ color: "white" }}></li>
        <div id="navRight">
          <li>
            <a href="/about/#contactInfo">
              <button className="btn btn-link">Contact</button>
            </a>
          </li>
          <li>
            <Link to="/about">
              <button className="btn btn-link">About</button>
            </Link>
          </li>
          <li>
            <Link to="/filter">
              <button className="btn btn-link">Filtered Search</button>
            </Link>
          </li>
          <li>
            <Link to="/feedback">
              <button className="btn btn-link">Feedback</button>
            </Link>
          </li>
        </div>
      </ul>

      <Switch>
        <Route path="/feedback">
          <Feedback />
        </Route>
        <Route path="/filter">
          <Filter2 />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route path="/search/:searchString" component={SearchScreen} />
        <Route path="/title/:id" component={Info} />

        <Route path="/">
          <Flickhub />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routers;
