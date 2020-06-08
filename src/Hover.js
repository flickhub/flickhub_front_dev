import React from "react";
import ReactDOM from "react-dom";

import App from "./App.js";
import Watch from "./Watch.js";
import CardInitial from "./CardInitial.js";
import Navbar from "./Navbar.js";
import InfoPage from "./InfoPage.js";

const Hover = (props) => {
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
      title={item.title}
      poster={item.poster}
      netflixLink={item.ott.netflix}
      primeVideoLink={item.ott.primeVideo}
      hotstarLink={item.ott.hotstar}
      netflixIcon={item.ott.icons.netflixIcon}
      primeVideoIcon={item.ott.icons.primeVideoIcon}
      hotstarIcon={item.ott.icons.hotstarIcon}
    />
  );

  const renderExpanded = () => (
    <div
      onClick={() => {
        titlePage(item);
      }}
    >
      <Watch
        content={item.content}
        title={item.title}
        poster={item.poster}
        netflixLink={item.ott.netflix}
        primeVideoLink={item.ott.primeVideo}
        hotstarLink={item.ott.hotstar}
        netflixIcon={item.ott.icons.netflixIcon}
        primeVideoIcon={item.ott.icons.primeVideoIcon}
        hotstarIcon={item.ott.icons.hotstarIcon}
        youtubeLink={item.ott.youtube}
      />
    </div>
  );

  const titlePage = (e) => {
    ReactDOM.render(
      <InfoPage
        title={e.title}
        poster={e.poster}
        synopsis={e.synopsis}
        director={e.director}
        cast={e.cast}
        netflixLink={e.ott.netflix}
        netflixIcon={e.ott.icons.netflixIcon}
        primeVideoLink={e.ott.primeVideo}
        primeVideoIcon={e.ott.icons.primeVideoIcon}
        imdbLink={e.ott.imdb}
        imdbIcon={e.ott.icons.imdbIcon}
        rottenTomatoesLink={e.ott.rottenTomatoes}
        rottenTomatoesIcon={e.ott.icons.rottenTomatoesIcon}
        youtubeLink={e.ott.youtube}
      />,
      document.getElementById("root")
    );
  };

  return (
    <div id="hoverId" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <Navbar />
      <App body={hover ? renderExpanded() : renderCollapsed()} />
    </div>
  );
};

export default Hover;
