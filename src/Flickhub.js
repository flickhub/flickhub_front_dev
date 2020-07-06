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
import Shimmer from "./Shimmer";
import { useMediaQuery } from "react-responsive";

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
          borderRadius: useMediaQuery({minWidth: 790}) ? "10px" : "5px",
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

  // React.useEffect(() => {
  //   fetch("http://localhost:5000/submit", {
  //     method: "POST",
  //     headers: {
  //       "Access-Control-Allow-Origin": "*",
  //       "Content-Type": "application/json",
  //     },
  //     // mode: "cors",
  //     body: JSON.stringify({ mv_name: "iron man" }),
  //   })
  //     .then((response) => response.json())
  //     .then((response) => setRespObj(response))
  //     .catch((error) => console.log("error", error));
  // }, []);

  React.useEffect(() => {
    fetch("http://flickhub.in/random", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      // mode: "cors",
    })
      .then((response) => response.json())
      // .then((response) => console.log("Random ", response))
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
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
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
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
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
                  console.log();
                }}
              />
              <SearchBtn searchValue={searchValue} disableRef={disableRef} />
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
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

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          flexWrap: "wrap",
          margin: "150px 10px 50px 10px",
        }}
      >
        {respObj ? (
          respObj.data.map((item, index) => {
            return (
              <div style={{}}>
                <Hover item={item} key={`search-result-${item.name}`} />;
              </div>
            );
          })
        ) : (
          <div>
            <Shimmer />
          </div>
        )}
      </div>
    </div>
  );
};

export const SearchItem = (props) => {

  const [searchValue, setSearchValue] = React.useState("")
  const searchStringRef = React.useRef()
  const disableRef = React.useRef();

  const mobile = useMediaQuery({ minWidth: 790 });

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
                      <Hover item={item} key={`search-result-${name}`} />
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
        marginTop: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
          margin: "0px 20px 100px 20px"
        }}
      >
        <input
          autoFocus={true}
          placeholder="Search with a keyword"
          type="text"
          style={{
            height: "40px",
            borderRadius: mobile ? "10px" : "5px",
            padding: "5px 20px",
            border: "none",
            fontSize: "16px",
            width: "80%"
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
            console.log();
          }}
        />
        <SearchBtn searchValue={searchValue} disableRef={disableRef} />
      </div>

      {items()}
    </div>
  ) : (
    <p>Loading . . .</p>
  );
};

export default Flickhub;
