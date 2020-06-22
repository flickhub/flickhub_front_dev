import React from "react";
import HoverCard from "./HoverCard";
import Hover from "./Hover";

//Not part of main flow

const HoverCard2 = (props) => {
  const [hover, setHover] = React.useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);
  };


  const [respObj, setRespObj] = React.useState(null)

  // React.useEffect(() => {
                          fetch("http://702017af4c17.ngrok.io/submit", {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ mv_name: "iron man" }),
                          })
                            .then((res) => res.json())
                            .then(res => setRespObj(res))
                            .then((res) => console.log(res));
                        // }, [])

  return respObj ? (
    // <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
    //   {hover ? (
    //     <HoverCard title1="Hello, " title2="I" />
    //   ) : (
    //     <HoverCard title3="am" title4="a" title5="robot!"  />
    //   )}
    // </div>
    <div>
      <Hover item={respObj.data[0]} />
    </div>
  ) : <p>Loading . . .</p>
};

export default HoverCard2;
