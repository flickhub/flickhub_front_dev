import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Index, { SearchItem } from "./pages/Index/Index";
import Feedback from "./pages/Feedback/Feedback";
import About from "./pages/About/About";
import FilteredSearch from "./pages/FilteredSearch/FilteredSearch";
//import InfoPage from "./InfoPage";
import MobileSpinner from "./mobile/MobileSpinner";
import PageNotFound from "./PageNotFound";
import Faq from "./pages/Faq/Faq";
import NavBar from "./components/NavBar/NavBar";

export const SearchScreen = (props) => {
  const [respObj, setRespObj] = React.useState(null);
  const [notFound, setNotFound] = React.useState(false);

  // Link to server for making requests
  React.useEffect(() => {
    fetch(`https://flickhub.in/submit2/${props.match.params.searchString}`, {
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
        response.data.length === 0 ? setNotFound(true) : setNotFound(false);
      })
      .catch((error) => console.log("error", error));
  }, [props.match.params.searchString]);

  return (
    <div>
      {!notFound ? (
        <div
          style={{
            marginTop: "100px",
            display: "flex",
            flexDirection: "column",
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
              <MobileSpinner />
            </div>
          )}
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

function Routers(props) {
  // const [navBarColor, setNavBarColor] = React.useState("transparent");
  // const [navBarFontColor, setNavBarFontColor] = React.useState("white");
  // const [navBarShadow, setNavBarShadow] = React.useState("none");

  // document.addEventListener("scroll", () => {
  //   if (window.scrollY < 100) {
  //     setNavBarColor("transparent");
  //     setNavBarFontColor("white");
  //     setNavBarShadow("none");
  //   } else {
  //     setNavBarColor("rgba(255,165,0,0.7)");
  //     setNavBarFontColor("black");
  //     setNavBarShadow(
  //       "rgba(0, 0, 0, 0.16) 0px 2px 5px 0px, rgba(0, 0, 0, 0.12) 0px 2px 10px 0px"
  //     );
  //   }
  // });

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/feedback">
          <Feedback />
        </Route>
        <Route exact path="/filter">
          <FilteredSearch />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/search/:searchString" component={SearchScreen} />
        {/* <Route path="/title/:id" component={Info} /> */}

        <Route exact path="/">
          <Index />
        </Route>
      </Switch>
    </Router>
  );
}

export default Routers;
