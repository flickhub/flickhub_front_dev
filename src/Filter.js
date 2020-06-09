import React from "react";
import { titles } from "./utils/response";
import Hover from "./Hover";

const Filter = (props) => {
  const [filter, setFilter] = React.useState([]);
  const renderRef = React.useRef();

  const filterRef = React.useRef();

  const filterNetflix = () => {
    setFilter(
      titles()
        .filter((item) => {
          if (item.ott.netflix != null) {
            return item;
          }
        })
        .map((item) => {
          return titles().map((name) => {
            if (JSON.stringify(name) == JSON.stringify(item)) {
              return <Hover item={name} />;
            }
          });
        })
    );
  };

  const filterPrimeVideo = () => {
    setFilter(
      titles()
        .filter((item) => {
          if (item.ott.primeVideo != null) {
            return item;
          }
        })
        .map((item) => {
          return titles().map((name) => {
            if (JSON.stringify(name) == JSON.stringify(item)) {
              return <Hover item={name} />;
            }
          });
        })
    );
  };

  const filterHotstar = () => {
    setFilter(
      titles()
        .filter((item) => {
          if (item.ott.hotstar != null) {
            return item;
          }
        })
        .map((item) => {
          return titles().map((name) => {
            if (JSON.stringify(name) == JSON.stringify(item)) {
              return <Hover item={name} />;
            }
          });
        })
    );
  };

  return (
    <div style={{ transition: "all 1s ease" }}>
      <div
        style={{
          backgroundColor: "rgba(255,134,20)",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <a
          onClick={() => {
            filterNetflix();

            filterRef.current.style.padding = "50px 80px";
          }}
        >
          <img id="thumbnail" src={props.netflixIcon} height="50px" />
        </a>
        <a
          onClick={() => {
            filterPrimeVideo();

            filterRef.current.style.padding = "50px 80px";
          }}
        >
          <img id="thumbnail" src={props.primeVideoIcon} height="50px" />
        </a>
        <a
          onClick={() => {
            filterHotstar();
            filterRef.current.style.padding = "50px 80px";
          }}
        >
          <img id="thumbnail" src={props.hotstarIcon} height="50px" />
        </a>
      </div>
      <div
        ref={filterRef}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          // background: "white",
          // padding: "0px",
          transition: "all 0.5s ease",
        }}
      >
        <button
          type="button"
          className="btn btn-link"
          style={{
            alignSelf: "flex-start",
          }}
          onClick={() => {
            setFilter(null);
          }}
        >
          X
        </button>
        {filter}
      </div>
    </div>
  );
};

export default Filter;
