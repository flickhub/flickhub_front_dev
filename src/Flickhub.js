import React from "react";

import "./App.css";

import {
  Link,
  Route,
  Redirect,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Hover from "./Hover";
import CardInitial from "./CardInitial";
import MobileHover from "./mobile/MobileHover";
import InfoPage from "./InfoPage";




export const initState = {
  NETFLIX: false,
  PRIME: false,
  HOTSTAR: false,
  EROSNOW: false,
  SONYLIV: false,
  ALTBALAJI: false,
  ZEE5: false,
  VOOT: false,
  VIU: false,
  year: [],
  rating: [],
  genre: [],
};

export const yearFilter = {
  0: "1950-1955",
  1: "1956-1960",
  2: "1961-1965",
  3: "1966-1970",
  4: "1971-1975",
  5: "1976-1980",
  6: "1981-1985",
  7: "1986-1990",
  8: "1991-1995",
  9: "1996-2000",
  10: "2001-2005",
  11: "2006-2010",
  12: "2011-2015",
  13: "2016-2020",
};

export const ratingFilter = {
  0: "0.0 - 1.0",
  1: "1.1 - 2.0",
  2: "2.1 - 3.0",
  3: "3.1 - 4.0",
  4: "4.1 - 5.0",
  5: "5.1 - 6.0",
  6: "6.1 - 7.0",
  7: "7.1 - 8.0",
  8: "8.1 - 9.0",
  9: "9.1 - 10.0",
};

export const genreFilter = {
  0: "Action",
  1: "Adventure",
  2: "Animation",
  3: "Biography",
  4: "Comedy",
  5: "Crime",
  6: "Documentary",
  7: "Drama",
  8: "Family",
  9: "Fantasy",
  10: "Film Noir",
  11: "Game-Show",
  12: "History",
  13: "Horror",
  14: "Music",
  15: "Musical",
  16: "Mystery",
  17: "Romance",
  18: "Sci-Fi",
  19: "Short Film",
  20: "Sport",
  // 21: "Superhero",
  21: "Thriller",
  22: "War",
  23: "Western",
};

export const randomFilter = () => {
  const filterObj = JSON.parse(JSON.stringify(initState));
  for (let i = 0; i < Math.floor(2 + 5 * Math.random()); i++) {
    filterObj[Object.keys(filterObj)[Math.floor(8 * Math.random())]] = true;
    filterObj.year.push(
      Object.keys(yearFilter)[
        Math.floor(Object.keys(yearFilter).length * Math.random())
      ]
    );
    filterObj.rating.push(
      Object.keys(ratingFilter)[
        Math.floor(Object.keys(ratingFilter).length * Math.random())
      ]
    );
    filterObj.genre.push(
      Object.keys(genreFilter)[
        Math.floor(Object.keys(genreFilter).length * Math.random())
      ]
    );
  }
  return filterObj;
};




export const SearchBtn = (props) => {
  return (
    <Link to={`/search/${props.searchValue}`}>
      <button
        type="button"
        className="btn btn-light"
        style={{
          backgroundColor: "orange",
          color: "white",
          border: "none",
          marginLeft: "10px",
          height: "40px",
          borderRadius: "10px",
          padding: "0px 15px",
          fontSize: "16px",
        }}
        disabled={true}
        ref={props.disableRef}
      >
        <b>Search</b>
      </button>
    </Link>
  );
};

const Flickhub = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [respObj, setRespObj] = React.useState(null);

  const appRef = React.useRef();
  const disableRef = React.useRef();
  const searchStringRef = React.useRef();

  console.log("Random", randomFilter())

  React.useEffect(() => {
    fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      // mode: "cors",
      body: JSON.stringify({ mv_name: "iron man" }),
    })
      .then((response) => response.json())
      .then((response) => setRespObj(response))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div
      stlye={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        id="divs"
        style={{
          display: "flex",
          // flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          overflow: "hidden",
          transition: "all 1s linear",
          paddingTop: "100px",
        }}
        ref={appRef}
      >
        <div
          stlye={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
          }}
        >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <h2
              style={{
                fontSize: "100px",
                color: "rgba(255,255,255)",
              }}
            >
              <span stlye={{}}>
                <strong>Flick</strong>
              </span>
              <span style={{ color: "orange" }}>
                <b>Hub</b>
              </span>
            </h2>
          </div>

          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              fontSize: "30px",
              marginTop: "-20px",
            }}
          >
            <p>Nobody searches it better!</p>
          </div>

          <div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <input
                autoFocus={true}
                placeholder="Search with a keyword"
                type="text"
                style={{
                  width: "650px",
                  height: "40px",
                  borderRadius: "10px",
                  padding: "5px 20px",
                  border: "none",
                  fontSize: "16px",
                }}
                ref={searchStringRef}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    window.location = `/search/${searchValue}`;
                  }
                }}
                onFocus={(e) => {
                  e.target.style.outline = "none";
                  e.target.style.border = "none";
                }}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  e.target.value !== ""
                    ? (disableRef.current.disabled = false)
                    : (disableRef.current.disabled = true);
                }}
              />
              <SearchBtn searchValue={searchValue} disableRef={disableRef} />
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <p
                style={{
                  fontSize: "24px",
                  color: "white",
                  marginTop: "30px",

                  textAlign: "center",
                  fontStyle: "italic",
                }}
              >
                Want to watch that popular flick? Not sure, which online
                streaming
                <br />
                platform it is available on? Worry no more! FlickHub has got
                your back!
                <br />
                Tap tap and away!
              </p>
            </div>
            <div style={{ marginTop: "50px" }}></div>
          </div>
        </div>
        {/* <button
          id="browseBtnDown"
          className="btn btn-link"
          style={{ marginTop: "120px" }}
          onClick={(e) => {
            appRef.current.style.transform = "translate(0px, -100vh)";
            appRef2.current.style.transform = "translate(0px, -100vh)";
          }}
        >
          Browse <br />
          <div style={{ marginTop: "-50px" }}>
            <i className="fa fa-chevron-down" style={{ fontSize: "25px" }}></i>
          </div>
        </button> */}
      </div>

      {/* <div
        ref={appRef2}
        style={{
          height: "100vh",

          transition: "all 1s linear",
        }}
      >
        <button
          style={{ marginTop: "20px" }}
          id="browseBtnUp"
          className="btn btn-link"
          onClick={(e) => {
            appRef.current.style.transform = "translate(0px, 0px)";
            appRef2.current.style.transform = "translate(0px, 100vh)";
          }}
        >
          <i className="fa fa-angle-double-up"></i>
        </button>
        <div style={{ color: "white", fontSize: "30px", marginLeft: "50px" }}>
          <div>
            {empty ? (
              <div>
                <p>Search string was empty. Showing popular titles instead</p>
                <Cards />
              </div>
            ) : (
              <div style={{ fontSize: "20px" }}>
                <SearchItem searchFor={searchValue} respObj={respObj} />
              </div>
            )}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export const SearchItem = (props) => {
  const items = () => {
    return props.respObj
      .filter((item) => {
        if (item.name.toLowerCase().includes(props.searchFor.toLowerCase())) {
          return item;
        } else {
          return null;
        }
      })
      .map((item) => {
        return props.respObj.map((name) => {
          if (item === name) {
            return (
              <div>
                {props.mobileCard ? (
                  <div>
                    <MobileHover
                      item={item}
                      key={`search-result-mobile-${name}`}
                    />
                  </div>
                ) : (
                  <div style={{ margin: "10px 0px 10px 0px" }}>
                    <div>
                      {/* <Router basename="/title"> */}
                      {/* <Link to={`/${item.name}`}> */}


                        <Hover item={item} key={`search-result-${name}`} />

                        
                        {/* </Link> */}
                      {/* <Route path={`/${item.name}`} render={() => <InfoPage item={item} />} /> */}
                      {/* </Router> */}
                    </div>
                  </div>
                )}
              </div>
            );
          } else {
            return null;
          }
        });
      });
  };
  return props.respObj ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100vw",
      }}
    >
      {items()}
    </div>
  ) : (
    <p>Loading . . .</p>
  );
};

export default Flickhub;
