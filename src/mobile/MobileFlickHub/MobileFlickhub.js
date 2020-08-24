import React from 'react';

import MobileHover from '../MobileHover';
import BlackFade from '../../components/BlackFade/BlackFade';
import SearchBar from '../../components/SearchBar/SearchBar';

import Skeleton from '@material-ui/lab/Skeleton';

import styles from './MobileFlickhub.module.css';

export const logoStlye = {
  color: 'white',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '75px',
};

const MobileFlickhub = (props) => {
  const [categoryData, setCategoryData] = React.useState(null);

  React.useEffect(() => {
    fetch('http://flickhub.in/randomdata', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      // .then((response) => console.log("Random ", response))
      .then((response) => setCategoryData(response.data.data))
      .catch((error) => console.log('error', error));
  }, []);

  return (
    <div style={logoStlye}>
      <div style={logoStlye}>
        <h1 className={styles.flickhub__banner}>
          <strong>
            Flick<span style={{ color: 'orange' }}>Hub</span>
          </strong>
        </h1>
        <span style={{ fontSize: '18px', marginTop: '-10px' }}>
          Nobody searches it better
        </span>
      </div>
      <SearchBar width="90vw" marginTop="40px" mobile={true} />

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <p
          style={{
            fontSize: '17px',
            color: 'white',
            marginTop: '20px',
            wordWrap: 'break-word',
            textAlign: 'center',
            fontStyle: 'italic',
            width: '70%',
          }}
        >
          Looking for something to watch?
          <br />
          Type in the name and witness the magic unfold!!
        </p>
      </div>
      <BlackFade />
      <div
        style={{
          backgroundColor: '#141414',
          paddingTop: '40px',
        }}
      >
        {/* <Grid container spacing={1}>
          {respObj ? (
            respObj.data.map((item, index) => {
              return (
                <Grid
                  key={index}
                  item
                  md={3}
                  sm={3}
                  xs={6}
                  style={{ height: "180px" }}
                >
                  <MobileHover item={item} key={`search-result-${item.name}`} />
                </Grid>
              );
            })
          ) : (
            <Shimmer />
          )}
        </Grid> */}
        <h5 className={styles.category__heading}>FlickHub Recommends</h5>
        <div className={styles.slider__container}>
          {categoryData ? (
            categoryData.flickhub_fav.map((item, index) => {
              return (
                <div className={styles.grid__item} key={index}>
                  <MobileHover
                    movie_data={item}
                    key={`search-result-${item.name}`}
                  />
                </div>
              );
            })
          ) : (
            <div
              style={{
                display: 'flex',
                width: '100vw',
                //padding: '10px 40px',
                zIndex: '1',
              }}
            >
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
            </div>
          )}
        </div>
        <h5 className={styles.category__heading}>Action</h5>
        <div className={styles.slider__container}>
          {categoryData ? (
            categoryData.action.map((item, index) => {
              return (
                <div className={styles.grid__item} key={index}>
                  <MobileHover
                    movie_data={item}
                    key={`search-result-${item.name}`}
                  />
                </div>
              );
            })
          ) : (
            <div
              style={{
                display: 'flex',
                width: '100vw',
                //padding: '10px 40px',
                zIndex: '1',
              }}
            >
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
            </div>
          )}
        </div>
        <h5 className={styles.category__heading}>Adventure</h5>
        <div className={styles.slider__container}>
          {categoryData ? (
            categoryData.adventure.map((item, index) => {
              return (
                <div className={styles.grid__item} key={index}>
                  <MobileHover
                    movie_data={item}
                    key={`search-result-${item.name}`}
                  />
                </div>
              );
            })
          ) : (
            <div
              style={{
                display: 'flex',
                width: '100vw',
                //padding: '10px 40px',
                zIndex: '1',
              }}
            >
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
            </div>
          )}
        </div>
        <h5 className={styles.category__heading}>Animation</h5>
        <div className={styles.slider__container}>
          {categoryData ? (
            categoryData.animation.map((item, index) => {
              return (
                <div className={styles.grid__item} key={index}>
                  <MobileHover
                    movie_data={item}
                    key={`search-result-${item.name}`}
                  />
                </div>
              );
            })
          ) : (
            <div
              style={{
                display: 'flex',
                width: '100vw',
                //padding: '10px 40px',
                zIndex: '1',
              }}
            >
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
            </div>
          )}
        </div>
        <h5 className={styles.category__heading}>Comedy</h5>
        <div className={styles.slider__container}>
          {categoryData ? (
            categoryData.comedy.map((item, index) => {
              return (
                <div className={styles.grid__item} key={index}>
                  <MobileHover
                    movie_data={item}
                    key={`search-result-${item.name}`}
                  />
                </div>
              );
            })
          ) : (
            <div
              style={{
                display: 'flex',
                width: '100vw',
                //padding: '10px 40px',
                zIndex: '1',
              }}
            >
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
            </div>
          )}
        </div>
        <h5 className={styles.category__heading}>Horror</h5>
        <div className={styles.slider__container}>
          {categoryData ? (
            categoryData.horror.map((item, index) => {
              return (
                <div className={styles.grid__item} key={index}>
                  <MobileHover
                    movie_data={item}
                    key={`search-result-${item.name}`}
                  />
                </div>
              );
            })
          ) : (
            <div
              style={{
                display: 'flex',
                width: '100vw',
                //padding: '10px 40px',
                zIndex: '1',
              }}
            >
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
              <Skeleton
                className={styles.skeleton}
                variant="rect"
                width={160}
                height={128}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileFlickhub;
