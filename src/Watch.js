import React from "react";
import ReactDOM from "react-dom"

import "./App.css";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { icons } from "./constants/icons";
import flickhub from "./assets/images/logo3.jpg";
import InfoPage from "./InfoPage";
import Shimmer from "./Shimmer";


const Watch = (props) => {
  const {item} = props;
  const [trailer, setTrailer] = React.useState();
  const [respObj, setRespObj] = React.useState(null)

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
        backgroundColor: "rgba(20,20,20)",
        overflow: "hidden",
      }}
    >
      {/* <Router> */}
      {/* <Link to={`/title/${item.name}`}> */}
      <button
        type="button"
        className="btn btn-light card-body goToBtn"
        style={{
          position: "absolute",
          left: "20px",
          marginTop: "-15px",
          justifySelf: "flex-start",
          // marginLeft: "-10px",
          // width: "100%",
          fontWeight: "bold",
          padding: "0px 10px",
        }}
        onClick={() => window.open(`/title/${item.name}`)}

        // onClick={() => {

        //   fetch(`http://http://3.7.155.169/title/${item.id_mov}`, {
        //     method: "POST",
        //     headers: {
        //       "Access-Control-Allow-Origin": "*",
        //       "Content-Type": "application/json",
        //     },
        //     // body: JSON.stringify({ mv_name: props.match.params.searchString }),
        //   })
        //     .then((response) => response.json())
        //     // .then((response) => setRespObj(response))
        //     .then((response) => setRespObj(response))
        //     .catch((error) => console.log("error", error));
        // }}
      >
        Go To Page
      </button>
      {/* </Link> */}

      <h2
        id="heading1"
        className="card-title"
        style={{
          width: "100%",
          flexWrap: "none",
          writingMode: "horizontal-tb",
          borderRadius: "5px",
          marginTop: "10px",
          display: "inline-block",
          overflowX: "auto",
          whiteSpace: "nowrap",
          padding: "5px 10px",
          overflowY: "hidden",
          color: "white",
        }}
      >
        <b>{item.name}</b>
      </h2>
      {trailer ? (
        <iframe
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
        ></iframe>
      ) : (
        <div
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
          <h3
            style={{
              display: "block",
              blockSize: "30px",
              alignSelf: "flex-end",
            }}
          >
            {replaceTrailer}
          </h3>
        </div>
      )}

      <div
        id="newIdImg1"
        style={{
          display: "flex",
          borderRadius: "3px",
          width: "90%",
          padding: "10px",
          overflow: "scroll",
          backgroundColor: "rgba(60,60,60,0.8)",
          scrollbarWidth: "none",
          bottom: "10px",
          position: "absolute",
        }}
      >
        <a
          href={item.urlname.NETFLIX ? item.urlname.NETFLIX : null}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: item.urlname.NETFLIX ? "block" : "none",
            margin: "3px",
          }}
        >
          <img
            id="thumbnail"
            src={item.urlname.NETFLIX ? icons.netflixIcon : null}
            height="40px"
            width="40px"
            alt=""
          />
        </a>
        <a
          href={item.urlname.PRIME ? item.urlname.PRIME : null}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: item.urlname.PRIME ? "block" : "none",
            margin: "3px",
          }}
        >
          <img
            id="thumbnail"
            src={item.urlname.PRIME ? icons.primeVideoIcon : null}
            height="40px"
            width="40px"
            alt=""
          />
        </a>
        <a
          href={item.urlname.HOTSTAR ? item.urlname.HOTSTAR : null}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: item.urlname.HOTSTAR ? "block" : "none",
            margin: "3px",
          }}
        >
          <img
            id="thumbnail"
            src={item.urlname.HOTSTAR ? icons.hotstarIcon : null}
            height="40px"
            width="40px"
            alt=""
          />
        </a>

        <a
          href={item.urlname.SONYLIV ? item.urlname.SONYLIV : null}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: item.urlname.SONYLIV ? "block" : "none",
            margin: "3px",
          }}
        >
          <img
            id="thumbnail"
            src={item.urlname.SONYLIV ? icons.sonyLivIcon : null}
            height="40px"
            width="40px"
            alt=""
          />
        </a>

        <a
          href={item.urlname.ZEE5 ? item.urlname.ZEE5 : null}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: item.urlname.ZEE5 ? "block" : "none",
            margin: "3px",
          }}
        >
          <img
            id="thumbnail"
            src={item.urlname.ZEE5 ? icons.zee5Icon : null}
            height="40px"
            width="40px"
            alt=""
          />
        </a>

        <a
          href={item.urlname.EROSNOW ? item.urlname.EROSNOW : null}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: item.urlname.EROSNOW ? "block" : "none",
            margin: "3px",
          }}
        >
          <img
            id="thumbnail"
            src={item.urlname.EROSNOW ? icons.erosNowIcon : null}
            height="40px"
            width="40px"
            alt=""
          />
        </a>

        <a
          href={item.urlname.VOOT ? item.urlname.VOOT : null}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: item.urlname.VOOT ? "block" : "none",
            margin: "3px",
          }}
        >
          <img
            id="thumbnail"
            src={item.urlname.VOOT ? icons.vootIcon : null}
            height="40px"
            width="40px"
            alt=""
          />
        </a>

        <a
          href={item.urlname.VIU ? item.urlname.VIU : null}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: item.urlname.VIU ? "block" : "none",
            margin: "3px",
          }}
        >
          <img
            id="thumbnail"
            src={item.urlname.VIU ? icons.viuIcon : null}
            height="40px"
            width="40px"
            alt=""
          />
        </a>

        <a
          href={item.urlname.ALTBALAJI ? item.urlname.ALTBALAJI : null}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: item.urlname.ALTBALAJI ? "block" : "none",
            margin: "3px",
          }}
        >
          <img
            id="thumbnail"
            src={item.urlname.ALTBALAJI ? icons.altBalajiIcon : null}
            height="40px"
            width="40px"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default Watch;
