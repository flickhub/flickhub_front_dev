import React from "react";

import flickhub from "../assets/images/logo3.jpg";
import { icons } from "../constants/icons";
import { useMediaQuery } from "react-responsive";

const MobileHover = (props) => {
  const { item } = props;
  const [expandCard, setExpandCard] = React.useState(false);

  const closeBtnStyle = {
    right: useMediaQuery({ minWidth: 790 }) ? "5px" : "50px",
    top: useMediaQuery({ minWidth: 790 }) ? "175px" : "50px",
    display: "block",
    height: "60px",
    width: "60px",
    alignSelf: "flex-end",
    margin: "0px 0px 160px 0px",
    borderRadius: "50% 50%",
    backgroundColor: "black",
    border: "none",
    color: "orange",
    fontSize: "30px",
  };

  const mobileWatchBackground = {
    display: "flex",
    alignItems: "flex-start",
    marginTop: "50px",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: "none",
    height: "100vh",
    width: "100vw",
    padding: "20px 10px",
    top: "0",
    left: "0",
    position: "fixed",
    zIndex: 2,
    transition: "0.2s ease",
  };

  return (
    <div>
      {expandCard ? (
        <div style={mobileWatchBackground}>
          {/* <div> */}
          <button
            type="button"
            className="btn btn-link"
            style={closeBtnStyle}
            onClick={() => setExpandCard(false)}
          >
            X
          </button>
          {/* </div> */}
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

// const cardTitleStyle = {
//   display: "flex",
//   flexWrap: "wrap",
//   justifyContent: "center",
//   alignItems: "center",
//   textAlign: "center",
//   color: "white",
//   padding: "10px 5px",
//   width: "100%",
//   height: "50px",
//   border: "none",
// };

export const MobileCardInitial = (props) => {
  const { item } = props;

  // const mobileHoverDivStyle = {
  //   margin: useMediaQuery({
  //     minWidth: 700,
  //   })
  //     ? "10px 20px 10px 20px"
  //     : "5px 5px 0px 5px",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   height: useMediaQuery({
  //     minWidth: 790,
  //   })
  //     ? "300px"
  //     : "250px",
  //   width: useMediaQuery({
  //     minWidth: 790,
  //   })
  //     ? "200px"
  //     : "150px",
  //   backgroundColor: "transparent",
  //   overflow: "hidden",
  // };

  // const mobileHoverCardStyle = {
  //   height: useMediaQuery({
  //     minWidth: 790,
  //   })
  //     ? "250px"
  //     : "200px",
  //   width: useMediaQuery({
  //     minWidth: 790,
  //   })
  //     ? "200px"
  //     : "150px",
  //   backgroundColor: "transparent",
  // };

  // const mobile = useMediaQuery({
  //   minWidth: 790,
  // });

  return (
    // <div className="card" style={mobileHoverDivStyle}>
    <div
      classname="card"
      style={{
        //border: "1px solid black",
        //backgroundColor: "#333333",
        // borderRadius: "5px",
        overflow: "hidden",
        textOverflow: "ellipses",
        //margin: "0px 5px",
        //maxWidth: "180px",
        height: "180px",
        width: "100%",
        zIndex: "1",
        position: "relative",
      }}
    >
      {item.image ? (
        // <div style={mobileHoverCardStyle}>
        <div
          style={{
            zIndex: "0",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundColor: "black",
            //maxWidth: "180px",
            // opacity: "0.6",
            // padding: "0px 10px",
            // margin: "-20px",
          }}
        >
          <img
            alt="CARD_IMAGE"
            src={item.image}
            // height="100%"
            // width="100%"
            // style={{ marginLeft: "-2px" }}
            style={{
              opacity: "0.7",
              height: "128px",
              minWidth: "100%",
              minHeight: "128px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        </div>
      ) : (
        <div style={{ display: "inline-block", marginBottom: "-15px" }}>
          <img
            src={flickhub}
            // height="200" width="185"
            alt="no-poster"
            // style={{
            //   height: mobile ? "250px" : "200px",
            //   width: mobile ? "200px" : "185px",
            // }}
            style={{
              opacity: "0.7",
              height: "128px",
              minWidth: "100%",
              minHeight: "128px",
              width: "100%",
              objectFit: "cover",
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
      <h1
        // id="heading1"
        // className="card-title"
        style={{
          fontSize: "14px",
          color: "white",
          textAlign: "center",
          marginTop: "5px",
          //overflow: "hidden",
          // maxWidth: "280px",
          // display: "block",
          // blockSize: "50px",
          // textAlign: "center",
          // textOverflow: "hidden",
          // overflow: "hidden",
          // marginTop: "12px",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {item.name}
      </h1>

      {/* Streaming services */}

      <div
        style={{
          bottom: "53px",
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
            style={{ border: "1px solid white" }}
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
            style={{ border: "1px solid white" }}
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
            style={{ border: "1px solid white" }}
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
            style={{ border: "1px solid white" }}
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
            style={{ border: "1px solid white" }}
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
            style={{ border: "1px solid white" }}
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
            style={{ border: "1px solid white" }}
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
            style={{ border: "1px solid white" }}
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
            style={{ border: "1px solid white" }}
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
  backgroundColor: "rgba(0,0,0,0.7)",
  scrollbarWidth: "none",
  bottom: "0",
  left: "0",

  position: "absolute",
};

export const goToPageStyle = {
  color: "orange",
  fontSize: "16px",
  right: "10px",
  position: "absolute",
  // marginTop: "-5px"
};

export const titleCardStyle = {
  fontSize: "1.5em",
  color: "white",
  textAlign: "center",
  top: "10px",
  position: "abolute",
  // width: "80%",
};

export const MobileWatch = (props) => {
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

export default MobileHover;
