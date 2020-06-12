import React from "react";
import ReactDOM from "react-dom";

import "./App.css";

import Cards from "./Cards";
import CardInitial from "./CardInitial";
import Filter from "./Filter";
import Feedback from "./Feedback";

import { icons } from "./constants/icons";
import { titles } from "./utils/response";

const Navbar = () => {
  const [filterPage, setFilterPage] = React.useState(false);
  const [item, setItem] = React.useState(titles()[titles().length])

  const [search, setSearch] = React.useState(false);
  const [goToPage, setGoToPage] = React.useState(false);

  const [find, setFind] = React.useState("");
  const searchRef = React.useRef();
  const scrollRef = React.useRef();
  const styling = {
    fontSize: "15px",
    fontStyle: "none",
  };

  const searchBar = (
    <input
      type="text"
      placeholder="Search"
      autoFocus={true}
      style={{
        transition: "all 1s linear",
        width: "300px",
        // height: "35px",
        background: "rgba(50,50,50)",
        border: "none",
        borderRadius: "15px",
        padding: "10px",
        color: "white",
      }}
      // onFocus={() => {setSearch(true)}}
      // onBlur={() => {
      //   setSearch(false)
      //   search
      //     ? (scrollRef.current.style.display = "flex")
      //     : (scrollRef.current.style.display = "none");
      // }}
      onChange={(e) => {
        onChange(e);
      }}
    />
  );

  const onChange = (e) => {
    setFind(e.target.value);
  };

  const items = () => {
    const filteredTitles = titles()
      .filter((data) => {
        if (data.title.toLowerCase().includes(find.toLowerCase())) {
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
            {titles().map((name) => {
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
                    onClick={() => setGoToPage(true)}
                  >
                    <CardInitial
                      title={data.title}
                      poster={data.poster}
                      netflixLink={data.ott.netflix}
                      netflixIcon={data.ott.icons.netflixIcon}
                      primeVideoLink={data.ott.primeVideo}
                      primeVideoIcon={data.ott.icons.primeVideoIcon}
                      hotstarLink={data.ott.hotstar}
                      hotstarIcon={data.ott.icons.hotstarIcon}
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
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <header
        id="navbar"
        style={{
          top: 0,
          left: 0,
          position: "fixed",
          backgroundColor: "black",
          borderBottom: "3px solid rgba(255,134,20) ",
        }}
      >
        <button
          id="leftBtn"
          className="btn btn-link"
          href="#"
          onClick={() => {
            ReactDOM.render(
              <div>
                <Navbar />
                <div
                  style={{
                    marginLeft: "30px",
                  }}
                >
                  <Cards />
                </div>
              </div>,
              document.getElementsByTagName("body")[0]
            );
          }}
        >
          Logo
        </button>
        <div id="rightBtn" style={{ transition: "all 1s linear" }}>
          {search ? searchBar : null}
          <button
            type="button"
            className="btn btn-link fa fa-search"
            onClick={() => setSearch(!search)}
            style={styling}
          ></button>
          <button
            href="#"
            className="btn btn-link"
            onClick={() => {
              ReactDOM.render(
                <div>
                  <Navbar />
                  <Filter
                    netflixIcon={icons.netflixIcon}
                    primeVideoIcon={icons.primeVideoIcon}
                    hotstarIcon={icons.hotstarIcon}
                  />
                </div>,
                document.getElementsByTagName("body")[0]
              );
            }}
          >
            Filtered Search
          </button>
          <button href="#" className="btn btn-link">
            About
          </button>
          <button href="#" className="btn btn-link">
            Contact Us
          </button>
          <button
            href="#"
            className="btn btn-link"
            onClick={() => {
              ReactDOM.render(
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  }}
                >
                  <Navbar />
                  <Feedback />
                </div>,
                document.getElementsByTagName("body")[0]
              );
            }}
          >
            Feedback
          </button>
        </div>
      </header>

      <div
        id="searches"
        ref={searchRef}
        className="container"
        style={{
          display: "flex",
          justifyContent: "flex-start",
          position: "fixed",
          zIndex: "1",
          top: "0",
          margin: "50px",
          background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
          overflow: "auto",
          borderRadius: "5px",
          marginLeft: "20px",
          paddingLeft: "30px",
          minWidth: "1400px",
        }}
      >
        <div
          style={{ transition: "all 0.5s ease", display: "flex" }}
          ref={scrollRef}
        >
          {search ? items() : null}
        </div>

        {search ? (
          <div>
            <button
              className="fa fa-chevron-circle-left btn btn-link"
              type="button"
              style={{
                left: "0",
                marginLeft: "15px",
                marginTop: "180px",
                position: "fixed",
                fontSize: "80px",
              }}
              onClick={(e) => {
                scrollRef.current.style.transform += "translate(800px, 0)";
              }}
            ></button>

            <button
              className="fa fa-chevron-circle-right btn btn-link"
              style={{
                marginRight: "15px",
                marginTop: "0px",
                right: "0",
                position: "fixed",
                fontSize: "80px",
                marginTop: "180px",
              }}
              type="button"
              onClick={() => {
                scrollRef.current.style.transform += "translate(-800px, 0)";
              }}
            ></button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Navbar;
