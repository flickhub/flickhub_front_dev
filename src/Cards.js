import React from "react";
import ReactDOM from "react-dom";
import CardInitial from "./CardInitial";
import Watch from "./Watch";
import { icons } from "./constants/icons";
import { theWitcher, mindHunter, titles } from "./utils/response";
import Hover from "./Hover";
import InfoPage from "./InfoPage";

const Cards = () => {
  return (
    <div
      className="container row"
      style={{
        display: "flex",
        justifyContent: "center",
        maxWidth: "1100px",
        zIndex: "1",
      }}
    >
      {titles().map((item, index) => {
        return (
          <div key={item} style={{ marginTop: "150px" }}>
            <Hover item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
