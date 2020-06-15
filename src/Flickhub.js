import React from "react";

import "./App.css";
import Cards from "./Cards";
import CardInitial from "./CardInitial";
import { icons } from "./constants/icons";
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Search from "./Search";
import Hover from "./Hover";

export const SearchBtn = (props) => {
  const [found, setFound] = React.useState(false);
  return (
    <Link to={`/search`}>
      <button
        type="button"
        className="btn btn-light"
        style={{
          backgroundColor: "rgba(255,134,20)",
          color: "white",
          border: "none",
          marginLeft: "10px",
          marginTop: "-5px",
          height: "60px",
        }}
        disabled={true}
        ref={props.disableRef}
        onClick={() => {
          setFound(true);
        }}
      >
        <b>Search</b>
      </button>
    </Link>
  );
};

const Flickhub = () => {
  const [searchValue, setSearchValue] = React.useState("");
  const [empty, setEmpty] = React.useState(false);
  const [respObj, setRespObj] = React.useState(null);
  const [found, setFound] = React.useState(false);

  const appRef = React.useRef();
  const appRef2 = React.useRef();
  const disableRef = React.useRef();
  const searchStringRef = React.useRef();

  React.useEffect(() => {
    fetch("http://localhost:8080/title", {
      header: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => setRespObj(response))
      .catch((error) => console.log("error", error));
  }, []);

  return respObj ? (
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
          <h2
            style={{
              fontSize: "210px",
              color: "rgba(255,255,255)",
              marginLeft: "320px",
              paddingBottom: "30px",
            }}
          >
            <span stlye={{}}>
              <strong>Flick</strong>
            </span>
            <span style={{ color: "rgba(255,134,20)" }}>
              <b>Hub</b>
            </span>
          </h2>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "100vw",
            }}
          >
            <div>
              <input
                autoFocus="true"
                placeholder="Search"
                type="text"
                style={{
                  width: "760px",
                  height: "60px",
                  borderRadius: "5px",
                  padding: "10px",
                  border: "none",
                  marginLeft: "50px",
                  fontSize: "20px",
                }}
                ref={searchStringRef}
                onChange={(e) => {
                  setSearchValue(e.target.value);
                  e.target.value != ""
                    ? (disableRef.current.disabled = false)
                    : (disableRef.current.disabled = true);
                }}
              />
              <SearchBtn searchValue={searchValue} disableRef={disableRef} />
            </div>

            <p
              style={{
                fontSize: "24px",
                color: "white",
                width: "875px",
                marginTop: "30px",
                marginLeft: "55px",
                textAlign: "center",
              }}
            >
              Want to watch that popular flick? Not sure, which online streaming
              platform it is available on? Worry no more! FlickHub has got your
              back! Tap tap and away!
            </p>
            <div style={{ marginTop: "50px" }}>
              <SearchItem searchFor={searchValue} respObj={respObj} />}
            </div>
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
  ) : (
    <p>Loading ...</p>
  );
};

export const SearchItem = (props) => {
  const items = () => {
    return props.respObj
      .filter((data) => {
        if (
          data.response.name
            .toLowerCase()
            .includes(props.searchFor.toLowerCase())
        ) {
          return data;
        }
      })
      .map((data) => {
        return props.respObj.map((name) => {
          if (data == name) {
            return (
              <Route path={`/search`}>
                <Hover item={data.response} />
              </Route>
            );
          }
        });
      });
  };
  return props.respObj ? (
    <div style={{ display: "flex" }}>{items()}</div>
  ) : (
    <div>Loading . . .</div>
  );
};

export default Flickhub;
