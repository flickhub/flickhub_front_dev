import React from "react";

import Review from "./Review.js";
import { theWitcherCommentsArray, titles } from "./utils/response";
import { commentsObj } from "./utils/network";
import "./App.css";
import { icons } from "./constants/icons.js";

const InfoPage = (props) => {

  const {item} = props

  const [rating, setRating] = React.useState();
  const [review, setReview] = React.useState("");

  const ratingRef = React.useRef();
  const reviewRef = React.useRef();
  const commentsRef = React.useRef();

  const [comments, setComments] = React.useState(theWitcherCommentsArray());

  const hideRef = React.useRef()

  const onClick = (e) => {
    setRating(ratingRef.current.value);
    alert("Your rating: " + ratingRef.current.value + "/10");
  };

  const addReview = () => {
    if (reviewRef.current != null) {
      setReview(reviewRef.current);
    }
  };

  return (
    <div>
      {/* <Router>
    <Link to='/more'>Go</Link>
      <Route path='/more'> */}
      <div
        ref={hideRef}
        id="moreInfoContainer"
        style={{
          borderRadius: "5px",
          transition: "all 0.7s ease",
          padding: "50px",
          zIndex: "1",
        }}
      >
        <div>
          <div id="innerContainer" style={{ zIndex: "0" }}>
            <img
              id="dark"
              src={item.image}
              style={{ marginLeft: "50px" }}
              alt="Image Unavailable"
              height="400px"
              width="300px"
            />
            <div id="right">
              <h1>{item.name}</h1>
              <br />
              <br />
              <div id="infoRight">
                <p>
                  <b>{item.plot}</b>
                </p>
                <p>
                  <b>{item.cast}</b>
                </p>
                <p>
                  <b>{item.rating}</b>
                </p>
              </div>

              <div id="ImagesDiv" Link>
                <b>Stream:</b>
                <a href={item.ott.netflix} target="_blank">
                  <img
                    id="thumbnail"
                    src={item.ott.netflix == "" ? null : icons.netflixIcon}
                    height="50px"
                  />
                </a>
                <a href={item.ott.primeVideo} target="_blank">
                  <img
                    id="thumbnail"
                    src={
                      item.ott.primeVideo == "" ? null : icons.primeVideoIcon
                    }
                    height="50px"
                  />
                </a>
                <a href={item.ott.hotstar} target="_blank">
                  <img
                    id="thumbnail"
                    src={item.ott.hotstar == "" ? null : icons.hotstarIcon}
                    height="50px"
                  />
                </a>
              </div>
              <div id="ImagesDiv">
                <b>Ratings:</b>
                <a href={item.ott.imdb} target="_blank">
                  <img
                    id="thumbnail"
                    src={item.ott.imdb == "" ? null : icons.imdbIcon}
                    height="50px"
                  />
                </a>
                {/* <a
                  href={item.ott.rottenTomatoes}
                  target="_blank"
                >
                  <img
                    id="thumbnail"
                    src={item.ott.rottenTomatoes == "" ? null : icons.rottenTomatoes}
                    height="50px"
                  />
                </a> */}
              </div>
            </div>
          </div>

          <div id="embededVid">
            <iframe
              width="1000"
              height="500"
              src={item.ott.youtube}
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen="true"
            ></iframe>
          </div>

          <div id="AddComment">
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
          </div>
          <br />
          <br />

          <p style={{ marginLeft: "40px", fontSize: "50px" }}>
            <strong>Comments: </strong>
          </p>

          <div id="rev" ref={commentsRef}></div>

          {comments.map((item, index) => {
            return <Review review={item.comment} user={item.userName} />;
          })}
        </div>
      </div>
      {/* </Route></Router> */}
    </div>
  );
};

export default InfoPage;
