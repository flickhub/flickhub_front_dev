import React from "react";

//Not related to production

const HoverCard = (props) => {
  return (
    <div style={{ border: "2px solid white", color: "white" }}>
      <h1>{props.title1}</h1>
      <h1>{props.title2}</h1>
      <h1>{props.title3}</h1>
      <h1>{props.title4}</h1>
      <h1>{props.title5}</h1>
    </div>
  );
};

export default HoverCard;
