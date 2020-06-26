import React from "react";
import { icons } from "./constants/icons";
import Shimmer from "./Shimmer";

const Filter = () => {
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

  const [filterByService, setFilterByService] = React.useState(false);
  const [filterByYear, setFilterByYear] = React.useState(false);
  const [filterByRating, setFilterByRating] = React.useState(false);
  const [filterByGenre, setFilterByGenre] = React.useState(false);

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
    12: "Game-Show",
    13: "History",
    14: "Horror",
    15: "Music",
    16: "Musical",
    17: "Mystery",
    18: "Romance",
    19: "Sci-Fi",
    20: "Short Film",
    21: "Sport",
    // 21: "Superhero",
    22: "Thriller",
    23: "War",
    24: "Western",
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
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "100px 0px 75px 0px",
        width: "70vw",
        flexDirection: "column",
        borderRadius: "3px",
        background: "rgba(1,1,1,0.5)",
        width: "100%",
        transition: "all 0.5s ease",
      }}
    >
      <button
        style={{
          width: "50vw",
          margin: "30px 50px",
        }}
        type="button"
        className="btn btn-light"
        onClick={() => setFilterByService(!filterByService)}
      >
        {!filterByService ? "Filter By Service" : "Hide"}
      </button>
      {/* {filterByService ? ( */}
      <div
        style={{
          background: "rgba(255,255,255,0.2)",
          padding: filterByService ? "20px" : "0px",
          display: "flex",
          flexWrap: "wrap",
          margin: filterByService ? "20px" : "0px",
          height: filterByService ? "30vh" : "0px",
          // width: filterByService ? "70vw" : "0px",
          transition: "all 0.5s ease",
        }}
      >
        <a>
          <img
            id="thumbnail"
            src={icons.netflixIcon}
            style={{
              filter: !selected.netflix ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.netflix ? "0.8" : "1",
              height: filterByService ? "50px" : "0px",
              width: filterByService ? "50px" : "0px",
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
            style={{
              filter: !selected.primeVideo ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.primeVideo ? "0.8" : "1",
              height: filterByService ? "50px" : "0px",
              width: filterByService ? "50px" : "0px",
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
            style={{
              filter: !selected.hotstar ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.hotstar ? "0.8" : "1",
              height: filterByService ? "50px" : "0px",
              width: filterByService ? "50px" : "0px",
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
            style={{
              filter: !selected.erosNow ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.erosNow ? "0.8" : "1",
              height: filterByService ? "50px" : "0px",
              width: filterByService ? "50px" : "0px",
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
            style={{
              filter: !selected.sonyLiv ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.sonyLiv ? "0.8" : "1",
              height: filterByService ? "50px" : "0px",
              width: filterByService ? "50px" : "0px",
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
            style={{
              filter: !selected.altBalaji ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.altBalaji ? "0.8" : "1",
              height: filterByService ? "50px" : "0px",
              width: filterByService ? "50px" : "0px",
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
            style={{
              filter: !selected.zee ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.zee ? "0.8" : "1",
              height: filterByService ? "50px" : "0px",
              width: filterByService ? "50px" : "0px",
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
            style={{
              filter: !selected.voot ? "grayscale(90%)" : "grayscale(0%)",
              margin: "10px",
              opacity: !selected.voot ? "0.8" : "1",
              height: filterByService ? "50px" : "0px",
              width: filterByService ? "50px" : "0px",
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
              height: filterByService ? "50px" : "0px",
              width: filterByService ? "50px" : "0px",
            }}
            onClick={(e) => {
              setSelected({ ...selected, viu: !selected.viu });
              !selected.viu ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
        </a>
      </div>

      {/* Filter by year */}
      <button
        style={{ width: "50vw", margin: "30px 50px" }}
        type="button"
        className="btn btn-light"
        onClick={() => setFilterByYear(!filterByYear)}
      >
        {!filterByYear ? "Filter By Year" : "Hide"}
      </button>

      <div
        style={{
          backgroundColor: "rgba(255,255,255,0.2)",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: filterByYear ? "10px" : "0px",
          margin: filterByYear ? "30px 20px" : "0px",
          transition: "all 0.5s ease",
          height: filterByYear ? "" : 0,
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
                background: selected.year.includes(yearFilter[item])
                  ? "rgba(255,134,20)"
                  : "",
                width: "120px",
                display: filterByYear ? "block" : "none",
              }}
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

      {/* Filter by rating */}
      <button
        style={{ width: "50vw", margin: "30px 50px" }}
        type="button"
        className="btn btn-light"
        onClick={() => setFilterByRating(!filterByRating)}
      >
        {!filterByRating ? "Filter By Rating" : "Hide"}
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: filterByRating ? "10px" : "0px",
          backgroundColor: "rgba(255,255,255,0.2)",
          margin: filterByRating ? "20px" : "0px",
          height: filterByRating ? "30vh" : 0,
          transition: "all 0.5s ease",
        }}
      >
        {Object.keys(ratingFilter).map((item) => {
          return (
            <button
              key={"filter-button-rating" + item}
              className="btn btn-light"
              style={{
                margin: "5px",
                transition: "all 0.5s ease",
                border: "none",
                background: selected.rating.includes(ratingFilter[item])
                  ? "rgba(255,134,20)"
                  : "",
                width: "100px",
                display: filterByRating ? "block" : "none",
              }}
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

      {/* Filter by genre */}
      <button
        style={{ width: "50vw", margin: "30px 50px" }}
        type="button"
        className="btn btn-light"
        onClick={() => setFilterByGenre(!filterByGenre)}
      >
        {!filterByGenre ? "Filter By Genre" : "Hide"}
      </button>
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: filterByGenre ? "10px": "0px",
          backgroundColor: "rgba(255,255,255,0.2)",
          margin: filterByGenre ? "20px":"0px",
          height: filterByGenre ? "60vh" : 0,
          transition: "all 0.5s ease",
        }}
      >
        {Object.keys(genreFilter).map((item, index) => {
          return (
            <button
              key={"filter-button-genre" + index}
              className="btn btn-light"
              style={{
                margin: "5px",
                marginTop: "10px",
                transition: "all 0.5s ease",
                border: "none",
                background: selected.genre.includes(genreFilter[item])
                  ? "rgba(255,134,20)"
                  : "",
                width: "120px",
                display: filterByGenre ? "" : "none"
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

      {/* Footer */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          bottom: "0",
          left: "0",
          position: "fixed",
          width: "100%",
          background: "rgba(200,200,200)",
          padding: "10px",
        }}
      >
        <div>
          <button
            style={{ width: "45vw" }}
            className="btn btn-light"
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

        <div>
          <button
            className="btn btn-light"
            style={{ width: "45vw" }}
            onClick={() => {
              console.log("Filters: ", selected);
              sendFilters();
            }}
          >
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
