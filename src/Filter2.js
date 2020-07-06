import React from "react";
import { icons } from "./constants/icons";
import Shimmer from "./Shimmer";
import Hover from "./Hover";
import { Link, Route } from "react-router-dom";
import FiltersNotFound from "./FiltersNotFound";

const Filter2 = () => {
  const [respObj, setRespObj] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [showResults, setShowResults] = React.useState(false);
  const [notFound, setNotFound] = React.useState(false);

  const [selected, setSelected] = React.useState({
    NETFLIX: false,
    PRIME: false,
    HOTSTAR: false,
    EROSNOW: false,
    SONYLIV: false,
    ALTBALAJI: false,
    ZEE5: false,
    VOOT: false,
    VIU: false,
    year: [],
    rating: [],
    genre: [],
  });

  const yearFilter = {
    0: "1950-1955",
    1: "1956-1960",
    2: "1961-1965",
    3: "1966-1970",
    4: "1971-1975",
    5: "1976-1980",
    6: "1981-1985",
    7: "1986-1990",
    8: "1991-1995",
    9: "1996-2000",
    10: "2001-2005",
    11: "2006-2010",
    12: "2011-2015",
    13: "2016-2020",
  };

  const ratingFilter = {
    0: "0.0 - 1.0",
    1: "1.1 - 2.0",
    2: "2.1 - 3.0",
    3: "3.1 - 4.0",
    4: "4.1 - 5.0",
    5: "5.1 - 6.0",
    6: "6.1 - 7.0",
    7: "7.1 - 8.0",
    8: "8.1 - 9.0",
    9: "9.1 - 10.0",
  };

  const genreFilter = {
    0: "Action",
    1: "Adventure",
    2: "Animation",
    3: "Biography",
    4: "Comedy",
    5: "Crime",
    6: "Documentary",
    7: "Drama",
    8: "Family",
    9: "Fantasy",
    10: "Film Noir",
    11: "Game-Show",
    12: "History",
    13: "Horror",
    14: "Music",
    15: "Musical",
    16: "Mystery",
    17: "Romance",
    18: "Sci-Fi",
    19: "Short Film",
    20: "Sport",
    // 21: "Superhero",
    21: "Thriller",
    22: "War",
    23: "Western",
  };

  const highlightSelected = (e) => {
    e.target.style.filter = "grayscale(0%)";
  };

  const unhighlightSelected = (e) => {
    e.target.style.filter = "grayscale(80%)";
  };

  const selectFilter = (e) => {
    e.target.style.backgroundColor = "rgba(255,134,20)";
  };

  const unSelectFilter = (e) => {
    e.target.style.backgroundColor = "";
  };

  const filterValues = Object.keys(selected).map((item) => {
    return item;
  });

  const sendFilters = () => {
    const data = {
      filters: selected,
    };

    fetch("http://flickhub.in/filter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // mode: "cors",
      body: JSON.stringify(data),
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setRespObj(res);
         res.data.length === 0 ? setNotFound(true) : setNotFound(false);
        setLoading(false);
        
      });
    // .then((res) => console.log("Backend: ", res));
  };

  return showResults ? (
    <div
      style={{
        height: "100%",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        marginTop: "100px",
      }}
    >
      {loading ? (
        <Shimmer />
      ) : (
        notFound ? <FiltersNotFound /> :
        respObj.data.map((item) => {
          return (
            <div style={{ margin: "5px 2px" }}>
              <Hover item={item} />
            </div>
          );
        })
      )}
    </div>
  ) : 
  (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "75px 0px 25px 0px",
        width: "70vw",
        flexDirection: "column",
        borderRadius: "5px",
        background: "rgba(1,1,1,0.5)",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70vw",
        }}
      >
        <div style={{}}>
          <button
            className="btn btn-link"
            onClick={() => {
              setSelected({
                NETFLIX: false,
                PRIME: false,
                HOTSTAR: false,
                EROSNOW: false,
                SONYLIV: false,
                ALTBALAJI: false,
                ZEE5: false,
                VOOT: false,
                VIU: false,
                year: [],
                rating: [],
                genre: [],
              });
            }}
          >
            Clear All
          </button>
        </div>

        <div style={{}}>
          <button
            className="btn btn-link"
            onClick={() => {
              console.log("Filters: ", selected);
              sendFilters();
              setShowResults(true);
            }}
          >
            Apply Filters
          </button>
          
        </div>
      </div>

      <h4 style={{ color: "white", textAlign: "left", width: "65%" }}>
        Filter By Streaming Service
      </h4>
      <div
        style={{
          background: "rgba(255,255,255,0.2)",
          padding: "5px",
          display: "flex",
          width: "65%",
          margin: "5px",
          overflow: "auto",
        }}
      >
        <a>
          <img
            id="thumbnail"
            src={icons.netflixIcon}
            height="50px"
            width="50px"
            style={{
              filter: !selected.NETFLIX ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.NETFLIX ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, NETFLIX: !selected.NETFLIX });
            }}
          />
        </a>
        <a>
          <img
            id="thumbnail"
            src={icons.primeVideoIcon}
            height="50px"
            width="50px"
            style={{
              filter: !selected.PRIME ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.PRIME ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, PRIME: !selected.PRIME });
            }}
          />
        </a>
        <a>
          <img
            id="thumbnail"
            src={icons.hotstarIcon}
            height="50px"
            width="50px"
            style={{
              filter: !selected.HOTSTAR ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.HOTSTAR ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, HOTSTAR: !selected.HOTSTAR });
            }}
          />
        </a>
        <a>
          <img
            id="thumbnail"
            src={icons.erosNowIcon}
            height="50px"
            width="50px"
            style={{
              filter: !selected.EROSNOW ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.EROSNOW ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, EROSNOW: !selected.EROSNOW });
              !selected.EROSNOW ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
        </a>
        <a>
          <img
            id="thumbnail"
            src={icons.sonyLivIcon}
            height="50px"
            width="50px"
            style={{
              filter: !selected.SONYLIV ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.SONYLIV ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, SONYLIV: !selected.SONYLIV });
              !selected.SONYLIV ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
        </a>
        <a>
          <img
            id="thumbnail"
            src={icons.altBalajiIcon}
            height="50px"
            width="50px"
            style={{
              filter: !selected.ALTBALAJI ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.ALTBALAJI ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, ALTBALAJI: !selected.ALTBALAJI });
              !selected.ALTBALAJI
                ? highlightSelected(e)
                : unhighlightSelected(e);
            }}
          />
        </a>
        <a>
          <img
            id="thumbnail"
            src={icons.zee5Icon}
            height="50px"
            width="50px"
            style={{
              filter: !selected.ZEE5 ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.ZEE5 ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, ZEE5: !selected.ZEE5 });
              !selected.ZEE5 ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
        </a>
        <a>
          <img
            id="thumbnail"
            src={icons.vootIcon}
            height="50px"
            width="50px"
            style={{
              filter: !selected.VOOT ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.VOOT ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, VOOT: !selected.VOOT });
              !selected.VOOT ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
        </a>
        <a>
          <img
            id="thumbnail"
            src={icons.viuIcon}
            height="50px"
            width="50px"
            style={{
              filter: !selected.VIU ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.VIU ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, VIU: !selected.VIU });
              !selected.VIU ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
        </a>
      </div>

      <h4
        style={{
          color: "white",
          marginTop: "5px",
          textAlign: "left",
          width: "65%",
        }}
      >
        Filter By Rating
      </h4>
      <div
        style={{
          display: "flex",
          width: "65%",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "10px 0px",
          backgroundColor: "rgba(255,255,255,0.2)",
          margin: "5px",
        }}
      >
        {Object.keys(ratingFilter).map((item) => {
          return (
            <button
              key={"filter-button-rating" + item}
              className="btn btn-light"
              style={{
                margin: "5px",
                border: "none",
                background: selected.rating.includes(item)
                  ? "rgba(255,134,20)"
                  : "",
                width: "20%",
                padding: "2px",
              }}
              onClick={(e) => {
                if (selected.rating.includes(item)) {
                  setSelected({
                    ...selected,
                    rating: [...selected.rating].filter(
                      (itemInner) => itemInner !== item
                    ),
                  });
                  unSelectFilter(e);
                } else {
                  setSelected({
                    ...selected,
                    rating: [...selected.rating, item],
                  });
                  selectFilter(e);
                }
              }}
            >
              {ratingFilter[item]}
            </button>
          );
        })}
      </div>

      <h4
        style={{
          color: "white",
          marginTop: "5px",
          textAlign: "left",
          width: "65%",
        }}
      >
        Filter By Genre
      </h4>
      <div
        style={{
          display: "flex",
          width: "65%",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "10px 0px",
          backgroundColor: "rgba(255,255,255,0.2)",
          margin: "5px",
        }}
      >
        {Object.keys(genreFilter).map((item, index) => {
          return (
            <button
              key={"filter-button-genre" + index}
              className="btn btn-light"
              style={{
                margin: "5px",
                border: "none",
                background: selected.genre.includes(genreFilter[item])
                  ? "rgba(255,134,20)"
                  : "",
                width: "20%",
                padding: "2px",
              }}
              onClick={(e) => {
                if (selected.genre.includes(genreFilter[item])) {
                  setSelected({
                    ...selected,
                    genre: [...selected.genre].filter(
                      (itemInner) => itemInner !== genreFilter[item]
                    ),
                  });
                  unSelectFilter(e);
                } else {
                  setSelected({
                    ...selected,
                    genre: [...selected.genre, genreFilter[item]],
                  });
                  selectFilter(e);
                }
              }}
            >
              {genreFilter[item]}
            </button>
          );
        })}
      </div>

      <h4
        style={{
          color: "white",
          marginTop: "5px",
          textAlign: "left",
          width: "65%",
        }}
      >
        Filter By Year
      </h4>
      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          display: "flex",
          width: "65%",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: "10px 0px",
          margin: "5px",
        }}
      >
        {Object.keys(yearFilter).map((item, index) => {
          return (
            <button
              key={"filter-button-year " + index}
              className="btn btn-light"
              style={{
                margin: "5px",
                border: "none",
                background: selected.year.includes(item)
                  ? "rgba(255,134,20)"
                  : "",
                width: "20%",
                padding: "2px",
              }}
              onClick={(e) => {
                if (selected.year.includes(item)) {
                  setSelected({
                    ...selected,
                    year: [...selected.year].filter(
                      (itemInner) => itemInner !== item
                    ),
                  });
                  unSelectFilter(e);
                } else {
                  setSelected({
                    ...selected,
                    year: [...selected.year, item],
                  });
                  selectFilter(e);
                }
              }}
            >
              {yearFilter[item]}
            </button>
          );
        })}
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70vw",
        }}
      >
        <div style={{}}>
          <button
            className="btn btn-link"
            onClick={() => {
              setSelected({
                NETFLIX: false,
                PRIME: false,
                HOTSTAR: false,
                EROSNOW: false,
                SONYLIV: false,
                ALTBALAJI: false,
                ZEE5: false,
                VOOT: false,
                VIU: false,
                year: [],
                rating: [],
                genre: [],
              });
            }}
          >
            Clear All
          </button>
        </div>

        <div style={{}}>
            <button
              className="btn btn-link"
              onClick={() => {
                console.log("Filters: ", selected);
                // console.log("filterValues", filterValues);
                sendFilters();
                setShowResults(true);
              }}
            >
              Apply Filters
            </button>
        </div>
      </div>
    </div>
  );
};

export default Filter2;
