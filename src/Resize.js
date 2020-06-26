import React from "react";
import { useMediaQuery } from "react-responsive";
import Cards from "./Cards";
import Routers from "./Routers";
import MobileRouters from "./mobile/MobileRouters";
import Flickhub from "./Flickhub";
import Hamburger from "./mobile/Hamburger";

export const hamburgerIconStyle = {
    width: "25px",
    height: "3px",
    backgroundColor: "white",
    margin: "6px 0",
  };

const Resize = () => {
  const mobile = useMediaQuery({ minWidth: 1025 });

  const [showMenu, setShowMenu] = React.useState(false)
  const collapseRef = React.useRef()
 
  return (
    <div>
      {mobile ? (
        <Routers />
      ) : (
        <div>
          {/* Hamburger menu */}
          <div style={{ zIndex: 3, top: "0", right: "0", position: "fixed", border: "none", outline: "none" }}>
            <button
            ref={collapseRef}
              type="button"
              className="btn btn-link"
              onClick={(e) => {setShowMenu(!showMenu)}}
            >
              <div style={hamburgerIconStyle}></div>
              <div style={hamburgerIconStyle}></div>
              <div style={hamburgerIconStyle}></div>
            </button>
          </div>
          {showMenu ? <Hamburger showMenu={showMenu} /> : null}
          <MobileRouters />
        </div>
      )}
    </div>
  );
};

export default Resize;
