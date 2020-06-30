import React from "react";
import ReactDOM from "react-dom";

import flickhub from "../assets/images/logo3.jpg";
import { Link } from "react-router-dom";
import { icons } from "../constants/icons";
import InfoPage from "../InfoPage";
import { useMediaQuery } from "react-responsive";

// export const mobileWatchBackground = {
//          display: "flex",
//          alignItems: "center",
//          justifyContent: "center",
//          backgroundColor: "rgba(1,1,1,0.6)",
//          height: "100vh",
//          width: "100vw",
//          padding: "20px 10px",
//          top: "0",
//          left: "0",
//          position: "fixed",
//          zIndex: 2,
//          transition: "all 1s ease",
//        };

export const closeBtnStyle = {
  right: "5px",
  top: "50px",
  position: "absolute",
  color: "white",
  fontSize: "20px",
};

const MobileHover = (props) => {
  const { item } = props;
  const [expandCard, setExpandCard] = React.useState(false);

  const mobileWatchBackground = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(1,1,1,0.6)",
    height: "100vh",
    width: "100vw",
    padding: "20px 10px",
    top: "0",
    left: "0",
    position: "fixed",
    zIndex: 2,
    transition: "all 1s ease",
    // transform: "translate(0px,200px)",
  };

  const expandRef = React.useRef();

  return (
    <div>
      {expandCard ? (
        <div style={mobileWatchBackground}>
          <button
            type="button"
            className="btn btn-link"
            style={closeBtnStyle}
            onClick={() => setExpandCard(false)}
          >
            X
          </button>
          <MobileWatch item={item} expandCard={expandCard} />
        </div>
      ) : (
        <div onClick={() => setExpandCard(true)}>
          <MobileCardInitial item={item} />
        </div>
      )}
    </div>
  );
};



const cardTitleStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  color: "white",
  padding: "10px 5px",
  width: "100%",
  height: "50px",
  borderRadius: "0px 0px 3px 3px",
};



export const MobileCardInitial = (props) => {
  const { item } = props;
  
  const mobileHoverDivStyle = {
    margin: useMediaQuery({
      minWidth: 790,
    })
      ? "10px 20px 10px 20px" 
      : "5px 5px 0px 5px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: useMediaQuery({
      minWidth: 790,
    }) ? "300px" : "250px",
    width: useMediaQuery({
      minWidth: 790,
    }) ? "200px" : "150px",
    backgroundColor: "rgba(40,40,40)",
    overflow: "hidden",
  };
  
  const mobileHoverCardStyle = {
  height: useMediaQuery({
      minWidth: 790,
    }) ? "250px" : "200px",
  width: useMediaQuery({
      minWidth: 790,
    }) ? "200px" : "150px",
};

const mobile = useMediaQuery({
  minWidth: 790,
});

  return (
    <div className="card" style={mobileHoverDivStyle}>
      {item.image ? (
        <div style={mobileHoverCardStyle}>
          <img
            src={item.image}
            height="100%"
            width="100%"
            style={{ marginLeft: "-2px" }}
          />
        </div>
      ) : (
        <div style={{ display: "inline-block", marginBottom: "-15px" }}>
          <img src={flickhub} 
          // height="200" width="185" 
          alt="no-poster"
          style={{height: mobile ?"250px" :"200px" , width: mobile ? "200px" : "185px"}}
            />
          <p
            style={{
              color: "white",
              textAlign: "center",
              marginTop: "-25px",
            }}
          >
            Image not available
          </p>
        </div>
      )}
      <div style={cardTitleStyle}>
        <h1 style={{ fontSize: "14px" }}>{item.name}</h1>
      </div>
    </div>
  );
};

export const streamCardStyle = {
  display: "flex",
  borderRadius: "3px",
  width: "100%",
  padding: "10px",
  overflow: "scroll",
  backgroundColor: "rgba(60,60,60,0.8)",
  scrollbarWidth: "none",
  bottom: "0",
  left: "0",

  position: "absolute",
};

export const goToPageStyle = {
  top: "0",
  left: "0",
  position: "absolute",
  width: "100%",
};

export const titleCardStyle = {
  fontSize: "1.5em",
  color: "black",
  width: "100%",
  textAlign: "center",
};

export const MobileWatch = (props) => {
  const { item } = props;

  const [trailer, setTrailer] = React.useState();

  // Expanded card
   const trailerNAStyle = {
    textAlign: "center",
    fontSize: "1em",
    color: "white",
    backgroundImage: "url(" + flickhub + ")",
    display: "block",
    marginTop: useMediaQuery({
      minWidth: 790,
    }) ?  "150px" : "50px",
    height:  useMediaQuery({
      minWidth: 790,
    }) ?   "35vh" : "30vh",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  const plotCardStyle = {
    display: "flex",
    justifyContent: "center",
    height: "100px",
    width: useMediaQuery({
      minWidth: 790,
    }) ?   "90%" : "83%",
    overflow: "auto",
    padding: "15px",
    background: "rgba(50,50,50,0.9)",
    borderRadius: "10px",
    scrollbarWidth: "none",
    textAlign: "center",
    bottom: "85px",
    position: "absolute",
  };

  return (
    <div
      className="card"
      style={{
        backgroundImage: "url(" + item.image + ")",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "80vh",
        width: "80vw",
        transition: "all 0.5s ease",
        padding: "30px",
        overflow: "hidden",
        backgroundColor: "rgba(1,1,1)",
        position: "fixed",
        zIndex: 1,
      }}
    >
      <div>
        {/* Go To Page button */}
        {/* <Link to={`/title/${item.name}`}> */}
        <button
          type="button"
          className="btn btn-light card-body goToBtn"
          style={goToPageStyle}
          onClick={() =>
            ReactDOM.render(
              <InfoPage item={item} />,
              document.getElementById("root")
            )
          }
        >
          Go To Page
        </button>
        {/* </Link> */}
      </div>

      {/* Title */}
      <div
        style={{
          width: "100%",
          flexWrap: "none",
          backgroundColor: "rgba(255,134,20,0.9)",
          writingMode: "horizontal-tb",
          borderRadius: "5px",
          marginTop: "20px",
          display: "inline-block",
          overflow: "auto",
          whiteSpace: "nowrap",
          padding: "10px 20px",
        }}
      >
        <h1 style={titleCardStyle}>{item.name}</h1>
      </div>

      {/* Trailer */}
      <div style={{ marginTop: "20px" }}>
        {trailer ? (
          <iframe
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
          ></iframe>
        ) : (
          <div>
            <p style={trailerNAStyle}>Trailer coming soon</p>
          </div>
        )}
      </div>

      {/* Title plot */}
      <div>
        <div style={plotCardStyle}>
          <p style={{ color: "white" }}>
            <strong>{item.plot}</strong>
          </p>
        </div>
      </div>

      {/* Streaming services */}

      <div style={streamCardStyle}>
        <a
          href={item.urlname.includes("netflix") ? item.urlname : null}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="thumbnail"
            src={item.urlname.includes("netflix") ? icons.netflixIcon : null}
            height="50px"
            alt=""
          />
        </a>
        <a
          href={item.urlname.includes("primevideo") ? item.urlname : null}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="thumbnail"
            src={
              item.urlname.includes("primevideo") ? icons.primeVideoIcon : null
            }
            height="50px"
            alt=""
          />
        </a>
        <a
          href={item.urlname.includes("hotstar") ? item.urlname : null}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            id="thumbnail"
            src={item.urlname.includes("hotstar") ? icons.hotstarIcon : null}
            height="50px"
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default MobileHover;
