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
    textAlign: "center",
    width: "90vw",
    color: "orange",
    background: "transparent",
    border: "none",
    fontSize: "30px",
  };

  const mobileWatchBackground = {
    // display: "flex",
    // alignItems: "flex-start",
    // marginTop: "50px",
    // justifyContent: "center",
    // backgroundColor: "transparent",
    // border: "none",
    // height: "100vh",
    // width: "100vw",
    // padding: "20px 10px",
    // top: "0",
    // left: "0",
    // position: "fixed",
    // zIndex: 2,
    // transition: "0.2s ease",
    backgroundColor: "black",
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%,-50%)",
    zIndex: "999",
    height: "65vh",
    width: "90vw",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  return (
    <div>
      {expandCard ? (
        <div style={mobileWatchBackground}>
          {/* <div> */}
          <MobileWatch item={item} expandCard={expandCard} />
          <button
            // type="button"
            // className="btn btn-link"
            style={closeBtnStyle}
            onClick={() => setExpandCard(false)}
          >
            X
          </button>
          {/* </div> */}
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
  // display: "flex",
  // borderRadius: "3px",
  // width: "100%",
  // padding: "10px",
  // overflow: "scroll",
  // backgroundColor: "rgba(0,0,0,0.7)",
  // scrollbarWidth: "none",
  // bottom: "0",
  // left: "0",
  // position: "absolute",
  display: "flex",
  padding: "15px",
  alignItems: "center",
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
    <>
      <div
        // style={{
        //   display: "flex",
        //   alignItems: "center",
        //   margin: "-30px 0px 30px 0px",
        //   width: "100%",
        //   height: "100%",
        // }}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "15px",
          color: "white",
        }}
      >
        <h5
          style={{
            marginBottom: "0 !important",
            padding: "0 !important",
            overflow: "hidden",
            textOverflow: "ellipses",
          }}
        >
          {item.name}
        </h5>
        {/* <div>/ */}
        <a
          // style={goToPageStyle}
          href="https://www.flickhub.in/"
          style={{ color: "orange" }}
        >
          More
        </a>
        {/* </div> */}
      </div>

      {/* Trailer */}
      {/* <div style={{ height: "35vh", width: "100%" }}> */}
      {item.trailer !== "None" ? (
        <iframe
          title="youtubeTrailer"
          src={item.trailer + "?autoplay=1&mute=1&enablejsapi=1"}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"
          style={{
            //marginLeft: "-30px",
            // height: "300px",
            // width: "100vw",
            // //justifySelf: "flex-start",
            // objectFit: "cover",
            // transition: "all 0.45s ease",
            width: "100%",
            height: "300px",
          }}
        ></iframe>
      ) : (
        <div>
          <p style={trailerNAStyle}>Trailer coming soon</p>
        </div>
      )}

      {/* Streaming services */}

      <div style={streamCardStyle}>
        {item.urlname.NETFLIX ? (
          <a
            style={{ paddingRight: "4px" }}
            href={item.urlname.NETFLIX}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "35px",
                height: "35px",
                border: "1px solid white",
              }}
              alt="NETFLIX_ICON"
              src={icons.netflixIcon}
            />
          </a>
        ) : null}
        {item.urlname.PRIME ? (
          <a
            style={{ paddingRight: "4px" }}
            href={item.urlname.PRIME}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "35px",
                height: "35px",
                border: "1px solid white",
              }}
              src={icons.primeVideoIcon}
              alt="PRIMEVIDEO_ICON"
            />
          </a>
        ) : null}
        {item.urlname.HOTSTAR ? (
          <a
            style={{ paddingRight: "4px" }}
            href={item.urlname.HOTSTAR}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "35px",
                height: "35px",
                border: "1px solid white",
              }}
              src={icons.hotstarIcon}
              alt="HOTSTAR_ICON"
            />
          </a>
        ) : null}

        {item.urlname.SONYLIV ? (
          <a
            style={{ paddingRight: "4px" }}
            href={item.urlname.SONYLIV}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "35px",
                height: "35px",
                border: "1px solid white",
              }}
              src={icons.sonyLivIcon}
              alt="SONYLIV_ICON"
            />
          </a>
        ) : null}

        {item.urlname.ZEE5 ? (
          <a
            style={{ paddingRight: "4px" }}
            href={item.urlname.ZEE5}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "35px",
                height: "35px",
                border: "1px solid white",
              }}
              src={icons.zee5Icon}
              alt="ZEE5_ICON"
            />
          </a>
        ) : null}

        {item.urlname.EROSNOW ? (
          <a
            style={{ paddingRight: "4px" }}
            href={item.urlname.EROSNOW}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "35px",
                height: "35px",
                border: "1px solid white",
              }}
              src={icons.erosNowIcon}
              alt="EROSNOW_ICON"
            />
          </a>
        ) : null}

        {item.urlname.VOOT ? (
          <a
            style={{ paddingRight: "4px" }}
            href={item.urlname.VOOT}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "35px",
                height: "35px",
                border: "1px solid white",
              }}
              src={icons.vootIcon}
              alt="VOOT_ICON"
            />
          </a>
        ) : null}

        {item.urlname.VIU ? (
          <a
            style={{ paddingRight: "4px" }}
            href={item.urlname.VIU}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "35px",
                height: "35px",
                border: "1px solid white",
              }}
              src={icons.viuIcon}
              alt="VIU_ICON"
            />
          </a>
        ) : null}

        {item.urlname.ALTBALAJI ? (
          <a
            style={{ paddingRight: "4px" }}
            href={item.urlname.ALTBALAJI}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              style={{
                width: "35px",
                height: "35px",
                border: "1px solid white",
              }}
              src={icons.altBalajiIcon}
              alt="ALTBALAJI_ICON"
            />
          </a>
        ) : null}
      </div>
    </>
  );
};

export default MobileHover;
