import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Flickhub, { SearchItem } from "./Flickhub";
import Feedback from "./Feedback";
import About from "./About";
import flickhub from "./assets/images/logo3.jpg";
import Search from "./Search";
import Filter2 from "./Filter2";
import InfoPage from "./InfoPage";
import Shimmer from "./Shimmer";


const SearchScreen = (props) => {
  const [respObj, setRespObj] = React.useState(null);

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
      .then((response) => setRespObj(response))
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
      {respObj ? <SearchItem
        searchFor={props.match.params.searchString}
        respObj={respObj.data}
      /> : <Shimmer />}
    </div>
  ) 
};


function Routers(props) {
  const [search, setSearch] = React.useState(false);
  const [find, setFind] = React.useState("");
  const [respObj, setRespObj] = React.useState(null)
  

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
        .then((response) => setRespObj(response))
        .catch((error) => console.log("error", error));
    }, []);

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
              <div style={{ transition: "all 1s ease" }}>
                <button
                  type="button"
                  className="btn btn-link fa fa-search"
                  onClick={(e) => {
                    setSearch(!search);
                  }}
                  style={{
                    fontSize: "18px",
                    fontStyle: "none",
                    position: "fixed",
                    marginTop: "6px",
                    marginLeft: "810px",
                    transition: "all 1s ease",
                  }}
                ></button>
                {search ? searchBar : null}
                {search ? <Search search={search} find={find} /> : null}
              </div>
            </div>
          </Link>
        </li>
        <li id="leftBtn" style={{ color: "white" }}></li>
        <div id="navRight">
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
        <Route path="/about">
          <About />
        </Route>
          <Route path="/search/:searchString" component={SearchScreen} />
        {respObj ? <Route path="/info-page" render={() => <InfoPage item={respObj.data[0]} />} /> : <Shimmer />}
        <Route path="/">
          <Flickhub />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routers;
