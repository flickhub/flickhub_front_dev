import React from "react";

import { titles } from "./utils/response";
import Hover from "./Hover";
import flickhub from "./assets/images/38.jpg";

const Cards = () => {
  const [just, setJust] = React.useState(false);
  // const [respObj, setRespObj] = React.useState(null);
  const justifyRef = React.useRef();

    const [respObj, setRespObj] = React.useState(null);
    React.useEffect(() => {
      fetch("http://085b41a4ac71.ngrok.io/submit/1920", {
        header: {
          "Access-Control-Allow-Origin": "*",
        },
      })
        .then((response) => {return response.json()})
        .then((response) => setRespObj(response.data))
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
        // margin: "-45px",
        transition: "all 1s linear",
        height: "100vh",
      }}
    >
      {respObj.map((item) => {
        return (
          <div key={item.name} style={{ marginTop: "150px" }}>
            <Hover item={item} />
          </div>
        );
      })}
    </div>
  ) : (
    <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
      <p style={{color: "white", fontSize: "30px"}}>Loading . . .</p>
    </div>
    
  );

}

export default Cards;
