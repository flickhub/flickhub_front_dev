import React from "react";

import flickhub from "./assets/images/logo3.jpg";
import { icons } from "./constants/icons";

const CardInitial = (props) => {
  const AppRef = React.useRef();

  return (
    <div
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
      }}
      className="card-initial"
    >
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
        {props.poster ? (
          <img
            src={props.poster}
            alt="poster"
            style={{
              opacity: "0.7",
              height: "128px",
              minWidth: "100%",
              minHeight: "128px",
              width: "100%",
              objectFit: "cover",
            }}
          />
        ) : (
          <div style={{ display: "inline-block" }}>
            <img
              src={flickhub}
              alt="no-poster"
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
        )}
      </div>
      <div
        id="App"
        className="card cad"
        ref={AppRef}
        style={{
          zIndex: "0",
          maxWidth: "280px",
          width: "100%",
          border: "none",
          marginTop: "-100px",
          background: "transparent",
          overflowY: "hidden",
        }}
      >
        <div
          id="images1"
          className="card-body"
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignSelf: "flex-start",
            flexWrap: "wrap-reverse",
            width: "100%",
            padding: "10px 10px",
            left: 0,
            position: "absolute",
          }}
        >
          <a
            href={props.urlname.NETFLIX ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: props.urlname.NETFLIX ? "block" : "none",
              margin: "3px",
            }}
          >
            <img
              id="thumbnail"
              src={props.urlname.NETFLIX ? icons.netflixIcon : null}
              height="30px"
              alt=""
              style={{ border: "1px solid white" }}
            />
          </a>
          <a
            href={props.urlname.PRIME ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: props.urlname.PRIME ? "block" : "none",
              margin: "3px",
            }}
          >
            <img
              id="thumbnail"
              src={props.urlname.PRIME ? icons.primeVideoIcon : null}
              height="30px"
              alt=""
              style={{ border: "1px solid white" }}
            />
          </a>
          <a
            href={props.urlname.HOTSTAR ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: props.urlname.HOTSTAR ? "block" : "none",
              margin: "3px",
            }}
          >
            <img
              id="thumbnail"
              src={props.urlname.HOTSTAR ? icons.hotstarIcon : null}
              height="30px"
              alt=""
              style={{ border: "1px solid white" }}
            />
          </a>

          <a
            href={props.urlname.SONYLIV ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: props.urlname.SONYLIV ? "block" : "none",
              margin: "3px",
            }}
          >
            <img
              id="thumbnail"
              src={props.urlname.SONYLIV ? icons.sonyLivIcon : null}
              height="30px"
              alt=""
              style={{ border: "1px solid white" }}
            />
          </a>

          <a
            href={props.urlname.ZEE5 ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: props.urlname.ZEE5 ? "block" : "none",
              margin: "3px",
            }}
          >
            <img
              id="thumbnail"
              src={props.urlname.ZEE5 ? icons.zee5Icon : null}
              height="30px"
              alt=""
              style={{ border: "1px solid white" }}
            />
          </a>

          <a
            href={props.urlname.EROSNOW ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: props.urlname.EROSNOW ? "block" : "none",
              margin: "3px",
            }}
          >
            <img
              id="thumbnail"
              src={props.urlname.EROSNOW ? icons.erosNowIcon : null}
              height="30px"
              alt=""
              style={{ border: "1px solid white" }}
            />
          </a>

          <a
            href={props.urlname.VOOT ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: props.urlname.VOOT ? "block" : "none",
              margin: "3px",
            }}
          >
            <img
              id="thumbnail"
              src={props.urlname.VOOT ? icons.vootIcon : null}
              height="30px"
              alt=""
              style={{ border: "1px solid white" }}
            />
          </a>

          <a
            href={props.urlname.VIU ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: props.urlname.VIU ? "block" : "none",
              margin: "3px",
            }}
          >
            <img
              id="thumbnail"
              src={props.urlname.VIU ? icons.viuIcon : null}
              height="30px"
              alt=""
              style={{ border: "1px solid white" }}
            />
          </a>

          <a
            href={props.urlname.ALTBALAJI ? props.urlname : null}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: props.urlname.ALTBALAJI ? "block" : "none",
              margin: "3px",
            }}
          >
            <img
              id="thumbnail"
              src={props.urlname.ALTBALAJI ? icons.altBalajiIcon : null}
              height="30px"
              alt=""
              style={{ border: "1px solid white" }}
            />
          </a>
        </div>
      </div>

      <h1
        // id="heading1"
        // className="card-title"
        style={{
          fontSize: "16px",
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
        {props.title}
      </h1>
    </div>
  );
};

export default CardInitial;
