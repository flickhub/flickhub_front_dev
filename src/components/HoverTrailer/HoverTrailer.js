import React from "react";

import styles from "./HoverTrailer.module.css";

import "./../../App.css";
import { icons } from "../../constants/icons";

const HoverTrailer = (props) => {
  const { item } = props;

  return (
    <div className={styles.hover__trailer}>
      <div className={styles.header}>
        <h5 className={styles.title}>{item.name}</h5>
        <a className={styles.more__btn} href="https://flickhub.in/">
          More
        </a>
      </div>
      <iframe
        title={item.name}
        className={styles.youtube__trailer}
        src={item.trailer + "?autoplay=1&mute=1&enablejsapi=1"}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
      <div className={styles.footer}>
        {item.urlname.NETFLIX ? (
          <a
            className={styles.platform__icon}
            href={item.urlname.NETFLIX}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img alt="NETFLIX_ICON" src={icons.netflixIcon} />
          </a>
        ) : null}
        {item.urlname.PRIME ? (
          <a
            className={styles.platform__icon}
            href={item.urlname.PRIME}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.primeVideoIcon} alt="PRIMEVIDEO_ICON" />
          </a>
        ) : null}
        {item.urlname.HOTSTAR ? (
          <a
            href={item.urlname.HOTSTAR}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.platform__icon}
          >
            <img src={icons.hotstarIcon} alt="HOTSTAR_ICON" />
          </a>
        ) : null}

        {item.urlname.SONYLIV ? (
          <a
            className={styles.platform__icon}
            href={item.urlname.SONYLIV}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.sonyLivIcon} alt="SONYLIV_ICON" />
          </a>
        ) : null}

        {item.urlname.ZEE5 ? (
          <a
            className={styles.platform__icon}
            href={item.urlname.ZEE5}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.zee5Icon} alt="ZEE5_ICON" />
          </a>
        ) : null}

        {item.urlname.EROSNOW ? (
          <a
            className={styles.platform__icon}
            href={item.urlname.EROSNOW}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.erosNowIcon} alt="EROSNOW_ICON" />
          </a>
        ) : null}

        {item.urlname.VOOT ? (
          <a
            className={styles.platform__icon}
            href={item.urlname.VOOT}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.vootIcon} alt="VOOT_ICON" />
          </a>
        ) : null}

        {item.urlname.VIU ? (
          <a
            className={styles.platform__icon}
            href={item.urlname.VIU}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.viuIcon} alt="VIU_ICON" />
          </a>
        ) : null}

        {item.urlname.ALTBALAJI ? (
          <a
            className={styles.platform__icon}
            href={item.urlname.ALTBALAJI}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={icons.altBalajiIcon} alt="ALTBALAJI_ICON" />
          </a>
        ) : null}
      </div>
    </div>
  );
};

export default HoverTrailer;
