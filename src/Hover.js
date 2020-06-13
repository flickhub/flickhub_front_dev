import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
import Watch from "./Watch.js";
import CardInitial from "./CardInitial.js";
import InfoPage from "./InfoPage.js";
import { icons } from "./constants/icons.js";

export const Hover = (props) => {
  const { item } = props;

  const [hover, setHover] = React.useState(false);
  const [goto, setGoTo] = React.useState();

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
      netflixLink={item.urlname}
      primeVideoLink={item.urlname}
      hotstarLink={item.urlname}
      netflixIcon={icons.netflixIcon}
      primeVideoIcon={icons.primeVideoIcon}
      hotstarIcon={icons.hotstarIcon}
    />
  );

  const renderExpanded = () => (
    <div
      onClick={() => {
        titlePage(item);
        // setGoTo(<InfoPage item={item} />);
      }}
    >
      <Watch
        content={item.plot}
        title={item.name}
        poster={item.image}
        netflixLink={item.urlname}
        primeVideoLink={item.urlname}
        hotstarLink={item.urlname}
        netflixIcon={icons.netflixIcon}
        primeVideoIcon={icons.primeVideoIcon}
        hotstarIcon={icons.hotstarIcon}
        // youtubeLink={item.ott.youtube}
      />
    </div>
  );

  const titlePage = (e) => {
    ReactDOM.render( <InfoPage item={e} />, document.getElementById('root'))
  };

  return (
    <div id="hoverId" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <App body={hover ? renderExpanded() : renderCollapsed()} />
    </div>
  );
};

export default Hover;
