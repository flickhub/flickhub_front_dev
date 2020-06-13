import React from "react";

import "./App.css";
import Cards from "./Cards";
import CardInitial from "./CardInitial";
import { icons } from "./constants/icons";


const Flickhub = () => {
  const [searchValue, setSearchValue] = React.useState();
  const [empty, setEmpty] = React.useState(false);

  const appRef = React.useRef();
  const appRef2 = React.useRef();
  const [respObj, setRespObj] = React.useState(null);

  const searchStringRef = React.useRef();

  React.useEffect(() => {
    fetch("http://085b41a4ac71.ngrok.io/submit/1920", {
      header: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => setRespObj(response.data))
      .catch((error) => console.log("error", error));
  }, []);

const items = () => {
  const filteredTitles = respObj
    .filter((data) => {
      if (data.name.toLowerCase().includes(searchValue.toLowerCase())) {
        return data;
      }
    })
    .map((data) => {
      return (
        <div
          className="container"
          style={{
            height: "500px",
            padding: "10px",
            display: "flex",
            alignItems: "center",
          }}
        >
          {respObj.map((name) => {
            if (JSON.stringify(data) == JSON.stringify(name)) {
              return (
                <div
                  style={{
                    padding: "0px",
                    margin: "0px 10px",
                    display: "block",
                    cursor: "pointer",
                  }}
                  className="col"
                >
                  <CardInitial
                    title={data.name}
                    poster={data.image}
                    netflixLink={data.urlname}
                    netflixIcon={icons.netflixIcon}
                    primeVideoLink={data.urlname}
                    primeVideoIcon={icons.primeVideoIcon}
                    hotstarLink={data.urlname}
                    hotstarIcon={icons.hotstarIcon}
                  />
                </div>
              );
            }
          })}
        </div>
      );
    });
  if (filteredTitles.length) {
    return filteredTitles;
  }
  return (
    <div>
      <p>No matches found</p>
    </div>
  );
};


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
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "880px",
          width: "100%",
          overflow: "hidden",
          transition: "all 1s linear",
        }}
        ref={appRef}
      >
        <div
          stlye={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h2
            style={{
              fontSize: "130px",
              color: "rgba(255,255,255",
              marginLeft: "175px",
            }}
          >
            <span stlye={{}}>Flick</span>
            <span style={{ color: "rgba(255,134,20)" }}>Hub</span>
          </h2>

          <div>
            <input
              autoFocus="true"
              placeholder="Search"
              type="text"
              style={{
                width: "750px",
                height: "50px",
                borderRadius: "5px",
                padding: "10px",
                border: "none",
                marginLeft: "50px",
              }}
              ref={searchStringRef}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
            />
            <button
              type="button"
              className="btn btn-light"
              style={{
                backgroundColor: "rgba(255,134,20)",
                color: "white",
                border: "none",
                marginLeft: "10px",
                marginTop: "-5px",
                height: "50px",
              }}
              onClick={() => {
                items()

                // httpService({
                //   url: '/submit/'
                // })

                if (
                  searchStringRef.current.value == "" ||
                  searchStringRef.current.value == " "
                ) {
                  setEmpty(true);
                  appRef.current.style.transform = "translate(0px, -100vh)";
                  appRef2.current.style.transform = "translate(0px, -100vh)";
                  return <h1>Something</h1>;
                } else {
                  setEmpty(false);
                  alert(searchValue);
                }
              }}
            >
              <b>Search</b>
            </button>
            <p
              style={{
                fontSize: "30px",
                color: "white",
                width: "800px",
                marginTop: "30px",
                paddingLeft: "100px",
              }}
            >
              Want to watch that popular flick? Not sure, which online streaming
              platform it is available on? Worry no more! FlickHub has got your
              back! Tap tap and away!
            </p>
          </div>

          
        </div>
        <button
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
        </button>
      </div>

      <div
        ref={appRef2}
        style={{
          height: "100vh",

          transition: "all 1s linear",
        }}
      >
        <button
          style={{marginTop: "20px"}}
          id="browseBtnUp"
          className="btn btn-link"
          onClick={(e) => {
            appRef.current.style.transform = "translate(0px, 0px)";
            appRef2.current.style.transform = "translate(0px, 100vh)";
          }}
        >
          <i className="fa fa-angle-double-up"></i>
        </button>
        <div style={{color: "white", fontSize: "30px", marginLeft: "50px" }}>{empty ? (
          <p>
            Search string was empty. Showing popular titles instead
          </p>
        ) : null}</div>
        <Cards />
      </div>
    </div>
  );
};

export default Flickhub;
