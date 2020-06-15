import React from "react";

import { titles } from "./utils/response";
import Hover from "./Hover";
import flickhub from "./assets/images/38.jpg";

const Cards = () => {
  const [just, setJust] = React.useState(false);
  const justifyRef = React.useRef();

  const [respObj, setRespObj] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:8080/title", {
      header: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => setRespObj(response))
      .catch((error) => console.log("error", error));
  }, []);
  

  return respObj ? (
    <div
      ref={justifyRef}
      className="container row"
      style={{
        display: "flex",
        justifyContent: "center",
        minWidth: "1445px",
        zIndex: "1",

        transition: "all 1s linear",
        height: "100vh",
      }}
    >
      {respObj.map((item) => {
        return (
          <div key={item.name} style={{ marginTop: "50px" }}>
            <Hover item={item.response} />
          </div>
        );
      })}
    </div>
  ) : (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
      }}
    >
      <p style={{ color: "white", fontSize: "30px" }}>Loading . . .</p>
    </div>
  );
};

export default Cards;
