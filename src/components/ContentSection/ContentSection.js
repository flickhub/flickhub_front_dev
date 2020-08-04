import React from "react";

import styles from "./ContentSection.module.css";
import Grid from "@material-ui/core/Grid";
import Hover from "./../CardContainer/CardContainer";

const ContentSection = (props) => {
  return (
    <div className={styles.card__holder}>
      <Grid container spacing={1}>
        {props.data.map((item, index) => {
          return (
            <Grid className={styles.grid__item} key={index} item md={2} sm={6}>
              <Hover item={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default ContentSection;
