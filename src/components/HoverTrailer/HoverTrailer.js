import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import flickhub from './../../assets/images/logo3.jpg';

import styles from './HoverTrailer.module.css';
import { icons } from '../../constants/icons';

import ReactPlayer from 'react-player';
import VolumeOffIcon from '@material-ui/icons/VolumeOff';
import VolumeUpIcon from '@material-ui/icons/VolumeUp';

const HoverTrailer = ({
  movie_data: { movie_name, platforms, y_src, movie_id },
}) => {
  const [mute, setMute] = useState(true);

  return (
    <div className={styles.trailer}>
      <div className={styles.trailer__header}>
        <h5 className={styles.trailer__title}>{movie_name}</h5>
        <Link className={styles.trailer__more_btn} to={`/title/${movie_id}`}>
          More
        </Link>
      </div>
      <div className={styles.trailer__holder}>
        <ReactPlayer
          className={styles.youtube__trailer}
          width="100%"
          height="100%"
          url={y_src}
          playing={true}
          muted={mute}
        />
        <div
          onClick={() => setMute((mute) => !mute)}
          className={styles.volume__icon}
        >
          {mute ? (
            <VolumeOffIcon fontSize="small" />
          ) : (
            <VolumeUpIcon fontSize="small" />
          )}
        </div>
        <div className={styles.trailer__footer}>
          {platforms.NETFLIX ? (
            <a
              className={styles.platform__icon}
              href={platforms.NETFLIX}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img alt="NETFLIX_ICON" src={icons.netflixIcon} />
            </a>
          ) : null}
          {platforms.PRIME ? (
            <a
              className={styles.platform__icon}
              href={platforms.PRIME}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.primeVideoIcon} alt="PRIMEVIDEO_ICON" />
            </a>
          ) : null}
          {platforms.HOTSTAR ? (
            <a
              href={platforms.HOTSTAR}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.platform__icon}
            >
              <img src={icons.hotstarIcon} alt="HOTSTAR_ICON" />
            </a>
          ) : null}

          {platforms.SONYLIV ? (
            <a
              className={styles.platform__icon}
              href={platforms.SONYLIV}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.sonyLivIcon} alt="SONYLIV_ICON" />
            </a>
          ) : null}

          {platforms.ZEE5 ? (
            <a
              className={styles.platform__icon}
              href={platforms.ZEE5}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.zee5Icon} alt="ZEE5_ICON" />
            </a>
          ) : null}

          {platforms.EROSNOW ? (
            <a
              className={styles.platform__icon}
              href={platforms.EROSNOW}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.erosNowIcon} alt="EROSNOW_ICON" />
            </a>
          ) : null}

          {platforms.VOOT ? (
            <a
              className={styles.platform__icon}
              href={platforms.VOOT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.vootIcon} alt="VOOT_ICON" />
            </a>
          ) : null}

          {platforms.VIU ? (
            <a
              className={styles.platform__icon}
              href={platforms.VIU}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.viuIcon} alt="VIU_ICON" />
            </a>
          ) : null}

          {platforms.ALTBALAJI ? (
            <a
              className={styles.platform__icon}
              href={platforms.ALTBALAJI}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.altBalajiIcon} alt="ALTBALAJI_ICON" />
            </a>
          ) : null}
        </div>
        <a
          href={`http://localhost:3001?${y_src.substring(y_src.length - 11)}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.extension__link}
        >
          <img src={flickhub} width="25" height="25" />
        </a>
      </div>
    </div>
  );
};

export default HoverTrailer;
