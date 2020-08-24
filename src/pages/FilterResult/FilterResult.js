import React, { useEffect, useState } from 'react';
import { useHistory, withRouter } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import BottomScrollListener from 'react-bottom-scroll-listener';

import styles from './FilterResult.module.css';

import MobileSpinner from './../../mobile/MobileSpinner';
import PageNotFound from './../../PageNotFound';
import SearchBar from './../../components/SearchBar/SearchBar';
import BlackFade from './../../components/BlackFade/BlackFade';
import Hover from './../../components/CardContainer/CardContainer';
import MobileHover from './../../mobile/MobileHover';

import Grid from '@material-ui/core/Grid';
import CircularProgress from '@material-ui/core/CircularProgress';

const FilterResult = ({ location: { filters } }) => {
  const [stopPageRequests, setStopPageRequests] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [respObj, setRespObj] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isFetching, setIsFetching] = useState(false);
  const [notFound, setNotFound] = useState(false);

  const history = useHistory();

  const changePageNumber = () => {
    if (!stopPageRequests) setPageNumber((pageNumber) => pageNumber + 1);
  };

  const scrollTop = () => {
    if (!filters) window.scrollTo(0, 0);
  };

  // useEffect(() => {
  //   scrollTop();
  // }, []);

  useEffect(() => {
    if (filters) localStorage.setItem('filterResult', JSON.stringify(filters));
    else if (!localStorage.getItem('filterResult')) history.goBack();
    scrollTop();
  }, []);

  useEffect(() => {
    let filterToSearch;
    if (localStorage.getItem('filterResult'))
      filterToSearch = JSON.parse(localStorage.getItem('filterResult'));
    else filterToSearch = filters;

    if (filterToSearch) {
      setIsFetching(true);

      fetch(`https://flickhub.in/filter2?page=${pageNumber}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(filterToSearch),
      })
        .then((res) => {
          return res.json();
        })
        .then((res) => {
          if (res.data.data.length === 0) setStopPageRequests(true);
          console.log(res);
          if (respObj === null) setRespObj(res.data.data);
          else {
            setRespObj([...respObj, ...res.data.data]);
          }
          res.data.length === 0 ? setNotFound(true) : setNotFound(false);
          setLoading(false);
          setIsFetching(false);
        });
    } else history.goBack();
  }, [pageNumber]);

  const mobile = useMediaQuery({ maxWidth: 1025 });

  return loading ? (
    <MobileSpinner />
  ) : notFound ? (
    <PageNotFound />
  ) : (
    <>
      {mobile ? (
        <div className={styles.result_holder}>
          <h2 className={styles.flickhub__banner__small}>
            <strong>
              Flick
              <span className={styles.primary}>Hub</span>
            </strong>
          </h2>
          <SearchBar width="90vw" marginTop="30px" mobile={true} />
        </div>
      ) : (
        <div className={styles.result_holder}>
          <h2 className={styles.flickhub__banner__small}>
            <strong>
              Flick
              <span className={styles.primary}>Hub</span>
            </strong>
          </h2>
          <SearchBar width="100vw" marginTop="30px" />
        </div>
      )}
      <BlackFade />
      <div className={styles.grid_container}>
        <Grid container spacing={1}>
          {respObj.map((item, index) => {
            return mobile ? (
              <Grid
                className={styles.grid_item_height}
                key={index}
                item
                md={3}
                sm={3}
                xs={6}
              >
                <MobileHover
                  movie_data={item}
                  key={`search-result-${item.name}`}
                />
              </Grid>
            ) : (
              <Grid
                className={styles.grid_item_height}
                key={index}
                item
                md={2}
                sm={3}
                xs={6}
              >
                <Hover movie_data={item} />
              </Grid>
            );
          })}
        </Grid>
        {isFetching ? (
          <div className={styles.spinner}>
            <CircularProgress />
          </div>
        ) : null}
      </div>
      <BottomScrollListener onBottom={changePageNumber} />
    </>
  );
};

export default withRouter(FilterResult);
