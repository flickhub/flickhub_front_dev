import React from 'react'

const QuickReview = props => {
    return (
      <div
        style={{
          border: props.selected ? "1px solid white" : "none",
          padding: props.selected ? "20px 50px" : "0px",
          transition: "all 1s ease",
          borderRadius: "5px",
        }}
      >
        <a href="#">
          <li
            value="satisfactory"
            className="fas fa-grin-alt"
            style={{
              fontSize: props.selected ? "75px" : "0px",
              transition: "all 0.5s ease",
              color: "rgba(255,134,20)",
              padding: props.selected ? "10px" : "0px",
            }}
            onClick={(e) => {
              alert("Satisfactory");
            }}
          ></li>
        </a>
        <a href="#">
          <li
            value="unsatisfactory"
            className="fas fa-frown"
            style={{
              fontSize: props.selected ? "75px" : "0px",
              transition: "all 0.5s ease",
              color: "rgba(255,134,20)",
              padding: props.selected ? "10px" : "0px",
            }}
            onClick={(e) => {
              alert("Unsatisfactory");
            }}
          ></li>
        </a>
        <a href="#">
          <li
            className="fas fa-grin-hearts"
            value="happy"
            style={{
              fontSize: props.selected ? "75px" : "0px",
              transition: "all 0.5s ease",
              color: "rgba(255,134,20)",
              padding: props.selected ? "10px" : "0px",
            }}
            onClick={(e) => {
              alert("Happy");
            }}
          ></li>
        </a>
        <a href="#">
          <li
            className="fa fa-thumbs-up"
            value="thumbs-up"
            style={{
              fontSize: props.selected ? "75px" : "0px",
              transition: "all 0.5s ease",
              color: "rgba(255,134,20)",
              padding: props.selected ? "10px" : "0px",
            }}
            onClick={(e) => {
              alert("Thumbs Up");
            }}
          ></li>
        </a>
      </div>
    );
}

export default QuickReview