import React from 'react';
import { useMediaQuery } from 'react-responsive';

import SearchBar from './../../components/SearchBar/SearchBar';
import BlackFade from './../../components/BlackFade/BlackFade';
import styles from './SearchResult.module.css';
import Hover from './../../components/CardContainer/CardContainer';
import MobileHover from './../../mobile/MobileHover';

import Grid from '@material-ui/core/Grid';

const SearchResult = ({ respObj, similar, searchFor }) => {
  const mobile = useMediaQuery({ maxWidth: 1025 });

  return (
    <div className={styles.search_result}>
      <h2 className={styles.flickhub__banner__small}>
        <strong>
          Flick
          <span className={styles.orange}>Hub</span>
        </strong>
      </h2>
      <SearchBar />
      <BlackFade />
      <div className={styles.grid_container}>
        <Grid container>
          {respObj
            .filter((item) =>
              item.movie_name.toLowerCase().includes(searchFor.toLowerCase())
                ? item
                : null
            )
            .map((item) => {
              return respObj.map((name, index) => {
                if (item === name) {
                  return mobile ? (
                    <Grid
                      className={styles.grid_item}
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
                      className={styles.grid_item}
                      key={index}
                      item
                      md={2}
                      sm={6}
                    >
                      <Hover movie_data={item} key={`search-result-${name}`} />
                    </Grid>
                  );
                } else {
                  return null;
                }
              });
            })}
        </Grid>
        {similar ? (
          mobile ? (
            <h5 className={styles.category__heading}>You May Also Like</h5>
          ) : (
            <h3 className={styles.category__heading}>You May Also Like</h3>
          )
        ) : null}
        <Grid container>
          {similar
            ? similar.map((item, index) => {
                return mobile ? (
                  <Grid
                    classname={styles.grid_item}
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
                    classname={styles.grid_item}
                    key={index}
                    item
                    md={2}
                    sm={6}
                  >
                    <Hover
                      movie_data={item}
                      key={`search-result-${item.name}`}
                    />
                  </Grid>
                );
              })
            : null}
        </Grid>
      </div>
    </div>
  );
};

export default SearchResult;
