import React from "react";
import Review from "./Review.js";
import "./App.css";
import Navbar from "./Navbar.js";
import { theWitcherCommentsArray } from "./utils/response";
import { commentsObj } from "./utils/network";

const InfoPage = (props) => {
  const [rating, setRating] = React.useState();
  const [review, setReview] = React.useState("");

  const ratingRef = React.useRef();
  const reviewRef = React.useRef();
  const commentsRef = React.useRef();

  const [comments, setComments] = React.useState(theWitcherCommentsArray());

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
    <div id="moreInfoContainer">
      <Navbar />
      <div id="innerContainer">
        <img
          id="dark"
          src={props.poster}
          style={{ marginLeft: "50px" }}
          alt="Image Unavailable"
          height="400px"
          width="300px"
        />
        <div id="right">
          <h1>{props.title}</h1>
          <br />
          <br />
          <div id="infoRight">
            <p>
              <b>{props.synopsis}</b>
            </p>
            <p>
              <b>{props.director}</b>
            </p>
            <p>
              <b>{props.cast}</b>
            </p>
          </div>

          <div id="ImagesDiv">
            <b>Stream:</b>
            <a href={props.netflixLink} target="_blank">
              <img id="thumbnail" src={props.netflixIcon} height="50px" />
            </a>
            <a href={props.primeVideoLink} target="_blank">
              <img id="thumbnail" src={props.primeVideoIcon} height="50px" />
            </a>
            <a href={props.hotstarLink} target="_blank">
              <img id="thumbnail" src={props.hotstarIcon} height="50px" />
            </a>
          </div>
          <div id="ImagesDiv">
            <b>Ratings:</b>
            <a href={props.imdbLink} target="_blank">
              <img id="thumbnail" src={props.imdbIcon} height="50px" />
            </a>
            <a href={props.rottenTomatoesLink} target="_blank">
              <img
                id="thumbnail"
                src={props.rottenTomatoesIcon}
                height="50px"
              />
            </a>
          </div>
        </div>
      </div>

      <div id="embededVid">
        <iframe
          width="1000"
          height="500"
          src={props.youtubeLink}
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
            // ReactDOM.render(
            //   <Review review={newComment.comment} user={newComment.userName} />,
            //   commentsRef.current
            // );
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
  );
};

export default InfoPage;
