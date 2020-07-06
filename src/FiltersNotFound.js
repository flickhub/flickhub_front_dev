import React from "react"
import { useMediaQuery } from "react-responsive"
import {Link} from "react-router-dom"

const FiltersNotFound = () => {

    const mobile = useMediaQuery({minWidth: 600})
    return mobile ? (
      <div
        className="card"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "center",
          marginTop: "100px",
          color: "white",
          padding: "30px 50px",
          background: "rgba(50,50,50)",
        }}
      >
        <h3>
          No results found.
          <br />
          Try searching with other filters.
        </h3>
        <br />
        <div style={{ alignSelf: "flex-start" }}>
          <Link to="/filter">
            <button className="btn btn-primary">Go back</button>
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
            No results found.
            <br />
            <br />
            Try searching with other filters.
          </h5>
          <br />
          <div style={{ alignSelf: "flex-start" }}>
            <Link to="/filter">
              <button className="btn btn-primary">Go back</button>
            </Link>
          </div>
        </div>
      </div>
    );
}

export default FiltersNotFound