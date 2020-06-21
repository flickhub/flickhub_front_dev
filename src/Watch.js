import React from "react";

import "./App.css";
import { Link } from "react-router-dom";
import { icons } from "./constants/icons";
import flickhub from "./assets/images/logo3.jpg";

const Watch = (props) => {
  const [trailer, setTrailer] = React.useState(props.trailer);

  // setTimeout(() => {setTrailer(props.youtubeLink);}, 510)

  const replaceTrailer = <p>Trailer coming soon</p>;

  return (
    <div
      id="container1"
      className="card"
      style={{
        backgroundImage: "url(" + props.poster + ")",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundColor: "#3333",
        backgroundRepeat: "no-repeat",
        zIndex: "1",
      }}
    >
      <Link to="/info-page">
        <button
          type="button"
          className="btn btn-light card-body goToBtn"
          style={{
            position: "absolute",
            marginTop: "-15px",
            alignSelf: "flex-end",
            marginLeft: "-10px",
            width: "95%",
            fontWeight: "bold",
            padding: "0px",
          }}
        >
          Go To Page
        </button>
      </Link>

      <h1
        id="heading1"
        className="card-title"
        style={{
          color: "black",
          background: "rgba(255,134,20,0.9)",
          borderRadius: "5px",
          padding: "10px",
          margin: "25px",
          fontSize: "1.5em",
        }}
      >
        <b>{props.title}</b>
      </h1>

      {/* <iframe
        title="youtubeTrailer"
        height="250px"
        src={trailer + "?autoplay=1&mute=1&enablejsapi=1"}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
        style={{
          height: trailer === props.netflixIcon ? "100px" : "250px",
          padding: "0px 20px",
          objectFit: "contain",
          transition: "all 0.45s ease",
        }}
      ></iframe> */}

      <div
        style={{
          height: "300px",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          color: "white",
          backgroundImage: "url(" + flickhub + ")",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 style={{ display: "block", blockSize: "30px" }}>{replaceTrailer}</h3>
      </div>

      <div id="newId" className="card-body imageBack">
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "100px",
            overflow: "auto",
            padding: "15px",
            background: "rgba(50,50,50,0.9)",
            borderRadius: "10px",
            scrollbarWidth: "none",
          }}
        >
          <p id="titCon1" style={{ color: "white" }}>
            <strong>{props.content}</strong>
          </p>
        </div>
      </div>
      <div
        id="newIdImg1"
        style={{
          display: "flex",
          borderRadius: "3px",
          width: "100%",
          padding: "10px",
          overflow: "scroll",
          backgroundColor: "rgba(60,60,60,0.8)",
          scrollbarWidth: "none",
        }}
      >
        <a href={props.netflixLink} target="_blank" rel="noopener noreferrer">
          <img id="thumbnail" src={props.netflixIcon} height="50px" alt="" />
        </a>
        <a
          href={props.primeVideoLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img id="thumbnail" src={props.primeVideoIcon} height="50px" alt="" />
        </a>
        <a href={props.hotstarLink} target="_blank" rel="noopener noreferrer">
          <img id="thumbnail" src={props.hotstarIcon} height="50px" alt="" />
        </a>
      </div>
    </div>
  );
};

export default Watch;
