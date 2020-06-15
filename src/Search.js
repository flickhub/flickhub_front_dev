import React from "react";
import { titles } from "./utils/response";
import CardInitial from "./CardInitial";
import { icons } from "./constants/icons";
import Cards from "./Cards";



const Search = (props) => {
  const searchRef = React.useRef();
  const scrollRef = React.useRef();

  const [goToPage, setGoToPage] = React.useState(false);

  const [respObj, setRespObj] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:8080/title", {
      header: {
        "Access-Control-Allow-Origin": "*",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((response) => setRespObj(response))
      .catch((error) => console.log("error", error));
  }, []);

  
  const items = () => {
    const filteredTitles = respObj
      .filter((data) => {
        if (data.response.name.toLowerCase().includes(props.find.toLowerCase())) {
          return data;
        }
      })
      .map((data) => {
        return (
          <div
            className="container"
            style={{
              height: "500px",
              padding: "10px",
              display: "flex",
              alignItems: "center",
            }}
          >
            {respObj.map((name) => {
              if (JSON.stringify(data.response) == JSON.stringify(name.response)) {
                return (
                  <div
                    style={{
                      padding: "0px",
                      margin: "0px 10px",
                      display: "block",
                      cursor: "pointer",
                    }}
                    className="col"
                    onClick={() => setGoToPage(true)}
                  >
                    {/* <CardInitial
                      title={data.response.name}
                      poster={data.response.image}
                      netflixLink={
                        data.response.ott.netflix == ""
                          ? null
                          : icons.netflixIcon
                      }
                      netflixIcon={
                        data.response.ott.netflix == ""
                          ? null
                          : icons.netflixIcon
                      }
                      primeVideoLink={
                        data.response.ott.primeVideo
                      }
                      primeVideoIcon={
                        data.response.ott.primeVideo == ""
                          ? null
                          : icons.primeVideoIcon
                      }
                      hotstarLink={
                        data.response.ott.hotstar
                      }
                      hotstarIcon={
                        data.response.ott.hotstar == ""
                          ? null
                          : icons.netflixIcon
                      }
                    /> */}
                    <Cards />
                  </div>
                );
              }
            })}
          </div>
        );
      })
    if (filteredTitles.length) {
      return filteredTitles;
    }
    return (
      <div>
        <p>No matches found</p>
      </div>
    )
  };

  return respObj ? (
    <div
      id="searches"
      ref={searchRef}
      className="container"
      style={{
        display: "flex",
        justifyContent: "flex-start",
        position: "fixed",
        zIndex: "1",
        top: "0",
        margin: "50px 0px",
        background: "linear-gradient(to right, #0f0c29, #302b63, #24243e)",
        overflow: "auto",
        borderRadius: "5px",
        marginLeft: "-85px",
        paddingLeft: "30px",
        minWidth: "1400px",
      }}
    >
      {/* {searchBar} */}
      <div
        style={{
          transition: "all 0.5s ease",
          display: "flex",
          marginTop: "200px"
        }}
        ref={scrollRef}
      >
        {props.search ? items() : null}
      </div>

      {props.search ? (
        <div>
          <button
            className="fa fa-chevron-circle-left btn btn-link"
            type="button"
            style={{
              left: "0",
              marginLeft: "15px",
              marginTop: "180px",
              position: "fixed",
              fontSize: "80px",
            }}
            onClick={(e) => {
              scrollRef.current.style.transform += "translate(800px, 0)";
            }}
          ></button>

          <button
            className="fa fa-chevron-circle-right btn btn-link"
            style={{
              marginRight: "15px",
              marginTop: "0px",
              right: "0",
              position: "fixed",
              fontSize: "80px",
              marginTop: "180px",
            }}
            type="button"
            onClick={() => {
              scrollRef.current.style.transform += "translate(-800px, 0)";
            }}
          ></button>
        </div>
      ) : null}
    </div>
  ) : (
    <div style={{display: "flex", justifyContent: "center", alignContent: "center"}}>
      <p style={{color: "white", fontSize: "30px"}}>Loading . . .</p>
    </div>
    
  )
};

export default Search;
