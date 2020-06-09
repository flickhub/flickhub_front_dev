import React from "react";

import "./App.css";
import { titles } from "./utils/response";
import CardInitial from "./CardInitial";

const Navbar = () => {
  const [search, setSearch] = React.useState(false);
  const [goToPage, setGoToPage] = React.useState(false);
  const [find, setFind] = React.useState("");
  const searchRef = React.useRef();
  const scrollRef = React.useRef();


  const searchBar = (
    <input
      type="text"
      placeholder="Search"
      style={{
        width: "300px",
        height: "35px",
        background: "rgba(50,50,50)",
        border: "none",
        borderRadius: "15px",
        padding: "10px",
        color: "white",
      }}
      onChange={(e) => {
        onChange(e);
      }}
      onClick={(e) => {
        // e.target.style.transform = "translate(-100px,0px)"
      }}
    />
  );

  const onChange = (e) => {
    setFind(e.target.value);
  };

  const items = titles()
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
        <button id="leftBtn" className="btn btn-link" href="#">
          Logo
        </button>
        <div id="rightBtn">
          {search ? searchBar : null}
          <button
            type="button"
            className="btn btn-link fa fa-search"
            onClick={() => setSearch(!search)}
            style={{}}
          ></button>
          <button href="#" className="btn btn-link">
            About
          </button>
          <button href="#" className="btn btn-link">
            Contact Us
          </button>
          <button href="#" className="btn btn-link">
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
          {search ? items : null}
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
              onClick={() => {
                scrollRef.current.style.transform += "translate(800px, 0)";
              }}
            >
              <b></b>
            </button>

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
            >
              <b></b>
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};
export default Navbar;
