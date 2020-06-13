import React from "react";
import { titles } from "./utils/response";
import Hover from "./Hover";
import Cards from "./Cards";
import FilteredResults from "./FilteredResults";

const initialItemsState = {
  netflix: null,
  primeVideo: null,
  hotstar: null,
};

const Filter = (props) => {
  const [year, setYear] = React.useState();
  const [options, setOptions] = React.useState(false);

  const [selected, setSelected] = React.useState(false);
  const [filter, setFilter] = React.useState(<Cards />);
  const [net, setNet] = React.useState();
  const [prim, setPrim] = React.useState();
  const [hot, setHot] = React.useState();
  // const [filter, setFilter] = React.useState();

  const [items, setItems] = React.useState(initialItemsState);

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
    return titles()
      .filter((item) => {
        if (item.year.includes(year)) {
          return item;
        }
      })
      .map((item) => {
        return titles().map((names) => {
          if (names == item) {
            return <Hover item={names} />;
          }
        });
      });
  };

  const filterNetflix = () => {
    // setFilter(
    // const array=[]
    return titles()
      .filter((item) => {
        if (item.ott.netflix != null) {
          // array.push(item)
          // console.log("Array", array)
          return item;
        }
      })
      .map((item) => {
        return titles().map((name) => {
          if (JSON.stringify(name) == JSON.stringify(item)) {
            return <Hover item={name} />;
          }
        });
      });
    // return array
  };

  const filterPrimeVideo = () => {
    // setFilter(
    return titles()
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
      });
  };

  const filterHotstar = () => {
    // setFilter(
    return titles()
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
      });
  };

  return (
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
      <div style={{display: "flex",}}>
        {options
          ? titles().map((item) => {
              return (
                <button
                  className="btn btn-danger"
                  style={{ margin: "10px"}}
                  onClick={(e) => {
                    setYear(item.year);
                    {
                      clickStyle(e);
                      selected ? setFilter(filterYear()) : setFilter(<Cards />);
                    }
                    setSelected(!selected);
                  }}
                >
                  {item.year}
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
      {/* <FilteredResults selected={selected} results={net} />
      <FilteredResults selected={selected} results={prim} />
      <FilteredResults selected={selected} results={hot} /> */}
    </div>
  );
};

export default Filter;
