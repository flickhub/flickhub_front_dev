import React from "react";
import { titles } from "./utils/response";

const Search = (props) => {
  const [find, setFind] = React.useState("");

  const items = titles()
    .filter((data) => {
      if (data == null) {
        return data;
      } else if (data.title.toLowerCase().includes(find.toLowerCase())) {
        return data;
      }
    })
    .map((data) => {
      return (
        <ul>
          <li>{data.title}</li>
          <li>{data.content}</li>
        </ul>
      );
    });

  const search = (
    <div style={{margin: "20px"}} >
      <input
        type="text"
        style={{ width: "450px", height: "30px" }}
        onChange={(e) => onChange(e)}
      />
      {items}
    </div>
  );

  const onChange = (e) => {
    setFind(e.target.value);
    console.log(find);
  };

  return (
    <div
    // className='col-4'
      style={{
        backgroundColor: "rgba(255,134,20)",
        padding: "10px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center", 
        width: "500px",
      }}
    >
        {search}
    </div>
  );
};

export default Search;
