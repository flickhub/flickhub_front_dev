import React from "react";
import { icons } from "./constants/icons";
import respObj from "./network/base-api";

const Filter2 = () => {
  const [selected, setSelected] = React.useState({
    netflix: false,
    primeVideo: false,
    hotstar: false,
    erosNow: false,
    sonyLiv: false,
    altBalaji: false,
    zee5: false,
    voot: false,
    viu: false,
    year: [],
    rating: [],
    genre: [],
  });
  const [respObj, setRespObj] = React.useState(null);

  const yearFilter = {
    1: "1950-1955",
    2: "1956-1960",
    3: "1961-1965",
    4: "1966-1970",
    5: "1971-1975",
    6: "1976-1980",
    7: "1981-1985",
    8: "1986-1990",
    9: "1991-1995",
    10: "1996-2000",
    11: "2001-2005",
    12: "2006-2010",
    13: "2011-2015",
    14: "2016-2020",
  };

  const ratingFilter = {
    1: "<1.0",
    2: "1.1 - 2.0",
    3: "2.1 - 3.0",
    4: "3.1 - 4.0",
    5: "4.1 - 5.0",
    6: "5.1 - 6.0",
    7: "6.1 - 7.0",
    8: "7.1 - 8.0",
    9: "8.1 - 9.0",
    10: "9.1 - 10.0",
  };

  const genreFilter = {
    1: "Action",
    2: "Adventure",
    3: "Animation",
    4: "Biography",
    5: "Comedy",
    6: "Crime",
    7: "Documentary",
    8: "Drama",
    9: "Family",
    10: "Fantasy",
    11: "Film Noir",
    12: "History",
    13: "Horror",
    14: "Music",
    15: "Musical",
    16: "Mystery",
    17: "Romance",
    18: "Sci-Fi",
    19: "Short Film",
    20: "Sport",
    21: "Superhero",
    22: "Thriller",
    23: "War",
    24: "Western",
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

  const highlightSelected = (e) => {
    e.target.style.filter = "grayscale(0%)";
    e.target.style.opacity = "1"
  };

  const unhighlightSelected = (e) => {
    e.target.style.filter = "grayscale(100%)";
    e.target.style.opacity = "0.6";
  };

  const selectFilter = (e) => {
    e.target.style.backgroundColor = "rgba(255,134,20)";
  };

  const unSelectFilter = (e) => {
    e.target.style.backgroundColor = "";
  };

//   React.useEffect(() => {
//     console.log("Filters: ", selected);
//   }, [selected]);

  return respObj ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        margin: "75px 0px",
        width: "70vw",
        // border: "2px solid white",
        borderRadius: "5px",
        transition: "all 1s ease",
        paddingTop: "45px",
        background: "rgba(1,1,1,0.5)",
      }}
    >
      <div style={{ position: "fixed", left: "100px" }}>
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
              zee5: false,
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

      <div style={{ position: "fixed", right: "70px" }}>
        <button
          className="btn btn-link"
          onClick={() => {
            console.log("Filters: ", selected)
          }}
        >
          Apply Filters
        </button>
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.2)",
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          margin: "20px",
        }}
      >
        <a>
          <img
            id="thumbnail"
            src={icons.netflixIcon}
            height="50px"
            width="50px"
            style={{
              filter: "grayscale(100%)",
              margin: "10px",
              opacity: "0.6",
            }}
            onClick={(e) => {
              setSelected({ ...selected, netflix: !selected.netflix });
              !selected.netflix ? highlightSelected(e) : unhighlightSelected(e);
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
              filter: "grayscale(100%)",
              margin: "10px",
              opacity: "0.6",
            }}
            onClick={(e) => {
              setSelected({ ...selected, primeVideo: !selected.primeVideo });
              !selected.primeVideo
                ? highlightSelected(e)
                : unhighlightSelected(e);
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
              filter: "grayscale(100%)",
              margin: "10px",
              opacity: "0.6",
            }}
            onClick={(e) => {
              setSelected({ ...selected, hotstar: !selected.hotstar });
              !selected.hotstar ? highlightSelected(e) : unhighlightSelected(e);
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
              filter: "grayscale(100%)",
              margin: "10px",
              opacity: "0.6",
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
              filter: "grayscale(100%)",
              margin: "10px",
              opacity: "0.6",
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
              filter: "grayscale(100%)",
              margin: "10px",
              opacity: "0.6",
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
              filter: "grayscale(100%)",
              margin: "10px",
              opacity: "0.6",
            }}
            onClick={(e) => {
              setSelected({ ...selected, zee5: !selected.zee5 });
              !selected.zee5 ? highlightSelected(e) : unhighlightSelected(e);
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
              filter: "grayscale(100%)",
              margin: "10px",
              opacity: "0.6",
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
              filter: "grayscale(100%)",
              margin: "10px",
              opacity: "0.6",
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
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
          margin: "20px",
        }}
      >
        {Object.keys(yearFilter).map((item) => {
          return (
            <button
              className="btn btn-light"
              style={{ margin: "5px 0px", border: "none" }}
              onClick={(e) => {
                if (selected.year.includes(yearFilter[item])) {
                  setSelected({
                    ...selected,
                    year: [...selected.year].filter(
                      (itemInner) => itemInner !== yearFilter[item]
                    ),
                  });
                  unSelectFilter(e);
                } else {
                  setSelected({
                    ...selected,
                    year: [...selected.year, yearFilter[item]],
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
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
          backgroundColor: "rgba(255,255,255,0.2)",
          margin: "20px",
        }}
      >
        {Object.keys(ratingFilter).map((item) => {
          return (
            <button
              className="btn btn-light"
              style={{ margin: "5px 0px", border: "none" }}
              onClick={(e) => {
                if (selected.rating.includes(ratingFilter[item])) {
                  setSelected({
                    ...selected,
                    rating: [...selected.rating].filter(
                      (itemInner) => itemInner !== ratingFilter[item]
                    ),
                  });
                  unSelectFilter(e);
                } else {
                  setSelected({
                    ...selected,
                    rating: [...selected.rating, ratingFilter[item]],
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
          flexDirection: "column",
          justifyContent: "center",
          padding: "10px",
          backgroundColor: "rgba(255,255,255,0.2)",
          margin: "20px",
          width: "15%",
        }}
      >
        {Object.keys(genreFilter).map((item) => {
          return (
            <button
              className="btn btn-light"
              style={{ margin: "5px 0px", border: "none" }}
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
    </div>
  ) : (
    <p>Loading . . .</p>
  );
};

export default Filter2;
