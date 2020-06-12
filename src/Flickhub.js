import React from 'react';

import './App.css'
import Navbar from './Navbar';
import Cards from './Cards';


const Flickhub = () => {

    const appRef=React.useRef()
    const appRef2 = React.useRef();

    return (
      <div>
        <Navbar />
        <div
          id="divs"
          style={{
            display: "flex",
            // flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "880px",
            width: "100vw",
            overflow: "hidden",
            transition: "all 1s linear",
          }}
          ref={appRef}
        >
          <button
            id="browseBtnDown"
            className="btn btn-link"
            onClick={(e) => {
              appRef.current.style.transform = "translate(0px, -100vh)";
              appRef2.current.style.transform = "translate(0px, -100vh)";
            }}
          >
            Browse <br />
            <div style={{ marginTop: "-50px" }}>
              <i
                className="fa fa-chevron-down"
                style={{ fontSize: "25px" }}
              ></i>
            </div>
          </button>
        </div>

        <div
          ref={appRef2}
          style={{
            height: "100vh",
            background: "black",
            transition: "all 1s linear",
          }}
        >
          <button
            style={{
          
            }}
            id="browseBtnUp"
            className="btn btn-link"
            onClick={(e) => {
              appRef.current.style.transform = "translate(0px, 0px)";
              appRef2.current.style.transform = "translate(0px, 100vh)";
            }}
          >
            <i className="fa fa-angle-double-up"></i>
          </button>
          <Cards />
        </div>
      </div>
    );
}

export default Flickhub;