import React from 'react';

const FilteredResults = props => {
return (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "white",
      transition: "all 0.3s ease",
      overflowX: "scroll",
      padding: props.selected ? "20px" : "10px",
      marginTop: "40px",
    //   height: "60vh"
    // maxWidth : "0px 50px"
    }}
  >
    {/* {Object.keys(items).map((item, index) => (
          <div key={`filtered-items-${index}`}>{item}</div>
        ))} */}
    {props.results}
  </div>
);
}

export default FilteredResults