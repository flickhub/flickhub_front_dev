import React from "react";

import flickhub from "../assets/images/logo3.jpg";
import { icons } from "../constants/icons";
import { useMediaQuery } from "react-responsive";

const MobileTrailer = (props) => {
  const { item } = props;
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

  return (
    <div
      className="card"
      style={{
        backgroundImage: "url(" + item.image + ")",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        height: "60%",
        width: "100%",
        transition: "all 0.5s ease",
        padding: "30px",
        overflowX: "hidden",
        backgroundColor: "#141414",
        position: "fixed",
        zIndex: 1,
        display: "flex",
        // flexDirection: "column",
        overflowY: "auto",
        justifyContent: "flex-start",
        border: "none",
        // alignItems: "stretch",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "-30px 0px 30px 0px",
        }}
      >
        <div
          style={{
            flexWrap: "none",
            color: "white",
            writingMode: "horizontal-tb",
            borderRadius: "5px",
            display: "inline-block",
            overflow: "auto",
            whiteSpace: "nowrap",
            padding: "5px",
            width: "80%",
          }}
        >
          <h1 style={titleCardStyle}>{item.name}</h1>
        </div>

        {/* <div>/ */}
        <button
          type="button"
          className="btn btn-link card-body goToBtn"
          style={goToPageStyle}
          onClick={() => window.open(`/title/${item.id_mov}`)}
        >
          <strong>More</strong>
        </button>
        {/* </div> */}
      </div>

      {/* Trailer */}
      <div style={{ height: "35vh", width: "100%" }}>
        {item.trailer !== "None" ? (
          <iframe
            title="youtubeTrailer"
            src={item.trailer + "?autoplay=1&mute=1&enablejsapi=1"}
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen="true"
            style={{
              marginLeft: "-30px",
              height: "100%",
              width: "100%",
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

export default MobileTrailer;
