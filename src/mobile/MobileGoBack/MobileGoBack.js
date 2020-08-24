import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';

import styles from './MobileGoBack.module.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

const MobileGoBack = (props) => {
  const history = useHistory();

  return props.location.pathname !== '/' ? (
    <div
      className={`${styles.goBack__container} ${
        history.location.pathname.startsWith('/title') ? styles.black : ''
      }`}
    >
      <button className={styles.goBack__btn} onClick={history.goBack}>
        <ArrowBackIosIcon />
        <span>Back</span>
      </button>
    </div>
  ) : null;
};

export default withRouter(MobileGoBack);
