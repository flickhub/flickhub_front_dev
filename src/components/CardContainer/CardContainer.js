import React from "react";

import styles from "./CardContainer.module.css";

import Watch from "./../HoverTrailer/HoverTrailer.js";
import CardInitial from "./../../CardInitial.js";
import { useMediaQuery } from "react-responsive";

export const CardContainer = (props) => {
  const { item } = props;

  const [hover, setHover] = React.useState(false);
  const [delayMouseEntered, setDelayMouseEntered] = React.useState(null);
  const [delayMouseExit, setDelayMouseExit] = React.useState(null);

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
      className={styles.hover__container}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {useMediaQuery({ maxWidth: 790 }) ? (
        <CardInitial
          title={item.name}
          poster={item.image}
          urlname={item.urlname}
          mobile={true}
        />
      ) : hover ? (
        <Watch item={item} />
      ) : (
        <CardInitial
          title={item.name}
          poster={item.image}
          urlname={item.urlname}
        />
      )}
    </div>
  );
};

export default CardContainer;
