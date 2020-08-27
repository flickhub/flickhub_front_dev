import React, { useState, useEffect } from 'react';
import styles from './Movie.module.css';
import { useMediaQuery } from 'react-responsive';
import ReactPlayer from 'react-player';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

import { icons } from './../../constants/icons';
import flickhub from './../../assets/images/logo3.jpg';

import Hover from './../../components/CardContainer/CardContainer';
import MobileHover from './../../mobile/MobileHover';
import Tooltip from '@material-ui/core/Tooltip';
import Grid from '@material-ui/core/Grid';

const Movie = ({ match: { params } }) => {
  const [movieData, setMovieData] = useState(0);

  const [similarData, setSimilarData] = useState(null);

  const [mute, setMute] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [params.id]);

  useEffect(() => {
    fetch(`https://flickhub.in/title/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setMovieData(response.data.data);
        setSimilarData(response.data.similar);
      })
      .catch((error) => console.log('error', error));
  }, [params.id]);

  const mobile = useMediaQuery({ maxWidth: 790 });

  return (
    <>
      <div className={styles.movie__banner}>
        <div className={styles.movie__details}>
          <h1 className={styles.movie__title}>
            {movieData ? movieData[0].movie_name : null}
          </h1>
          <p className={styles.movie__plot}>
            {movieData
              ? movieData[0].plot
                ? movieData[0].plot
                : 'No Description is available'
              : null}
          </p>
          <div className={styles.platforms}>
            <h4>Watch it now</h4>
            <div className={styles.platforms__links}>
              {movieData ? (
                movieData[0].platforms.NETFLIX ? (
                  <a
                    href={movieData[0].platforms.NETFLIX}
                    className={styles.platform__icon}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="NETFLIX_ICON" src={icons.netflixIcon} />
                  </a>
                ) : null
              ) : null}
              {movieData ? (
                movieData[0].platforms.PRIME ? (
                  <a
                    href={movieData[0].platforms.PRIME}
                    className={styles.platform__icon}
                    style={{ marginRight: '8px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="PRIME_ICON" src={icons.primeVideoIcon} />
                  </a>
                ) : null
              ) : null}
              {movieData ? (
                movieData[0].platforms.HOTSTAR ? (
                  <a
                    href={movieData[0].platforms.HOTSTAR}
                    className={styles.platform__icon}
                    style={{ marginRight: '8px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="HOTSTAR_ICON" src={icons.hotstarIcon} />
                  </a>
                ) : null
              ) : null}
              {movieData ? (
                movieData[0].platforms.EROSNOW ? (
                  <a
                    href={movieData[0].platforms.EROSNOW}
                    className={styles.platform__icon}
                    style={{ marginRight: '8px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="HOTSTAR_ICON" src={icons.erosNowIcon} />
                  </a>
                ) : null
              ) : null}
              {movieData ? (
                movieData[0].platforms.SONYLIV ? (
                  <a
                    href={movieData[0].platforms.SONYLIV}
                    className={styles.platform__icon}
                    style={{ marginRight: '8px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="HOTSTAR_ICON" src={icons.sonyLivIcon} />
                  </a>
                ) : null
              ) : null}
              {movieData ? (
                movieData[0].platforms.ALTBALAJI ? (
                  <a
                    href={movieData[0].platforms.ALTBALAJI}
                    className={styles.platform__icon}
                    style={{ marginRight: '8px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="ALTBALAJI_ICON" src={icons.altBalajiIcon} />
                  </a>
                ) : null
              ) : null}
              {movieData ? (
                movieData[0].platforms.ZEE5 ? (
                  <a
                    href={movieData[0].platforms.ZEE5}
                    className={styles.platform__icon}
                    style={{ marginRight: '8px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="HOTSTAR_ICON" src={icons.zee5Icon} />
                  </a>
                ) : null
              ) : null}
              {movieData ? (
                movieData[0].platforms.VOOT ? (
                  <a
                    href={movieData[0].platforms.VOOT}
                    className={styles.platform__icon}
                    style={{ marginRight: '8px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="HOTSTAR_ICON" src={icons.vootIcon} />
                  </a>
                ) : null
              ) : null}
              {movieData ? (
                movieData[0].platforms.VIU ? (
                  <a
                    href={movieData[0].platforms.VIU}
                    className={styles.platform__icon}
                    style={{ marginRight: '8px' }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img alt="HOTSTAR_ICON" src={icons.viuIcon} />
                  </a>
                ) : null
              ) : null}
            </div>
          </div>
          <div className={styles.movie__cast}>
            <h4>Cast</h4>
            <div className={styles.actor__list}>
              {movieData
                ? movieData[0].cast
                  ? movieData[0].cast
                  : 'Not available'
                : null}
            </div>
          </div>
          {/* <div className={styles.imdb__rating}>
            <h4>IMDb:</h4>
            <h3>
              <span style={{ color: 'orange', marginLeft: '10px' }}>
              </span>
              <span
                style={{
                  fontSize: '20px',
                  color: '#8197a4',
                }}
              >
                /10
              </span>
            </h3>
          </div> */}
          {/* {movieData ? (
            <div className={styles.extension__link}>
              <h4>Party with friends</h4>
              <a
                href={`http://localhost:3001?${movieData[0].y_src.substring(
                  movieData[0].y_src.length - 11
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.extension__link}
              >
                <img src={flickhub} width="35" height="35" />
              </a>
            </div>
          ) : null} */}
        </div>
        <div className={styles.movie__poster}>
          <Tooltip title={mute ? 'Unmute' : 'Mute'}>
            <div
              onClick={() => setMute((mute) => !mute)}
              className={styles.volume__icon}
            >
              {mute ? (
                <VolumeOffIcon fontSize={mobile ? 'small' : 'default'} />
              ) : (
                <VolumeUpIcon fontSize={mobile ? 'small' : 'default'} />
              )}
            </div>
          </Tooltip>
          {movieData ? (
            <ReactPlayer
              className={styles.youtube__trailer}
              width="100%"
              height="100%"
              muted={mute}
              playing={true}
              autoPlay={true}
              url={movieData[0].y_src + '?autoPlay=1'}
            />
          ) : null}
        </div>
      </div>
      <div className={styles.you__may__also__like}>
        {mobile ? (
          <h5 className={styles.category__heading}>You May Also Like</h5>
        ) : (
          <h3 className={styles.category__heading}>You May Also Like</h3>
        )}

        <Grid
          container
          style={{
            paddingLeft: mobile ? '10px' : '40px',
            paddingRight: mobile ? '10px' : '40px',
          }}
        >
          {similarData
            ? similarData.map((item, index) => {
                return mobile ? (
                  <Grid
                    key={index}
                    item
                    md={3}
                    sm={3}
                    xs={6}
                    style={{ height: '180px', padding: '3px' }}
                  >
                    <MobileHover
                      movie_data={item}
                      key={`search-result-${item.name}`}
                    />
                  </Grid>
                ) : (
                  <Grid
                    key={index}
                    item
                    md={2}
                    sm={6}
                    style={{ height: '180px', marginTop: '20px' }}
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
    </>
  );
};

export default Movie;
