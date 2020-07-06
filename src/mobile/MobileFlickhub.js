import React from "react";
import { Link, Route } from "react-router-dom";
import { SearchItem } from "../Flickhub";
import SearchScreen from "../Routers";
import Shimmer from "../Shimmer";
import filterStringInstance from "../utils/filter";
import MobileSpinner from "./MobileSpinner";
import MobileHover from "./MobileHover";

export const logoStlye = {
  color: "white",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "75px",
};

const MobileFlickhub = (props) => {
  const [search, setSearch] = React.useState("");
  const [respObj, setRespObj] = React.useState(null)
  const disableRef = React.useRef();

  React.useEffect(() => {
    search && filterStringInstance.setFilterString(search);
  }, [search]);

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
          Flick<span style={{ color: "orange" }}>Hub</span>
        </h1>
        <span style={{ fontSize: "18px", marginTop: "-10px" }}>
          Nobody searches it better
        </span>
      </div>

      <div
        style={{
          marginTop: "15px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <input
          type="text"
          autoFocus
          placeholder="Search"
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              window.location = `/search/${search}`;
            }
          }}
          onChange={(e) => {
            setSearch(e.target.value);
            e.target.value !== ""
              ? (disableRef.current.disabled = false)
              : (disableRef.current.disabled = true);
          }}
          onFocus={(e) => {
            e.target.style.outline = "none";
            e.target.style.border = "none";
          }}
          style={{
            width: "80vw",
            margin: "10px",
            padding: "5px 10px",
            border: "none",
            borderRadius: "5px",
          }}
        />

        <Link to={`/search/${search}`}>
          <button
            ref={disableRef}
            disabled
            type="button"
            className="btn btn-light"
            style={{
              backgroundColor: "orange",
              border: "none",
              width: "30vw",
              color: "white",
            }}
          >
            <b>Search</b>
          </button>
        </Link>
      </div>

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
          Want to watch that popular flick? Not sure, which online streaming
          platform it is available on? Worry no more! FlickHub has got your
          back!
          <br />
          Tap tap and away!
        </p>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          flexWrap: "wrap",
          marginTop: "150px",
        }}
      >
        {respObj ? (
          respObj.data.map((item, index) => {
            return <MobileHover item={item} key={`search-result-${item.name}`} />;
          })
        ) : (
          <div>
            <Shimmer />
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileFlickhub;
