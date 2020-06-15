import React from "react";

const respObj = 
  // React.useEffect(() => {
     fetch("http://localhost:8080/title", {
      header: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        return response.json();
      })
      // .then((response) => setRespObj(response))
      .then(response => console.log(response))
      .catch((error) => console.log("error", error));
  // }, []);


export default respObj;
