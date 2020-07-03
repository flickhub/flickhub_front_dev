import React from 'react'
import { useMediaQuery } from 'react-responsive';

const QuickReview = props => {

  const mobile = useMediaQuery({minWidth: 790})

    return (
      <div
        style={{
          border: "1px solid white",
          padding: "20px 50px",
          transition: "all 1s ease",
          borderRadius: "5px",
        }}
      >
        <a href="#">
          <li
            value="satisfactory"
            className="fas fa-frown"
            style={{
              fontSize: mobile ? "75px" : "30px",
              transition: "all 0.5s ease",
              color: "rgba(255,134,20)",
              padding: "10px",
            }}
            onClick={(e) => {
              props.setRating(1);
            }}
          ></li>
        </a>
        <a href="#">
          <li
            value="unsatisfactory"
            className="fas fa-angry"
            style={{
              fontSize: mobile ? "75px" : "30px",
              transition: "all 0.5s ease",
              color: "rgba(255,134,20)",
              padding: "10px",
            }}
            onClick={(e) => {
              props.setRating(2);
            }}
          ></li>
        </a>
        <a href="#">
          <li
            className="fa fa-thumbs-up"
            value="happy"
            style={{
              fontSize: mobile ? "75px" : "30px",
              transition: "all 0.5s ease",
              color: "rgba(255,134,20)",
              padding: "10px",
            }}
            onClick={(e) => {
              props.setRating(3);
            }}
          ></li>
        </a>
        <a href="#">
          <li
            className="fas fa-grin-alt"
            value="thumbs-up"
            style={{
              fontSize: mobile ? "75px" : "30px",
              transition: "all 0.5s ease",
              color: "rgba(255,134,20)",
              padding: "10px",
            }}
            onClick={(e) => {
              props.setRating(4);
            }}
          ></li>
        </a>
        <a href="#">
          <li
            className="fas fa-grin-hearts"
            value="grin-hearts"
            style={{
              fontSize: mobile ? "75px" : "30px",
              transition: "all 0.5s ease",
              color: "rgba(255,134,20)",
              padding: "10px",
            }}
            onClick={(e) => {
              props.setRating(5);
            }}
          ></li>
        </a>
      </div>
    );
}

export default QuickReview