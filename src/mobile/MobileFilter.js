import React, { useEffect } from 'react';
import { icons } from '../constants/icons';

import { Link } from 'react-router-dom';

export const initState = {
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
};

const yearGroup = [
  "'1955','1656'",
  "'1957','1958'",
  "'1959','1960'",
  "'1961','1962'",
  "'1963','1964'",
  "'1965','1966'",
  "'1967','1968'",
  "'1969','1970'",
  "'1971','1972'",
  "'1973','1974'",
  "'1975','1976'",
  "'1977','1978'",
  "'1979','1980'",
  "'1981','1982'",
  "'1983','1984'",
  "'1985','1986'",
  "'1987','1988'",
  "'1989','1990'",
  "'1991','1992'",
  "'1993','1994'",
  "'1995','1996'",
  "'1997','1998'",
  "'1999','2000'",
  "'2001','2002'",
  "'2003','2004'",
  "'2005','2006'",
  "'2007','2008'",
  "'2009','2010'",
  "'2011','2012'",
  "'2013','2014'",
  "'2015','2016'",
  "'2017','2018'",
  "'2019','2020'",
];

const yearFilter = {
  0: '1955-1956',
  1: '1957-1958',
  2: '1959-1960',
  3: '1961-1962',
  4: '1963-1964',
  5: '1965-1966',
  6: '1967-1968',
  7: '1969-1970',
  8: '1971-1972',
  9: '1973-1974',
  10: '1975-1976',
  11: '1977-1978',
  12: '1979-1980',
  13: '1981-1982',
  14: '1983-1984',
  15: '1985-1986',
  16: '1987-1988',
  17: '1989-1990',
  18: '1991-1992',
  19: '1993-1994',
  20: '1995-1996',
  21: '1997-1998',
  22: '1999-2000',
  23: '2001-2002',
  24: '2003-2004',
  25: '2005-2006',
  26: '2007-2008',
  27: '2009-2010',
  28: '2011-2012',
  29: '2013-2014',
  30: '2015-2016',
  31: '2017-2018',
  32: '2019-2020',
};

export const ratingFilter = {
  0: '0',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: '7',
  8: '8',
  9: '9',
  10: '10',
};

export const genreFilter = {
  0: 'Action',
  1: 'Adventure',
  2: 'Animation',
  3: 'Biography',
  4: 'Comedy',
  5: 'Crime',
  6: 'Documentary',
  7: 'Drama',
  8: 'Family',
  9: 'Fantasy',
  10: 'Film Noir',
  11: 'Game-Show',
  12: 'History',
  13: 'Horror',
  14: 'Music',
  15: 'Musical',
  16: 'Mystery',
  17: 'Romance',
  18: 'Sci-Fi',
  19: 'Short Film',
  20: 'Sport',
  21: 'Thriller',
  22: 'War',
  23: 'Western',
};

const Filter = () => {
  const [selected, setSelected] = React.useState(
    JSON.parse(JSON.stringify(initState))
  );

  useEffect(() => {
    if (localStorage.getItem('filters')) {
      setSelected(JSON.parse(localStorage.getItem('filters')));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(selected));
  }, [selected]);

  const [filterByService, setFilterByService] = React.useState(false);
  const [filterByYear, setFilterByYear] = React.useState(false);
  const [filterByRating, setFilterByRating] = React.useState(false);
  const [filterByGenre, setFilterByGenre] = React.useState(false);

  const highlightSelected = (e) => {
    e.target.style.filter = 'grayscale(0%)';
  };

  const unhighlightSelected = (e) => {
    e.target.style.filter = 'grayscale(80%)';
  };

  const selectFilter = (e) => {
    e.target.style.backgroundColor = 'rgba(255,134,20)';
  };

  const unSelectFilter = (e) => {
    e.target.style.backgroundColor = '';
  };

  const sendFilters = () => {
    let selectedGenreString = '';

    selected.genre.forEach((el, index) => {
      if (index === selected.genre.length - 1) selectedGenreString += `'${el}'`;
      else selectedGenreString += `'${el}',`;
    });

    const selectedRatings = selected.rating.map((el) => parseInt(el));

    let selectedPlatforms = [];

    if (selected.NETFLIX) selectedPlatforms.push(`'NETFLIX'`);
    if (selected.HOTSTAR) selectedPlatforms.push(`'HOTSTAR'`);
    if (selected.PRIME) selectedPlatforms.push(`'PRIME'`);
    if (selected.EROSNOW) selectedPlatforms.push(`'EROSNOW'`);
    if (selected.VOOT) selectedPlatforms.push(`'VOOT'`);
    if (selected.ALTBALAJI) selectedPlatforms.push(`'ALTBALAJI'`);
    if (selected.VIU) selectedPlatforms.push(`'VIU'`);
    if (selected.ZEE5) selectedPlatforms.push(`'ZEE5'`);
    if (selected.SONYLIV) selectedPlatforms.push(`'SONYLIV'`);

    let yearArray = [];

    selected.year.forEach((el) => yearArray.push(yearGroup[el]));

    // const filterYearString = years.join(',');

    const data = {
      params: {
        genre_bool: selected.genre.length > 0 ? true : false,
        genres: selectedGenreString,
        rating_bool: selected.rating.length > 0 ? true : false,
        rating: selectedRatings,
        platform_bool:
          selected.NETFLIX ||
          selected.EROSNOW ||
          selected.EROSNOW ||
          selected.VOOT ||
          selected.VIU ||
          selected.PRIME ||
          selected.HOTSTAR ||
          selected.SONYLIV ||
          selected.ZEE5 ||
          selected.ALTBALAJI
            ? true
            : false,
        platforms: selectedPlatforms.join(','),
        year_bool: selected.year.length > 0 ? true : false,
        years: yearArray.join(','),
      },
    };

    return data;

    // `"${selected.NETFLIX ? 'NETFLIX' : ''}${
    //   selected.HOTSTAR ? 'HOTSTAR,' : ''
    // }${selected.PRIME ? 'PRIME,' : ''}${
    //   selected.SONYLIV ? 'SONYLIV' : ''
    // }${selected.EROSNOW ? 'EROSNOW,' : ''}${
    //   selected.ALTBALAJI ? 'ALTBALAJI,' : ''
    // }${selected.VIU ? 'VIU,' : ''}${selected.VOOT ? 'VOOT,' : ''}"`

    //genres: selected.genre.join(","),

    // platforms: `${selected.NETFLIX ? "NETFLIX," : ""}${
    //   selected.HOTSTAR ? "HOTSTAR," : ""
    // }${selected.PRIME ? "PRIME," : ""}${
    //   selected.SONYLIV ? "SONYLIV," : ""
    // }${selected.EROSNOW ? "EROSNOW," : ""}${
    //   selected.ALTBALAJI ? "ALTBALAJI," : ""
    // }${selected.VIU ? "VIU," : ""}${selected.VOOT ? "VOOT," : ""}`,

    // fetch('https://flickhub.in/filter2', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => {
    //     return res.json();
    //   })
    //   .then((res) => {
    //     setRespObj(res.data.data);
    //     res.data.length === 0 ? setNotFound(true) : setNotFound(false);
    //     setLoading(false);
    //   });
  };

  // const sendFilters = () => {
  //   const data = {
  //     filters: selected,
  //   };

  //   fetch('http://flickhub.in/filter', {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     // mode: "cors",
  //     body: JSON.stringify(data),
  //   })
  //     .then((res) => {
  //       return res.json();
  //     })
  //     .then((res) => {
  //       setRespObj(res);
  //       res.data.length === 0 ? setNotFound(true) : setNotFound(false);
  //       setLoading(false);
  //     });
  // };

  return (
    <div style={{ marginTop: '20px' }}>
      <div
        style={{
          marginBottom: '100px',
          width: '74vw',
          borderRadius: '3px',
          background: 'rgba(1,1,1,0.5)',
          padding: '5px',
          marginLeft: '45px',
          transition: 'all 0.5s ease',
        }}
      >
        <button
          style={{ width: '50vw', margin: '10px 50px', padding: '2px' }}
          type="button"
          className="btn btn-light"
          onClick={() => setFilterByService(!filterByService)}
        >
          {!filterByService ? 'Filter By Service' : 'Hide'}
        </button>

        <h5
          style={{
            color: 'white',
            textAlign: 'left',
            width: '70vw',
            display: filterByService ? 'block' : 'none',
          }}
        >
          Filter By Streaming Service
        </h5>
        <div
          style={{
            background: 'rgba(255,255,255,0.2)',
            padding: filterByService ? '20px' : '0px',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            margin: filterByService ? '0px' : '0px',
            height: filterByService ? '30vh' : '0vw',
            width: filterByService ? '70vw' : '0vw',

            transition: 'all 0.5s ease',
          }}
        >
          <img
            alt="NETFLIX"
            id="thumbnail"
            src={icons.netflixIcon}
            style={{
              filter: !selected.NETFLIX ? 'grayscale(90%)' : 'grayscale(0%)',
              margin: filterByService ? '6px' : '0px',
              opacity: !selected.NETFLIX ? '0.8' : '1',
              height: filterByService ? '7vh' : '0px',
              width: filterByService ? '7vw' : '0px',
            }}
            onClick={(e) => {
              setSelected({ ...selected, NETFLIX: !selected.NETFLIX });
            }}
          />
          <img
            alt="PRIME"
            id="thumbnail"
            src={icons.primeVideoIcon}
            style={{
              filter: !selected.PRIME ? 'grayscale(90%)' : 'grayscale(0%)',
              margin: filterByService ? '6px' : '0px',
              opacity: !selected.PRIME ? '0.8' : '1',
              height: filterByService ? '7vh' : '0px',
              width: filterByService ? '7vw' : '0px',
            }}
            onClick={(e) => {
              setSelected({ ...selected, PRIME: !selected.PRIME });
            }}
          />
          <img
            id="thumbnail"
            alt="HOTSTAR"
            src={icons.hotstarIcon}
            style={{
              filter: !selected.HOTSTAR ? 'grayscale(90%)' : 'grayscale(0%)',
              margin: filterByService ? '6px' : '0px',
              opacity: !selected.HOTSTAR ? '0.8' : '1',
              height: filterByService ? '7vh' : '0px',
              width: filterByService ? '7vw' : '0px',
            }}
            onClick={(e) => {
              setSelected({ ...selected, HOTSTAR: !selected.HOTSTAR });
            }}
          />
          <img
            id="thumbnail"
            alt="EROSNOW"
            src={icons.erosNowIcon}
            style={{
              filter: !selected.EROSNOW ? 'grayscale(90%)' : 'grayscale(0%)',
              margin: filterByService ? '6px' : '0px',
              opacity: !selected.EROSNOW ? '0.8' : '1',
              height: filterByService ? '7vh' : '0px',
              width: filterByService ? '7vw' : '0px',
            }}
            onClick={(e) => {
              setSelected({ ...selected, EROSNOW: !selected.EROSNOW });
              !selected.EROSNOW ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
          <img
            id="thumbnail"
            alt="SONYLIV"
            src={icons.sonyLivIcon}
            style={{
              filter: !selected.SONYLIV ? 'grayscale(90%)' : 'grayscale(0%)',
              margin: filterByService ? '6px' : '0px',
              opacity: !selected.SONYLIV ? '0.8' : '1',
              height: filterByService ? '7vh' : '0px',
              width: filterByService ? '7vw' : '0px',
            }}
            onClick={(e) => {
              setSelected({ ...selected, SONYLIV: !selected.SONYLIV });
              !selected.SONYLIV ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
          <img
            id="thumbnail"
            alt="ALTBALAJI"
            src={icons.altBalajiIcon}
            style={{
              filter: !selected.ALTBALAJI ? 'grayscale(90%)' : 'grayscale(0%)',
              margin: filterByService ? '6px' : '0px',
              opacity: !selected.ALTBALAJI ? '0.8' : '1',
              height: filterByService ? '7vh' : '0px',
              width: filterByService ? '7vw' : '0px',
            }}
            onClick={(e) => {
              setSelected({ ...selected, ALTBALAJI: !selected.ALTBALAJI });
              !selected.ALTBALAJI
                ? highlightSelected(e)
                : unhighlightSelected(e);
            }}
          />
          <img
            id="thumbnail"
            alt="ZEE5"
            src={icons.zee5Icon}
            style={{
              filter: !selected.ZEE5 ? 'grayscale(90%)' : 'grayscale(0%)',
              margin: filterByService ? '6px' : '0px',
              opacity: !selected.ZEE5 ? '0.8' : '1',
              height: filterByService ? '7vh' : '0px',
              width: filterByService ? '7vw' : '0px',
            }}
            onClick={(e) => {
              setSelected({ ...selected, ZEE5: !selected.ZEE5 });
              !selected.ZEE5 ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
          <img
            id="thumbnail"
            alt="VOOT"
            src={icons.vootIcon}
            style={{
              filter: !selected.VOOT ? 'grayscale(90%)' : 'grayscale(0%)',
              margin: filterByService ? '6px' : '0px',
              opacity: !selected.VOOT ? '0.8' : '1',
              height: filterByService ? '7vh' : '0px',
              width: filterByService ? '7vw' : '0px',
            }}
            onClick={(e) => {
              setSelected({ ...selected, VOOT: !selected.VOOT });
              !selected.VOOT ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
          <img
            id="thumbnail"
            alt="VIU"
            src={icons.viuIcon}
            height="50px"
            width="50px"
            style={{
              filter: !selected.VIU ? 'grayscale(90%)' : 'grayscale(0%)',
              margin: filterByService ? '6px' : '0px',
              opacity: !selected.VIU ? '0.8' : '1',
              height: filterByService ? '7vh' : '0px',
              width: filterByService ? '7vw' : '0px',
            }}
            onClick={(e) => {
              setSelected({ ...selected, VIU: !selected.VIU });
              !selected.VIU ? highlightSelected(e) : unhighlightSelected(e);
            }}
          />
        </div>

        {/* Filter by rating */}
        <h5
          style={{
            color: 'white',
            textAlign: 'left',
            width: '70vw',
            display: filterByRating ? 'block' : 'none',
            marginTop: '5px',
          }}
        >
          Filter By Rating
        </h5>
        <button
          style={{ width: '50vw', margin: '10px 50px', padding: '2px' }}
          type="button"
          className="btn btn-light"
          onClick={() => setFilterByRating(!filterByRating)}
        >
          {!filterByRating ? 'Filter By Rating' : 'Hide'}
        </button>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: filterByRating ? '10px' : '0px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            margin: filterByRating ? '5px' : '0px',
            width: filterByRating ? '70vw' : '',
            transition: 'all 0.5s ease',
          }}
        >
          {Object.keys(ratingFilter).map((item) => {
            return (
              <button
                key={'filter-button-rating' + item}
                className="btn btn-light"
                style={{
                  margin: '5px',
                  transition: 'all 0.5s ease',
                  border: 'none',
                  background: selected.rating.includes(item)
                    ? 'rgba(255,134,20)'
                    : '',
                  width: '100px',
                  display: filterByRating ? 'block' : 'none',
                  padding: '2px',
                  fontSize: '13px',
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

        {/* Filter by genre */}
        <h5
          style={{
            color: 'white',
            textAlign: 'left',
            width: '70vw',
            display: filterByGenre ? 'block' : 'none',
            marginTop: '5px',
          }}
        >
          Filter By Genre
        </h5>
        <button
          style={{ width: '50vw', margin: '10px 50px', padding: '2px' }}
          type="button"
          className="btn btn-light"
          onClick={() => setFilterByGenre(!filterByGenre)}
        >
          {!filterByGenre ? 'Filter By Genre' : 'Hide'}
        </button>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: filterByGenre ? '10px' : '0px',
            backgroundColor: 'rgba(255,255,255,0.2)',
            margin: filterByGenre ? '5px' : '0px',
            transition: 'all 0.5s ease',
            width: filterByGenre ? '70vw' : '',
          }}
        >
          {Object.keys(genreFilter).map((item, index) => {
            return (
              <button
                key={'filter-button-genre' + index}
                className="btn btn-light"
                style={{
                  margin: '5px',
                  marginTop: '10px',
                  transition: 'all 0.5s ease',
                  border: 'none',
                  background: selected.genre.includes(genreFilter[item])
                    ? 'rgba(255,134,20)'
                    : '',
                  width: '100px',
                  display: filterByGenre ? '' : 'none',
                  fontSize: '13px',
                  padding: '2px',
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

        {/* Filter by year */}
        <h5
          style={{
            color: 'white',
            textAlign: 'left',
            width: '70vw',
            display: filterByYear ? 'block' : 'none',
            marginTop: '5px',
          }}
        >
          Filter By Year
        </h5>
        <button
          style={{ width: '50vw', margin: '10px 50px', padding: '2px' }}
          type="button"
          className="btn btn-light"
          onClick={() => setFilterByYear(!filterByYear)}
        >
          {!filterByYear ? 'Filter By Year' : 'Hide'}
        </button>

        <div
          style={{
            backgroundColor: 'rgba(255,255,255,0.2)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: filterByYear ? '10px' : '0px',
            margin: filterByYear ? '5px 20px' : '0px',
            transition: 'all 0.5s ease',
            width: filterByYear ? '70vw' : '',
          }}
        >
          {Object.keys(yearFilter).map((item, index) => {
            return (
              <button
                key={'filter-button-year ' + index}
                className="btn btn-light"
                style={{
                  margin: '5px',
                  border: 'none',
                  background: selected.year.includes(item)
                    ? 'rgba(255,134,20)'
                    : '',
                  width: '100px',
                  display: filterByYear ? 'block' : 'none',
                  padding: '2px',
                  fontSize: '13px',
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

        {/* Footer */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            bottom: '0',
            left: '0',
            position: 'fixed',
            width: '100%',
            background: 'rgba(200,200,200)',
            padding: '10px',
            zIndex: 3,
          }}
        >
          <div>
            <button
              style={{ width: '45vw' }}
              className="btn btn-light"
              onClick={() => {
                localStorage.clear('filters');
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

          <div>
            <Link
              className="btn btn-light"
              style={{ width: '45vw' }}
              // onClick={() => {
              //   console.log("Filters: ", selected);
              //   sendFilters();
              //   setShowResults(true);
              // }}
              to={{
                pathname: '/filterResult',
                filters: sendFilters(),
              }}
            >
              Apply Filters
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
