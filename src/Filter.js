import React from "react";
import ReactDOM from "react-dom";
import { titles, theWitcher } from "./utils/response";
import Hover from "./Cards";
import { icons } from "./constants/icons";

const Filter = (props) => {

  return (
    <div
      style={{
        backgroundColor: "rgba(255,134,20)",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        // width: "25%",
      }}
    >
      <a >
        <img id="thumbnail" src={props.netflixIcon} height="50px" />
    </a>
      <a>
        <img id="thumbnail" src={props.primeVideoIcon} height="50px" />
      </a>
      <a>
        <img id="thumbnail" src={props.hotstarIcon} height="50px" />
      </a>
    </div>
  );
};

export default Filter;
