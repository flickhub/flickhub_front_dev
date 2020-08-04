import React from "react";
import "../App.css";

export const mobileSpinnerStyle = {
  zIndex: 2,
  border: "10px solid rgba(20,20,20)",
  borderTop: "10px solid white",
  borderRadius: "50%",
  width: "85px",
  height: "85px",
};

export const mobileSpinnerOuterStyle = {
  padding: "50px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const spinnerStyle = {
  backgroundColor: "rgba(1,1,1,0.4)",
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "-75px",
};

const MobileSpinner = () => {
  return (
    <div style={spinnerStyle}>
      <div id="spinnerOuter" className="card" style={mobileSpinnerOuterStyle}>
        <span id="spinnerInner" style={mobileSpinnerStyle}></span>
        <h3 style={{ color: "black", textAlign: "center", marginTop: "10px" }}>
          Loading . . .
        </h3>
      </div>
    </div>
  );
};

export default MobileSpinner;
