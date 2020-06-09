import React from "react";
import ReactDOM from "react-dom";

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
        zIndex: "0",
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
        <img src={props.poster} height="260" width="220" />{" "}
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
            position: "absolute"
          }}
        >
          <a href={props.netflixLink} target="_blank">
            <img id="thumbnail" src={props.netflixIcon} height="30px" />
          </a>
          <a href={props.primeVideoLink} target="_blank">
            <img id="thumbnail" src={props.primeVideoIcon} height="30px" />
          </a>
          <a href={props.hotstarLink} target="_blank">
            <img id="thumbnail" src={props.hotstarIcon} height="30px" />
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
