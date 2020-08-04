import React from "react";
import { useMediaQuery } from "react-responsive";
import Routers from "./Routers";
import MobileRouters from "./mobile/MobileRouters";

export const hamburgerIconStyle = {
  width: "25px",
  height: "3px",
  backgroundColor: "white",
  margin: "6px 0",
};

const Resize = () => {
  const mobile = useMediaQuery({ minWidth: 1025 });

  return (
    <>
      {mobile ? (
        <Routers />
      ) : (
        <div>
          <MobileRouters />
        </div>
      )}
    </>
  );
};

export default Resize;
