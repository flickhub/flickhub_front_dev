import React from "react";
import { titles } from "./utils/response";
import Hover from "./Hover";
import Cards from "./Cards";
import FilteredResults from "./FilteredResults";
import { responseObj } from "./utils/network";

const initialItemsState = {
  netflix: null,
  primeVideo: null,
  hotstar: null,
};

const Filter = (props) => {
  const [year, setYear] = React.useState();
  const [rate, setRate] = React.useState();

  const [options, setOptions] = React.useState(false);

  const [selected, setSelected] = React.useState(false);
  const [select, setSelect] = React.useState(false)
  const [filter, setFilter] = React.useState(<Cards />);
  const [net, setNet] = React.useState();
  const [prim, setPrim] = React.useState();
  const [hot, setHot] = React.useState();
  const [respObj, setRespObj] = React.useState(null)
  const [items, setItems] = React.useState(initialItemsState);
  const [state, setState] = React.useState({netflix: null, primeVideo: null, hotstar: null})

  const itemsSetter = (key, value) => {
    setItems({ ...initialItemsState, [key]: value });
  };

  React.useEffect(() => {
    console.log("items", items);
  }, [items]);

  const clickStyle = (e) => {
    selected
      ? (e.target.style.opacity = "1")
      : (e.target.style.opacity = "0.6");
  };

  const filterYear = () => {
    // setFilter(
    return respObj
      .filter((item) => {
        if (item.response.year.includes(year)) {
          return item;
        }
      })
      .map((item) => {
        return respObj.map((names) => {
          if (names.response == item.response) {
            return <Hover item={names.response} />;
          }
        });
      });
  };

  const filterRate = () => {
    // setFilter(
    return respObj
      .filter((item) => {
        if (item.response.rate.includes(rate)) {
          return item;
        }
      })
      .map((item) => {
        return respObj.map((names) => {
          if (names.response == item.response) {
            return <Hover item={names.response} />;
          }
        });
      });
  };

  const filterNetflix = () => {
    // setFilter(
    // const array=[]
    return respObj
      .filter((item) => {
        if (item.response.ott.netflix != null) {
          // array.push(item)
          // console.log("Array", array)
          return item;
        }
      })
      .map((item) => {
        return respObj.map((name) => {
          if (JSON.stringify(name.response) == JSON.stringify(item.response)) {
            return <Hover item={name.response} />;
          }
        });
      });
    // return array
  };

  const filterPrimeVideo = () => {
    // setFilter(
    return respObj
      .filter((item) => {
        if (item.response.ott.primeVideo != null) {
          return item;
        }
      })
      .map((item) => {
        return respObj.map((name) => {
          if (JSON.stringify(name.response) == JSON.stringify(item.response)) {
            return <Hover item={name.response} />;
          }
        });
      });
  };

  const filterHotstar = () => {
    // setFilter(
    return respObj
      .filter((item) => {
        if (item.response.ott.hotstar != null) {
          return item;
        }
      })
      .map((item) => {
        return respObj.map((name) => {
          if (JSON.stringify(name.response) == JSON.stringify(item.response)) {
            return <Hover item={name.response} />;
          }
        });
      });
  };

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
      style={{
        transition: "all 1s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255,134,20)",
          padding: "10px",
          display: "flex",
          width: "100%",
          justifyContent: "center",
          marginTop: "75px",
          // position: "fixed"
        }}
      >
        <a
          onClick={(e) => {
            {
              selected ? setFilter(filterNetflix()) : setFilter(<Cards />);
            }
            {
              selected ? setNet(filterNetflix()) : setNet(null);
            }
            setSelected(!selected);
            // itemsSetter(filterNetflix().title, filterNetflix());
          }}
        >
          <img
            id="thumbnail"
            src={props.netflixIcon}
            height="50px"
            onClick={(e) => {
              {
                clickStyle(e);
              }
            }}
          />
        </a>
        <a
          onClick={(e) => {
            {
              selected ? setFilter(filterPrimeVideo()) : setFilter(<Cards />);
            }
            {
              selected ? setPrim(filterPrimeVideo()) : setPrim(null);
            }
            setSelected(!selected);
            // itemsSetter("primeVideo", filter);
          }}
        >
          <img
            onClick={(e) => {
              {
                clickStyle(e);
              }
            }}
            id="thumbnail"
            src={props.primeVideoIcon}
            height="50px"
          />
        </a>
        <a
          onClick={(e) => {
            {
              selected ? setFilter(filterHotstar()) : setFilter(<Cards />);
            }
            {
              selected ? setHot(filterHotstar()) : setHot(null);
            }

            setSelected(!selected);
            // itemsSetter("hotstar", filter);
          }}
        >
          <img
            onClick={(e) => {
              {
                clickStyle(e);
              }
            }}
            id="thumbnail"
            src={props.hotstarIcon}
            height="50px"
          />
        </a>
        <button
          className="btn btn-light"
          onClick={() => {
            setOptions(!options);
          }}
        >
          Year
        </button>
      </div>
      <div style={{ display: "flex" }}>
        {options
          ? respObj.map((item) => {
              return (
                <button
                  className="btn btn-danger"
                  style={{ margin: "10px" }}
                  onClick={(e) => {
                    setYear(item.response.year);
                    {
                      clickStyle(e);
                      selected ? setFilter(filterYear()) : setFilter(<Cards />);
                    }
                    setSelected(!selected);
                  }}
                >
                  {item.response.year}
                </button>
              );
            })
          : null}
      </div>
      <button
        className="btn btn-light"
        onClick={() => {
          setSelect(!select);
        }}
      >
        Rating
      </button>
      <div style={{ display: "flex" }}>
        {
         select ? respObj.map((item) => {
              return (
                <button
                  className="btn btn-danger"
                  style={{ margin: "10px" }}
                  onClick={(e) => {
                    setRate(item.response.rate);
                    {
                      clickStyle(e);
                      selected ? setFilter(filterRate()) : setFilter(<Cards />);
                    }
                    setSelected(!selected);
                  }}
                >
                  {item.response.rate}
                </button>
              );
            })
          : null}
      </div>
      <button
        type="button"
        className="btn btn-link"
        style={{
          alignSelf: "flex-start",
        }}
        onClick={() => {
          setFilter(<Cards />);
        }}
      >
        Clear All
      </button>

      <FilteredResults selected={selected} results={filter} />
    </div>
  ) : (
    <p>Loading. . .</p>
  );
};

export default Filter;
