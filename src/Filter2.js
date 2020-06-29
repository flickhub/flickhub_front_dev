import React from "react";
import { icons } from "./constants/icons";
import Shimmer from "./Shimmer";

const Filter2 = () => {
  const [selected, setSelected] = React.useState({
    netflix: false,
    primeVideo: false,
    hotstar: false,
    erosNow: false,
    sonyLiv: false,
    altBalaji: false,
    zee: false,
    voot: false,
    viu: false,
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
      filterObject: { filters: selected },
    };

    fetch("http://localhost:8080/filter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      // mode: "cors",
      body: JSON.stringify(data),
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "75px",
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
                netflix: false,
                primeVideo: false,
                hotstar: false,
                erosNow: false,
                sonyLiv: false,
                altBalaji: false,
                zee: false,
                voot: false,
                viu: false,
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
            }}
          >
            Apply Filters
          </button>
        </div>
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.2)",
          padding: "5px",
          display: "flex",
          width: "65%",
          margin: "20px",
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
              filter: !selected.netflix ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.netflix ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, netflix: !selected.netflix });
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
              filter: !selected.primeVideo ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.primeVideo ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, primeVideo: !selected.primeVideo });
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
              filter: !selected.hotstar ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.hotstar ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, hotstar: !selected.hotstar });
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
              filter: !selected.erosNow ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.erosNow ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, erosNow: !selected.erosNow });
              !selected.erosNow ? highlightSelected(e) : unhighlightSelected(e);
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
              filter: !selected.sonyLiv ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.sonyLiv ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, sonyLiv: !selected.sonyLiv });
              !selected.sonyLiv ? highlightSelected(e) : unhighlightSelected(e);
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
              filter: !selected.altBalaji ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.altBalaji ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, altBalaji: !selected.altBalaji });
              !selected.altBalaji
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
              filter: !selected.zee ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.zee ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, zee: !selected.zee });
              !selected.zee ? highlightSelected(e) : unhighlightSelected(e);
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
              filter: !selected.voot ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.voot ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, voot: !selected.voot });
              !selected.voot ? highlightSelected(e) : unhighlightSelected(e);
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
              filter: !selected.viu ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.viu ? "0.8" : "1",
            }}
            onClick={(e) => {
              setSelected({ ...selected, viu: !selected.viu });
              !selected.viu ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
        </a>
      </div>

      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          display: "flex",
          width: "65%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          padding: "10px",
          margin: "20px",
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
          width: "65%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          padding: "10px",
          backgroundColor: "rgba(255,255,255,0.2)",
          margin: "20px",
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
                    rating: [...selected.rating,item],
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

      <div
        style={{
          display: "flex",
          width: "65%",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          flexWrap: "wrap",
          padding: "10px",
          backgroundColor: "rgba(255,255,255,0.2)",
          margin: "20px",
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
                background: selected.genre.includes(item)
                  ? "rgba(255,134,20)"
                  : "",
              }}
              onClick={(e) => {
                if (selected.genre.includes(item)) {
                  setSelected({
                    ...selected,
                    genre: [...selected.genre].filter(
                      (itemInner) => itemInner !== item
                    ),
                  });
                  unSelectFilter(e);
                } else {
                  setSelected({
                    ...selected,
                    genre: [...selected.genre, item],
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
    </div>
  );
};

export default Filter2;
