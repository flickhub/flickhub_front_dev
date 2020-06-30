import React from "react";

import { theWitcherCommentsArray } from "./utils/response";
import { commentsObj } from "./utils/network";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { icons } from "./constants/icons";
import { Route } from "react-router-dom";

const InfoPage = (props) => {
  const { item } = props;
  const [rating, setRating] = React.useState();
  const [review, setReview] = React.useState("");
  const [comments, setComments] = React.useState(theWitcherCommentsArray());

  const ratingRef = React.useRef();
  const reviewRef = React.useRef();
  const commentsRef = React.useRef();

  const hideRef = React.useRef();

  const onClick = (e) => {
    setRating(ratingRef.current.value);
    alert("Your rating: " + ratingRef.current.value + "/10");
  };

  const addReview = () => {
    if (reviewRef.current != null) {
      setReview(reviewRef.current);
    }
  };

  const mobile = useMediaQuery({minWidth: 1200})

  return (
    // <Router>
      // <Route
      //   path={`/title/${item.name}`}
      //   // exact
      //   render={() => (

    <div style={{ marginTop: "50px" }}>
      {mobile ? (
        <div
          ref={hideRef}
          id="moreInfoContainer"
          style={{
            borderRadius: "5px",
            transition: "all 0.7s ease",
            padding: "50px",
            zIndex: "1",
            overflow: "hidden",
          }}
        >
          <div>
            <div id="innerContainer" style={{ zIndex: "0" }}>
              <img
                id="dark"
                src={item.image}
                style={{ marginLeft: "50px", backgroundColor: "#202020" }}
                alt=""
                height="400px"
                width="300px"
              />
              <div id="right">
                <div>
                  <h1>{item.name}</h1>
                  <p style={{ color: "orange" }}>{item.year}</p>
                </div>
                <br />
                <br />
                <div id="infoRight">
                  <p>
                    Synopsis: <b style={{ fontSize: "18px" }}>{item.plot}</b>
                  </p>
                  <p>
                    Cast: <b style={{ fontSize: "18px" }}>{item.cast}</b>
                  </p>
                  <div style={{ display: "flex", paddingTop: "25px" }}>
                    IMDb Rating:
                    <p
                      style={{
                        color: "orange",
                        fontSize: "20px",
                        padding: "5px 10px",
                        background: "rgba(50,50,50)",
                        borderRadius: "5px",
                        // width: "6%",
                        marginLeft: "15px",
                        marginTop: "-5px",
                      }}
                    >
                      <b style={{ fontSize: "18px" }}>{item.rate}</b>
                    </p>
                  </div>
                </div>

                <div id="ImagesDiv" Link>
                  Stream:
                  <a
                    // href={item.ott.netflix}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt=""
                      id="thumbnail"
                      // src={item.ott.netflix === "" ? null : icons.netflixIcon}
                      height="50px"
                    />
                  </a>
                  <a
                    // href={item.ott.primeVideo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt=""
                      id="thumbnail"
                      // src={
                      // item.ott.primeVideo === "" ? null : icons.primeVideoIcon
                      // }
                      height="50px"
                    />
                  </a>
                  <a
                    // href={item.ott.hotstar}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt=""
                      id="thumbnail"
                      // src={item.ott.hotstar === "" ? null : icons.hotstarIcon}
                      height="50px"
                    />
                  </a>
                </div>
                <div id="ImagesDiv">
                  IMDb page:
                  <a
                    // href={item.ott.imdb}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      alt=""
                      id="thumbnail"
                      // src={item.ott.imdb === "" ? null : icons.imdbIcon}
                      height="50px"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div id="embededVid">
              {/* <iframe
            title="youtubeTrailer"
              width="1000"
              height="500"
              // src={item.ott.youtube}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe> */}

              {/* <div
              style={{
                background: "rgba(1,1,1)",
                height: "500px",
                width: "1000px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "100px" }}>Trailer coming soon</h1>
            </div> */}
            </div>

            {/* <div id="AddComment">
            <div id="rate">
              <h1 style={{ color: "white", fontSize: "75px" }}>Rate</h1>
              <select ref={ratingRef}>
                <option ref={ratingRef} value="1">
                  1
                </option>
                <option ref={ratingRef} value="2">
                  2
                </option>
                <option ref={ratingRef} value="3">
                  3
                </option>
                <option ref={ratingRef} value="4">
                  4
                </option>
                <option ref={ratingRef} value="5">
                  5
                </option>
                <option ref={ratingRef} value="6">
                  6
                </option>
                <option ref={ratingRef} value="7">
                  7
                </option>
                <option ref={ratingRef} value="8">
                  8
                </option>
                <option ref={ratingRef} value="9">
                  9
                </option>
                <option ref={ratingRef} value="10">
                  10
                </option>
              </select>
              <button className="btn btn-primary" onClick={(e) => onClick(e)}>
                Submit
              </button>
            </div>

            <input
              type="text"
              placeholder="Add Review..."
              id="commentInput"
              ref={reviewRef}
              onChange={(e) => {
                setReview(e.target.value);
                console.log(review);
              }}
            />
            <br />
            <button
              className="btn btn-danger"
              onClick={() => {
                const newComment = new commentsObj(review, "User21");
                setComments([newComment, ...comments]);
                reviewRef.current.value = "";
              }}
            >
              Submit
            </button>
          </div> */}
            {/* <br />
          <br />

          <p style={{ marginLeft: "40px", fontSize: "50px" }}>
            <strong>Comments: </strong>
          </p>

          <div id="rev" ref={commentsRef}></div>

          {comments.map((item, index) => {
            return <Review review={item.comment} user={item.userName} key={`comment-${index}`} />;
          })} */}
          </div>
        </div>
      ) : (
        //Mobile
        <div
          style={{
            marginTop: "100px",
            backgroundColor: "rgba(1,1,1,0.8)",
            width: "90vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "50px 0px",
          }}
        >
          {/* Poster */}
          <div
            style={{
              height: "250px",
              width: "100vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={item.image} />
          </div>

          <div style={{ marginTop: "50px" }}></div>

          {/* IMDb Page */}
          <div
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "10px 40px",
            }}
          >
            <h3>IMDb Page</h3>
            <div
              style={{
                width: "75vw",
                padding: "20px",
                background: "rgba(60,60,60,0.8)",
                borderRadius: "5px",
              }}
            >
              {/* <p>{item.plot}</p> */}

              <div>
                <a
                  // href={item.ott.imdb}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt=""
                    id="thumbnail"
                    // src={item.ott.imdb === "" ? null : icons.imdbIcon}
                    height="50px"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "40px",
            }}
          >
            <h3>Synopsis</h3>
            <div
              style={{
                width: "75vw",
                padding: "20px",
                background: "rgba(60,60,60,0.8)",
                borderRadius: "5px",
              }}
            >
              <p>{item.plot}</p>
            </div>
          </div>

          {/* Cast */}
          <div
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "40px",
            }}
          >
            <h3>Cast</h3>
            <div
              style={{
                width: "75vw",
                padding: "20px",
                background: "rgba(60,60,60,0.8)",
                borderRadius: "5px",
              }}
            >
              <p>{item.cast}</p>
            </div>
          </div>

          {/* Stream */}
          <div
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "40px",
            }}
          >
            <h3>Stream</h3>
            <div
              style={{
                width: "75vw",
                padding: "20px",
                background: "rgba(60,60,60,0.8)",
                borderRadius: "5px",
                overflow: "scroll",
                display: "flex",
                justifyContent: "center", 
                alignItems: "center"
              }}
            >
              <a
                href={item.urlname}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  id="thumbnail"
                  src={icons.netflixIcon}
                  height="50px"
                />
              </a>
              <a
                // href={item.ott.primeVideo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  id="thumbnail"
                  // src={
                  // item.ott.primeVideo === "" ? null : icons.primeVideoIcon
                  // }
                  height="50px"
                />
              </a>
              <a
                // href={item.ott.hotstar}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  id="thumbnail"
                  // src={item.ott.hotstar === "" ? null : icons.hotstarIcon}
                  height="50px"
                />
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
    // )}
      // />
    // </Router>
  );
};

export default InfoPage;
