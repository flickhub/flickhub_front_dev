import React from "react";

import { titles } from "./utils/response";
import Hover from "./Hover";

const Cards = () => {
  const [just, setJust] = React.useState(false);
  const justifyRef = React.useRef();

  

  return (
    <div
      ref={justifyRef}
      className="container row"
      style={{
        display: "flex",
        justifyContent: "center",
        minWidth: "1445px",
        zIndex: "1",
        margin: "-45px"
      }}
    > 
      {titles().map((item, index) => {
        return (
          <div
            key={item}
            style={{ marginTop: "150px" }}
          >
            <Hover item={item} />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
