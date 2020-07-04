import React from "react";
import ReactDOM from "react-dom";

import flickhub from "../assets/images/logo3.jpg";
import { Link } from "react-router-dom";
import { icons } from "../constants/icons";
import InfoPage from "../InfoPage";
import { useMediaQuery } from "react-responsive";

const MobileHover = (props) => {
  const { item } = props;
  const [expandCard, setExpandCard] = React.useState(false);

  const closeBtnStyle = {
    right: useMediaQuery({ minWidth: 790 }) ? "5px" : "50px",
    top: useMediaQuery({ minWidth: 790 }) ? "175px" : "50px",
    position: "absolute",
    color: "white",
    fontSize: "20px",
  };

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
    })
      ? "300px"
      : "250px",
    width: useMediaQuery({
      minWidth: 790,
    })
      ? "200px"
      : "150px",
    backgroundColor: "rgba(40,40,40)",
    overflow: "hidden",
  };

  const mobileHoverCardStyle = {
    height: useMediaQuery({
      minWidth: 790,
    })
      ? "250px"
      : "200px",
    width: useMediaQuery({
      minWidth: 790,
    })
      ? "200px"
      : "150px",
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
          <img
            src={flickhub}
            // height="200" width="185"
            alt="no-poster"
            style={{
              height: mobile ? "250px" : "200px",
              width: mobile ? "200px" : "185px",
            }}
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
        <h1 style={{ fontSize: "14px", color: "white" }}>{item.name}</h1>
      </div>

      {/* Streaming services */}

      <div
        style={{
          bottom: "60px",
          left: "5px",
          position: "absolute",
          display: "flex",
          overflow: "hidden",
          justifyContent: "flex-start",
          flexWrap: "wrap-reverse",
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
            height="30px"
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
            height="30px"
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
            height="30px"
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
            height="30px"
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
            height="30px"
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
            height="30px"
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
            height="30px"
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
            height="30px"
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
            height="30px"
            alt=""
          />
        </a>
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
  top: "10px",
  left: "10px",
  position: "absolute",
  padding: "0px 10px",
  color: "orange",
};

export const titleCardStyle = {
  fontSize: "1.5em",
  color: "white",
  width: "100%",
  textAlign: "center",
  top: "50px",
  position: "abolute",
};

export const MobileWatch = (props) => {
  const { item } = props;

  const [trailer, setTrailer] = React.useState(null);

  // Expanded card
  const trailerNAStyle = {
    textAlign: "center",
    fontSize: "1em",
    color: "white",
    backgroundImage: "url(" + flickhub + ")",
    display: "flex",
    justifyContent: "center",
    height: useMediaQuery({
      minWidth: 790,
    })
      ? "35vh"
      : "28vh",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  };

  const plotCardStyle = {
    display: "flex",
    justifyContent: "center",
    alignSelf: "flex-end",
    overflow: "auto",
    height: useMediaQuery({ minWidth: 790 }) ? "" : "15vh",
    padding: "15px",
    background: "rgba(50,50,50,0.9)",
    borderRadius: "10px",
    scrollbarWidth: "none",
    textAlign: "center",
  };

  const mobile = useMediaQuery({ minWidth: 850 });

  return (
    <div
      className="card"
      style={{
        backgroundImage: "url(" + item.image + ")",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "60%",
        width: "80vw",
        transition: "all 0.5s ease",
        padding: "30px",
        overflowX: "hidden",
        backgroundColor: "rgba(1,1,1)",
        position: "fixed",
        zIndex: 1,
        display: "flex",
        // flexDirection: "column",
        overflowY: "auto",
        justifyContent: "flex-start",
        alignItems: "stretch",
      }}
    >
      <div>
        <button
          type="button"
          className="btn btn-link card-body goToBtn"
          style={goToPageStyle}
          onClick={() => window.open(`/title/${item.id_mov}`)}
        >
          <strong>Go To Page</strong>
        </button>
      </div>

      <div
        style={{
          width: "100%",
          flexWrap: "none",
          color: "white",
          writingMode: "horizontal-tb",
          borderRadius: "5px",
          marginTop: "10px",
          display: "inline-block",
          overflow: "auto",
          whiteSpace: "nowrap",
          padding: "10px 20px",
        }}
      >
        <h1 style={titleCardStyle}>{item.name}</h1>
      </div>

      {/* Trailer */}
      <div>
        {item.trailer !== "None" ? (
          <iframe
            title="youtubeTrailer"
            src={item.trailer + "?autoplay=1&mute=1&enablejsapi=1"}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
            style={{
              marginLeft: "-30px",
              height: "28vh",
              width: "80vw",
              justifySelf: "flex-start",
              // objectFit: "cover",
              transition: "all 0.45s ease",
            }}
          ></iframe>
        ) : (
          <div>
            <p style={trailerNAStyle}>Trailer coming soon</p>
          </div>
        )}
      </div>

      {/* Streaming services */}

      <div style={streamCardStyle}>
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

export default MobileHover;
