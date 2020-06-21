import React from "react";

import App from "./App.js";
import Watch from "./Watch.js";
import CardInitial from "./CardInitial.js";
import { icons } from "./constants/icons.js";

export const Hover = (props) => {
  const { item } = props;

  const [hover, setHover] = React.useState(false);

  const onMouseEnter = () => {
    setHover(true);
  };

  const onMouseLeave = () => {
    setHover(false);

  };

  const renderCollapsed = () => (
    <CardInitial
      title={item.name}
      poster={item.image}
      // netflixLink={item.ott.netflix}
      // primeVideoLink={item.ott.primeVideo}
      // hotstarLink={item.ott.hotstar}
      // netflixIcon={item.ott.netflix === "" ? null : icons.netflixIcon}
      // primeVideoIcon={item.ott.primeVideo === "" ? null : icons.primeVideoIcon}
      // hotstarIcon={item.ott.hotstar === "" ? null : icons.hotstarIcon}
    />
  );

  const renderExpanded = () => (
    <div
    >
      <Watch
        content={item.plot}
        title={item.name}
        poster={item.image}
        // netflixLink={item.ott.netflix}
        // primeVideoLink={item.ott.primeVideo}
        // hotstarLink={item.ott.hotstar}
        // netflixIcon={item.ott.netflix === "" ? null : icons.netflixIcon}
        // primeVideoIcon={item.ott.primeVideo === "" ? null : icons.primeVideoIcon}
        // hotstarIcon={item.ott.hotstar === "" ? null : icons.hotstarIcon}
        // youtubeLink={item.ott.youtube}
      />
    </div>
  );

  return (
    <div id="hoverId" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <App body={hover ? renderExpanded() : renderCollapsed()} />
    </div>
  );
};


export default Hover;
