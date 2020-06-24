import React from "react";

import flickhub from "./assets/images/logo3.jpg";
import { icons } from "./constants/icons";

const CardInitial = (props) => {
  const AppRef = React.useRef();

  return (
    <div
      style={{
        border: "1px solid black",
        backgroundColor: "#333333",
        borderRadius: "5px",
        overflow: "hidden",
        margin: "0px 5px",
        maxWidth: "200px",
        maxHeight: "300px",
        zIndex: "1",
      }}
    >
      <div
        style={{
          zIndex: "0",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundColor: "black",
          opacity: "0.6",
          padding: "0px 10px",
          margin: "-20px",
        }}
      >
        {props.poster ? (
          <img src={props.poster} height="260" width="220" alt="poster" style={{opacity: "0.7"}} />
        ) : (
          <div style={{ display: "inline-block" }}>
            <img
              src={flickhub}
              height="185"
              width="200"
              alt="no-poster"
              style={{ paddingTop: "20px", opacity: "0.7" }}
            />
            <h3
              style={{
                color: "white",
                textAlign: "center",
              }}
            >
              Image not available
            </h3>
          </div>
        )}
      </div>
      <div
        id="App"
        className="card cad"
        ref={AppRef}
        style={{
          zIndex: "0",
          maxWidth: "280px",
          maxHeight: "320px",
          border: "none",
          marginTop: "-100px",
          background: "transparent",
        }}
      >
        <div
          id="images1"
          className="card-body"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            width: "100%",
            padding: "10px 10px",
            left: 0,
            bottom: 0,
            position: "absolute",
          }}
        >
          <a
            href={props.urlname.includes("netflix") ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="thumbnail"
              src={props.urlname.includes("netflix") ? icons.netflixIcon : null}
              height="30px"
              alt=""
            />
          </a>
          <a
            href={props.urlname.includes("primevideo") ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="thumbnail"
              src={
                props.urlname.includes("primevideo")
                  ? icons.primeVideoIcon
                  : null
              }
              height="30px"
              alt=""
            />
          </a>
          <a
            href={props.urlname.includes("hotstar") ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              id="thumbnail"
              src={props.urlname.includes("hotstar") ? icons.hotstarIcon : null}
              height="30px"
              alt=""
            />
          </a>
        </div>
      </div>

      <h1
        id="heading1"
        className="card-title"
        style={{
          fontSize: "0.95em",
          overflow: "hidden",
          maxWidth: "280px",
          padding: "10px",
          display: "block",
          blockSize: "50px",
        }}
      >
        {props.title}
      </h1>
    </div>
  );
};

export default CardInitial;
