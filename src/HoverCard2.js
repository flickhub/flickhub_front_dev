import React from "react";
import HoverCard from "./HoverCard";

//Not related to production

const HoverCard2 = (props) => {
  const [hover, setHover] = React.useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };

  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {hover ? (
        <HoverCard title1="Hello, " title2="I" />
      ) : (
        <HoverCard title3="am" title4="a" title5="robot!"  />
      )}
    </div>
  );
};

export default HoverCard2;
