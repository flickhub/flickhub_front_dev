import React, { useState, useEffect } from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from './FilteredSearch.module.css';
import { icons } from './../../constants/icons';

const FilteredSearch = (props) => {
  const [selected, setSelected] = useState({
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

  useEffect(() => {
    if (localStorage.getItem('filters')) {
      setSelected(JSON.parse(localStorage.getItem('filters')));
    }
  }, []);

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

  const ratingFilter = {
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

  const genreFilter = {
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

    const filters = {
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

    return filters;
  };

  useEffect(() => {
    localStorage.setItem('filters', JSON.stringify(selected));
  }, [selected]);

  return (
    <div className={styles.filter}>
      <div className={styles.filter__action__holder}>
        <button
          className={styles.filter__action}
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
        <Link
          className={styles.filter__action}
          to={{
            pathname: '/filterResult',
            filters: sendFilters(),
          }}
        >
          Apply Filters
        </Link>
      </div>
      <h4 className={styles.filter__heading}>Filter By Streaming Service</h4>
      <div className={styles.platforms}>
        <img
          className={styles.platform__icon}
          style={{
            filter: !selected.NETFLIX ? 'grayscale(90%)' : 'grayscale(0%)',
            opacity: !selected.NETFLIX ? '0.8' : '1',
          }}
          src={icons.netflixIcon}
          alt="NETFLIX"
          onClick={(e) => {
            setSelected({ ...selected, NETFLIX: !selected.NETFLIX });
          }}
        />
        <img
          className={styles.platform__icon}
          style={{
            filter: !selected.PRIME ? 'grayscale(90%)' : 'grayscale(0%)',
            opacity: !selected.PRIME ? '0.8' : '1',
          }}
          src={icons.primeVideoIcon}
          alt="PRIME"
          onClick={(e) => {
            setSelected({ ...selected, PRIME: !selected.PRIME });
          }}
        />
        <img
          className={styles.platform__icon}
          style={{
            filter: !selected.HOTSTAR ? 'grayscale(90%)' : 'grayscale(0%)',
            opacity: !selected.HOTSTAR ? '0.8' : '1',
          }}
          src={icons.hotstarIcon}
          alt="HOTSTAR"
          onClick={(e) => {
            setSelected({ ...selected, HOTSTAR: !selected.HOTSTAR });
          }}
        />
        <img
          className={styles.platform__icon}
          style={{
            filter: !selected.EROSNOW ? 'grayscale(90%)' : 'grayscale(0%)',
            opacity: !selected.EROSNOW ? '0.8' : '1',
          }}
          src={icons.erosNowIcon}
          alt="EROSNOW"
          onClick={(e) => {
            setSelected({ ...selected, EROSNOW: !selected.EROSNOW });
            !selected.EROSNOW ? highlightSelected(e) : unhighlightSelected(e);
          }}
        />
        <img
          className={styles.platform__icon}
          style={{
            filter: !selected.SONYLIV ? 'grayscale(90%)' : 'grayscale(0%)',
            opacity: !selected.SONYLIV ? '0.8' : '1',
          }}
          src={icons.sonyLivIcon}
          alt="SONYLIV"
          onClick={(e) => {
            setSelected({ ...selected, SONYLIV: !selected.SONYLIV });
            !selected.SONYLIV ? highlightSelected(e) : unhighlightSelected(e);
          }}
        />
        <img
          alt="ALTBALAJI"
          className={styles.platform__icon}
          style={{
            filter: !selected.ALTBALAJI ? 'grayscale(90%)' : 'grayscale(0%)',
            opacity: !selected.ALTBALAJI ? '0.8' : '1',
          }}
          src={icons.altBalajiIcon}
          onClick={(e) => {
            setSelected({ ...selected, ALTBALAJI: !selected.ALTBALAJI });
            !selected.ALTBALAJI ? highlightSelected(e) : unhighlightSelected(e);
          }}
        />
        <img
          alt="ZEE5"
          className={styles.platform__icon}
          style={{
            filter: !selected.ZEE5 ? 'grayscale(90%)' : 'grayscale(0%)',
            opacity: !selected.ZEE5 ? '0.8' : '1',
          }}
          src={icons.zee5Icon}
          onClick={(e) => {
            setSelected({ ...selected, ZEE5: !selected.ZEE5 });
            !selected.ZEE5 ? highlightSelected(e) : unhighlightSelected(e);
          }}
        />
        <img
          alt="VOOT"
          className={styles.platform__icon}
          style={{
            filter: !selected.VOOT ? 'grayscale(90%)' : 'grayscale(0%)',
            opacity: !selected.VOOT ? '0.8' : '1',
          }}
          src={icons.vootIcon}
          onClick={(e) => {
            setSelected({ ...selected, VOOT: !selected.VOOT });
            !selected.VOOT ? highlightSelected(e) : unhighlightSelected(e);
          }}
        />
        <img
          className={styles.platform__icon}
          style={{
            filter: !selected.VIU ? 'grayscale(90%)' : 'grayscale(0%)',
            opacity: !selected.VIU ? '0.8' : '1',
          }}
          alt="VIU"
          src={icons.viuIcon}
          onClick={(e) => {
            setSelected({ ...selected, VIU: !selected.VIU });
            !selected.VIU ? highlightSelected(e) : unhighlightSelected(e);
          }}
        />
      </div>
      <h4 className={styles.filter__heading}>Filter By Rating</h4>
      <div className={styles.filter__category_container}>
        {Object.keys(ratingFilter).map((item) => {
          return (
            <button
              key={'filter-button-rating' + item}
              className={styles.filter_btn}
              style={{
                background: selected.rating.includes(item)
                  ? getComputedStyle(document.documentElement).getPropertyValue(
                      '--primary'
                    )
                  : '#fff',
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
      <h4 className={styles.filter__heading}>Filter By Genre</h4>
      <div className={styles.filter__category_container}>
        {Object.keys(genreFilter).map((item, index) => {
          return (
            <button
              key={'filter-button-genre' + index}
              className={styles.filter_btn}
              style={{
                background: selected.genre.includes(genreFilter[item])
                  ? '#ffa500'
                  : '#fff',
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
      <h4 className={styles.filter__heading}>Filter By Year</h4>
      <div className={styles.filter__category_container}>
        {Object.keys(yearFilter).map((item, index) => {
          return (
            <button
              key={'filter-button-year ' + index}
              className={styles.filter_btn}
              style={{
                background: selected.year.includes(item)
                  ? getComputedStyle(document.documentElement).getPropertyValue(
                      '--primary'
                    )
                  : '#fff',
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

      <div className={styles.filter__action__holder}>
        <button
          className={styles.filter__action}
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

        <Link
          className={styles.filter__action}
          to={{
            pathname: '/filterResult',
            filters: sendFilters(),
          }}
        >
          Apply Filters
        </Link>
      </div>
    </div>
  );
};

export default withRouter(FilteredSearch);
