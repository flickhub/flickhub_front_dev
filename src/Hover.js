import React from "react";

import App from "./App.js";
import Watch from "./Watch.js";
import CardInitial from "./CardInitial.js";

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
      urlname={item.urlname}
    />
  );

  const renderExpanded = () => (
    <div>
      <div>
        <Watch item={item} />
      </div>
    </div>
  );

  return (
    <div id="hoverId" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <App body={hover ? renderExpanded() : renderCollapsed()} />
    </div>
  );
};

export default Hover;
