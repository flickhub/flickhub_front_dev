import React from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

const PageNotFound = () => {
  const mobile = useMediaQuery({ minWidth: 600 });

  return mobile ? (
    <div
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        margin: "100px 20px 20px 20px",
        color: "white",
        padding: "30px 50px",
        background: "rgba(50,50,50)",
      }}
    >
      <h3>
        Uh oh! Couldn't find what you were looking for.
        <br />
        Try searching with another keyword.
      </h3>
      <br />
      <div style={{ alignSelf: "flex-start" }}>
        <Link to="/">
          <button className="btn btn-primary">Go back to home</button>
        </Link>
      </div>
    </div>
  ) : (
    <div>
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          margin: "150px 50px",
          color: "white",
          padding: "30px 50px",
          background: "rgba(50,50,50)",
        }}
      >
        <h5>
          Uh oh! Couldn't find what you were looking for.
          <br />
          <br />
          Try searching with another keyword.
        </h5>
        <br />
        <div style={{ alignSelf: "flex-start" }}>
          <Link to="/">
            <button className="btn btn-primary">Go back to home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
