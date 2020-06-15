import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";
import Flickhub, { RoutingMainPage } from "./Flickhub";
import Feedback from "./Feedback";
import Filter from "./Filter";
import About from "./About";
import { icons } from "./constants/icons";
import flickhub from "./assets/images/logo3.jpg";
import Search from "./Search";
import InfoPage from "./InfoPage";
import Filter2 from "./Filter2";

// export const RoutersGo = (props) => {
//   return (
//     <Router>
//       <div style={{ zIndex: "1" }}>
//         <Link to="/">Go</Link>
//       </div>
//       <Switch>
//         <Route path="/">
//           <InfoPage item={props.state} />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

const SearchScreen = (props) => {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ color: "#fff" }}>{props.match.params.searchString}</p>
    </div>
  );
};

function Routers(props) {
  const [search, setSearch] = React.useState(false);
  const [find, setFind] = React.useState("");

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
                    // e.target.style.transform = "translate(-100px,0px)";
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
              <li></li>
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
          {/* <Filter
            netflixIcon={icons.netflixIcon}
            primeVideoIcon={icons.primeVideoIcon}
            hotstarIcon={icons.hotstarIcon}
          /> */}
          <Filter2 />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/search/:searchString" component={SearchScreen} />
        <Route path="/">
          <Flickhub />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routers;
