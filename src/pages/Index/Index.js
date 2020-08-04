import React from "react";
import BlackFade from "./../../components/BlackFade/BlackFade";

import styles from "./Index.module.css";

import Hover from "./../../components/CardContainer/CardContainer";
import Shimmer from "./../../Shimmer";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./../../components/SearchBar/SearchBar";
import CardHolder from "./../../components/ContentSection/ContentSection";
import MobileHover from "./../../mobile/MobileHover";
import { useMediaQuery } from "react-responsive";

const Index = () => {
  const [respObj, setRespObj] = React.useState(null);

  React.useEffect(() => {
    fetch("https://flickhub.in/random", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setRespObj(response))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <div className={styles.hero__section}>
        <h2 className={styles.flickhub__banner}>
          <strong>
            Flick
            <span className={styles.orange}>Hub</span>
          </strong>
        </h2>
        <p className={styles.tagline}>Nobody searches it better!</p>
        <SearchBar width="100vw" marginTop="0px" />
        <p className={styles.instruction}>
          Looking for something to watch?
          <br />
          Type in the name and witness the magic unfold!!
        </p>
      </div>
      <BlackFade />
      {respObj ? <CardHolder data={respObj.data} /> : <Shimmer />}
    </>
  );
};

export const SearchItem = (props) => {
  const mobile = useMediaQuery({ maxWidth: 1025 });

  const items = () => {
    return props.respObj
      .filter((item) => {
        if (
          item.movie_name.toLowerCase().includes(props.searchFor.toLowerCase())
        ) {
          return item;
        } else {
          return null;
        }
      })
      .map((item) => {
        return props.respObj.map((name, index) => {
          if (item === name) {
            const newItem = {
              name: item.movie_name,
              image: item.img,
              urlname: item.platforms,
              trailer: item.y_src,
            };
            return mobile ? (
              <Grid
                key={index}
                item
                md={3}
                sm={3}
                xs={6}
                style={{ height: "180px" }}
              >
                <MobileHover
                  item={newItem}
                  key={`search-result-${item.name}`}
                />
              </Grid>
            ) : (
              <Grid key={index} item md={2} sm={6} style={{ height: "180px" }}>
                <Hover item={newItem} key={`search-result-${name}`} />
              </Grid>
            );
          } else {
            return null;
          }
        });
      });
  };

  return props.respObj ? (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        flexDirection: "column",
        width: "100vw",
        marginTop: "25px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100vw",
        }}
      >
        <SearchBar
          width={props.mobileCard ? "90vw" : "100vw"}
          marginTop={props.mobileCard ? "100px" : "30px"}
        />
      </div>
      <BlackFade />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#141414",
          width: "100vw",
          paddingTop: "30px",
          paddingBottom: "110px",
          paddingLeft: props.mobileCard ? "10px" : "110px",
          paddingRight: props.mobileCard ? "10px" : "110px",
          minHeight: "650px",
        }}
      >
        <Grid container spacing={1}>
          {items()}
        </Grid>
      </div>
    </div>
  ) : (
    <p>Loading . . .</p>
  );
};

export default Index;
