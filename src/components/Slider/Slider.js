import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SlickSlider from 'react-slick';

import styles from './Slider.module.css';
import Hover from '../CardContainer/CardContainer';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BackArrow = ({ className, style, hide, onClick }) => {
  return (
    <div
      className={className}
      style={{
        display: hide ? 'none' : 'block',
        backgroundColor: 'transparent !important',
      }}
      onClick={onClick}
    ></div>
  );
};

const NextArrow = ({ className, style, hide, onClick }) => {
  return (
    <div
      className={className}
      style={{
        ...style,
        display: hide ? 'none' : 'block',
      }}
      onClick={onClick}
    ></div>
  );
};

const Slider = ({ category, respObj }) => {
  const [hideBackArrow, setHideBackArrow] = useState(true);
  const [hideFrontArrow, setHideFrontArrow] = useState(false);

  const show = (oldIndex) => {
    if (oldIndex === 0) {
      setHideBackArrow((hideBackArrow) => !hideBackArrow);
      setHideFrontArrow((hideFrontArrow) => !hideFrontArrow);
    } else if (oldIndex === 5) {
      setHideFrontArrow((hideFrontArrow) => !hideFrontArrow);
      setHideBackArrow((hideBackArrow) => !hideBackArrow);
    } else if (oldIndex === 4) {
      setHideFrontArrow((hideFrontArrow) => !hideFrontArrow);
      setHideBackArrow((hideBackArrow) => !hideBackArrow);
    }
  };

  return (
    <div className={styles.slider_container}>
      <SlickSlider
        {...{
          dots: false,
          infinite: false,
          arrows: true,
          speed: 500,
          slidesToShow: 6,
          slidesToScroll: 6,
          nextArrow: <NextArrow hide={hideFrontArrow} />,
          prevArrow: <BackArrow hide={hideBackArrow} />,
          afterChange: show,
        }}
      >
        {respObj[category].map((item, index) => {
          return (
            <div className={styles.grid__item} key={index}>
              <Hover movie_data={item} />
            </div>
          );
        })}
        {category !== 'flickhub_fav' ? (
          <div className={styles.more__link}>
            <Link
              className={styles.see__more}
              to={{
                pathname: '/filterResult',
                filters: {
                  params: {
                    genre_bool: true,
                    genres: `'${category}'`,
                  },
                },
              }}
            >
              See More
              <div className={styles.more__icon}>
                <NavigateNextIcon fontSize="large" />
              </div>
            </Link>
          </div>
        ) : null}
      </SlickSlider>
    </div>
  );
};

export default Slider;
