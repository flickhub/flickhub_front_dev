import React from "react";

import { titles } from "./utils/response";
import Hover from "./Hover";



const Cards = () => {
  const [just, setJust] = React.useState(false);
  const justifyRef = React.useRef();

  const [respObj, setRespObj] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:5000/submit", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mv_name: "iron man" }),
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
          <div key={item.data.name} style={{ marginTop: "50px" }}>
            <Hover item={item.data} />
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
