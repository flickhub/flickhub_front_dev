import React from 'react';
import { useLocation } from 'react-router-dom';

import styles from './Footer.module.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

const Footer = () => {
  const location = useLocation();

  return !location.pathname.startsWith('/search') ? (
    <div className={styles.footer}>
      {/* <div className={styles.footer__items}>
      <Grid className={styles.footer__items__holder} container>
        <Grid item md={3}>
          <h4 style={{ color: '#fff' }}>About Us</h4>
          <ul className={styles.list}>
            <li>Our Team</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Newsroom</li>
          </ul>
        </Grid>
      </Grid>
    </div> */}
      <div className={styles.footer__links}>
        <a href="https://flickhub.in/" rel="noopener noreferrer">
          About
        </a>
        <a href="https://flickhub.in/" rel="noopener noreferrer">
          Need Help?
        </a>
        <a href="https://flickhub.in/" rel="noopener noreferrer">
          Content Guide
        </a>
        <a href="https://flickhub.in/" rel="noopener noreferrer">
          Privacy
        </a>
        <a href="https://flickhub.in/" rel="noopener noreferrer">
          Terms of Use
        </a>
        <a href="https://flickhub.in/" rel="noopener noreferrer">
          Advertising
        </a>
        <a href="https://flickhub.in/" rel="noopener noreferrer">
          Jobs
        </a>
      </div>
      <div className={styles.social_media__icons}>
        <a
          className={styles.icon__link}
          href="https://www.facebook.com/flickhub.in/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FacebookIcon className={styles.icon} />
        </a>
        <a
          className={styles.icon__link}
          href="https://www.instagram.com/flickhub.in/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <InstagramIcon className={styles.icon} />
        </a>
        <a
          className={styles.icon__link}
          href="https://twitter.com/flickhub_in"
          rel="noopener noreferrer"
          target="_blank"
        >
          <TwitterIcon className={styles.icon} />
        </a>
      </div>

      <div className={styles.copyright}>
        &copy; 2020 Flick<span style={{ color: '#ffa500' }}>Hub</span>
      </div>
    </div>
  ) : null;
};

export default Footer;
