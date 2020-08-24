import React from 'react';
import '../App.css';

import flickhub from './../assets/images/logo3.jpg';

const mobileSpinnerOuterStyle = {
  padding: '20px',
  display: 'flex',
  maxWidth: '300px',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%,-50%)',
};

const spinnerStyle = {
  backgroundColor: 'rgba(1,1,1,0.7)',
  height: '92.5vh',
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const MobileSpinner = () => {
  return (
    <div style={spinnerStyle}>
      <div id="spinnerOuter" className="card" style={mobileSpinnerOuterStyle}>
        {/* <span id="spinnerInner" style={mobileSpinnerStyle}></span> */}
        <div className="rotate">
          <img
            alt="Spinner"
            style={{ height: '45px', width: '45px' }}
            src={flickhub}
          />
        </div>
        <h3 style={{ color: 'black', textAlign: 'center', marginTop: '10px' }}>
          Searching for your flicks
        </h3>
      </div>
    </div>
  );
};

export default MobileSpinner;
