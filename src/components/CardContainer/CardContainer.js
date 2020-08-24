import React, { useState } from 'react';

import styles from './CardContainer.module.css';
import HoverTrailer from './../HoverTrailer/HoverTrailer.js';
import Card from '../Card/Card.js';

export const CardContainer = ({ movie_data }) => {
  const [hover, setHover] = useState(false);
  const [delayMouseEntered, setDelayMouseEntered] = useState(null);
  const [delayMouseExit, setDelayMouseExit] = useState(null);

  const onMouseEnter = () => {
    clearTimeout(delayMouseExit);
    setDelayMouseEntered(
      setTimeout(() => {
        setHover(true);
      }, 500)
    );
  };

  const onMouseLeave = () => {
    clearTimeout(delayMouseEntered);
    setDelayMouseExit(
      setTimeout(() => {
        setHover(false);
      }, 500)
    );
  };

  return (
    <div
      className={styles.hover_container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {hover ? (
        <HoverTrailer movie_data={movie_data} />
      ) : (
        <Card movie_data={movie_data} />
      )}
    </div>
  );
};

export default CardContainer;
