import React from "react";
import ReactDOM from "react-dom"

import "./App.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { icons } from "./constants/icons";
import flickhub from "./assets/images/logo3.jpg";
import InfoPage from "./InfoPage";
import Shimmer from "./Shimmer";


const Watch = (props) => {
  const {item} = props;
  const [trailer, setTrailer] = React.useState();

  setTimeout(() => {setTrailer(item.trailer)}, 510)

  
  const replaceTrailer = <p>Trailer coming soon</p>;

  return (
    <div
      id="container1"
      className="card"
      style={{
        backgroundImage: "url(" + item.image + ")",
        backgroundSize: "contain",
        backgroundPosition: "center center",
        backgroundColor: "#3333",
        backgroundRepeat: "no-repeat",
        zIndex: "1",
        backgroundColor: "rgba(1,1,1)",
      }}
    >
      {/* <Link to={`/title/${item.name}`}> */}
      <button
        type="button"
        className="btn btn-light card-body goToBtn"
        style={{
          position: "absolute",
          left: "0",
          marginTop: "-18px",
          justifySelf: "flex-start",
          // marginLeft: "-10px",
          width: "100%",
          fontWeight: "bold",
          padding: "0px",
        }}
        onClick={() =>
          ReactDOM.render(
            <InfoPage item={item} />,
            document.getElementById("root")
          )
        }
      >
        Go To Page
      </button>
      {/* </Link> */}v
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
        <b>{item.name}</b>
      </h1>
      {trailer ? (<iframe
        title="youtubeTrailer"
        height="250px"
        width="350px"
        src={trailer + "?autoplay=1&mute=1&enablejsapi=1"}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen="true"
        style={{
          height: trailer === props.netflixIcon ? "100px" : "250px",
          alignSelf: "flex-start",
          marginLeft: "-20px",
          objectFit: "contain",
          transition: "all 0.45s ease",
        }}
      ></iframe>) : (<div
        style={{
          height: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundImage: "url(" + flickhub + ")",
          backgroundSize: "contain",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h3 style={{ display: "block", blockSize: "30px" }}>
          {replaceTrailer}
        </h3>
      </div>)}

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
            <strong>{item.plot}</strong>
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
        <a
          href={item.urlname.NETFLIX ? item.urlname.NETFLIX : null}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="thumbnail"
            src={item.urlname.NETFLIX ? icons.netflixIcon : null}
            height="50px"
            alt=""
          />
        </a>
        <a
          href={item.urlname.PRIME ? item.urlname.PRIME : null}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="thumbnail"
            src={item.urlname.PRIME ? icons.primeVideoIcon : null}
            height="50px"
            alt=""
          />
        </a>
        <a
          href={item.urlname.HOTSTAR ? item.urlname.HOTSTAR : null}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="thumbnail"
            src={item.urlname.HOTSTAR ? icons.hotstarIcon : null}
            height="50px"
            alt=""
          />
        </a>

        <a
          href={item.urlname.SONYLIV ? item.urlname.SONYLIV : null}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="thumbnail"
            src={item.urlname.SONYLIV ? icons.sonyLivIcon : null}
            height="50px"
            alt=""
          />
        </a>

        <a
          href={item.urlname.ZEE5 ? item.urlname.ZEE5 : null}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="thumbnail"
            src={item.urlname.ZEE5 ? icons.zee5Icon : null}
            height="50px"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};


export default Watch;
