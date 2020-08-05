import React from "react";
import Shimmer from "../Shimmer";
import MobileHover from "./MobileHover";
import Grid from "@material-ui/core/Grid";
import BlackFade from "./../components/BlackFade/BlackFade";
import SearchBar from "../components/SearchBar/SearchBar";

export const logoStlye = {
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "75px",
};

const MobileFlickhub = (props) => {
  const [respObj, setRespObj] = React.useState(null);

  React.useEffect(() => {
    fetch("http://flickhub.in/random", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      mode: "cors",
    })
      .then((response) => response.json())
      // .then((response) => console.log("Random ", response))
      .then((response) => setRespObj(response))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <div style={logoStlye}>
      <div style={logoStlye}>
        <h1 style={{ fontSize: "75px" }}>
          <strong>
            Flick<span style={{ color: "orange" }}>Hub</span>
          </strong>
        </h1>
        <span style={{ fontSize: "18px", marginTop: "-10px" }}>
          Nobody searches it better
        </span>
      </div>
      <SearchBar width="90vw" marginTop="40px" mobile={true} />

      <div style={{ display: "flex", justifyContent: "center" }}>
        <p
          style={{
            fontSize: "17px",
            color: "white",
            marginTop: "20px",
            wordWrap: "break-word",
            textAlign: "center",
            fontStyle: "italic",
            width: "70%",
          }}
        >
          Looking for something to watch?
          <br />
          Type in the name and witness the magic unfold!!
        </p>
      </div>
      <BlackFade />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#141414",
          width: "100vw",
          padding: "30px 15px 150px 15px",
          marginTop: "0px",
        }}
      >
        <Grid container spacing={1}>
          {respObj ? (
            respObj.data.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  md={3}
                  sm={3}
                  xs={6}
                  style={{ height: "180px" }}
                >
                  <MobileHover item={item} key={`search-result-${item.name}`} />
                </Grid>
              );
            })
          ) : (
            <Shimmer />
          )}
        </Grid>
      </div>
    </div>
  );
};

export default MobileFlickhub;
