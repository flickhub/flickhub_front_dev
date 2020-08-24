import React from 'react';

import styles from './Card.module.css';
import flickhub from './../../assets/images/logo3.jpg';
import { icons } from '../../constants/icons';

const Card = ({ movie_data: { movie_name, img, platforms } }) => {
  return (
    <div className={styles.card}>
      <div className={styles.card__poster}>
        <img
          className={styles.card__poster__img}
          src={img ? img : flickhub}
          alt={img ? 'poster' : 'no-poster'}
        />
        <div className={styles.platforms}>
          {platforms.NETFLIX ? (
            <a
              className={styles.platforms__icon}
              href={platforms.NETFLIX}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.netflixIcon} alt="NETFLIX_ICON" />
            </a>
          ) : null}
          {platforms.PRIME ? (
            <a
              className={styles.platforms__icon}
              href={platforms.PRIME}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.primeVideoIcon} alt="PRIME_ICON" />
            </a>
          ) : null}
          {platforms.HOTSTAR ? (
            <a
              className={styles.platforms__icon}
              href={platforms.HOTSTAR}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.hotstarIcon} alt="HOTSTAR_ICON" />
            </a>
          ) : null}
          {platforms.SONYLIV ? (
            <a
              className={styles.platforms__icon}
              href={platforms.SONYLIV}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.sonyLivIcon} alt="SONYLIV_ICON" />
            </a>
          ) : null}
          {platforms.ZEE5 ? (
            <a
              className={styles.platforms__icon}
              href={platforms.ZEE5}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.zee5Icon} alt="ZEE5_ICON" />
            </a>
          ) : null}

          {platforms.EROSNOW ? (
            <a
              className={styles.platforms__icon}
              href={platforms.EROSNOW}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.erosNowIcon} alt="EROSNOW_ICON" />
            </a>
          ) : null}

          {platforms.VOOT ? (
            <a
              className={styles.platforms__icon}
              href={platforms.VOOT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.vootIcon} alt="VOOT_ICON" />
            </a>
          ) : null}

          {platforms.VIU ? (
            <a
              className={styles.platforms__icon}
              href={platforms.VIU}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.viuIcon} alt="VIU_ICON" />
            </a>
          ) : null}

          {platforms.ALTBALAJI ? (
            <a
              className={styles.platforms__icon}
              href={platforms.ALTBALAJI}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={icons.altBalajiIcon} alt="ALTBALAJI_ICON" />
            </a>
          ) : null}
        </div>
      </div>
      <h6 className={styles.card__title}>{movie_name}</h6>
    </div>
  );
};

export default Card;
