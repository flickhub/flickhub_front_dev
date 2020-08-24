import React, { useState, useEffect } from 'react';
import styles from './Index.module.css';

import SearchBar from './../../components/SearchBar/SearchBar';
import BlackFade from './../../components/BlackFade/BlackFade';
import Slider from './../../components/Slider/Slider';
import Skeleton from '@material-ui/lab/Skeleton';

const Index = () => {
  const [respObj, setRespObj] = useState(null);

  useEffect(() => {
    fetch('https://flickhub.in/randomdata', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setRespObj(response.data.data);
      })
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <>
      <div className={styles.hero__section}>
        <h2 className={styles.flickhub__banner}>
          <strong>
            Flick
            <span className={styles.orange}>Hub</span>
          </strong>
        </h2>
        <p className={styles.tagline}>Nobody searches it better!</p>
        <SearchBar width="100vw" marginTop="0px" />
        <p className={styles.instruction}>
          Looking for something to watch?
          <br />
          Type in the name and witness the magic unfold!!
        </p>
      </div>
      <BlackFade />
      <div className={styles.category__holder}>
        {respObj ? (
          <>
            <h3 className={styles.category__heading}>FlickHub Recommends</h3>
            <Slider category="flickhub_fav" respObj={respObj} />
            <h3 className={styles.category__heading}>Action</h3>
            <Slider category="action" respObj={respObj} />
            <h3 className={styles.category__heading}>Adventure</h3>
            <Slider category="adventure" respObj={respObj} />
            <h3 className={styles.category__heading}>Animation</h3>
            <Slider category="animation" respObj={respObj} />
            <h3 className={styles.category__heading}>Comedy</h3>
            <Slider category="comedy" respObj={respObj} />
            <h3 className={styles.category__heading}>Horror</h3>
            <Slider category="horror" respObj={respObj} />
          </>
        ) : (
          <div className={styles.skeleton__holder}>
            <Skeleton
              className={styles.skeleton}
              variant="rect"
              width={226}
              height={128}
            />
            <Skeleton
              className={styles.skeleton}
              variant="rect"
              width={226}
              height={128}
            />
            <Skeleton
              className={styles.skeleton}
              variant="rect"
              width={226}
              height={128}
            />
            <Skeleton
              className={styles.skeleton}
              variant="rect"
              width={226}
              height={128}
            />
            <Skeleton
              className={styles.skeleton}
              variant="rect"
              width={226}
              height={128}
            />
            <Skeleton
              className={styles.skeleton}
              variant="rect"
              width={226}
              height={128}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
