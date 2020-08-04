import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { debounce } from "lodash";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { Link } from "react-router-dom";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";

const SearchBtn = (props) => {
  return (
    <Link to={`/search/${props.searchValue}`}>
      <button
        type="button"
        className="btn btn-light"
        style={{
          backgroundColor: "orange",
          color: "white",
          border: "none",
          height: "40px",
          padding: "0px 15px",
          fontSize: "16px",
          borderRadius: "0px",
        }}
        disabled={true}
        ref={props.disableRef}
      >
        <SearchOutlinedIcon />
      </button>
    </Link>
  );
};

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const searchStringRef = React.useRef();
  const disableRef = React.useRef();

  const history = useHistory();

  useEffect(() => {
    if (searchValue !== "") {
      fetch(`https://flickhub.in/search/${searchValue}`, {
        method: "POST",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "application/json",
        },
        // mode: "cors",
      })
        .then((response) => response.json())
        // .then((response) => console.log("Random ", response))
        .then((response) => {
          setSuggestions(response.data);
        })
        .catch((error) => setSuggestions([]));
    } else setSuggestions([]);
  }, [searchValue]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        width: "100vw",
        marginTop: props.marginTop,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          width: props.width,
          //margin: "0px 20px 100px 20px",
        }}
      >
        <div
          style={{
            width: "650px",
            height: "40px",
            border: "none",
            fontSize: "16px",
            color: "#6e6d7a",
          }}
        >
          <Autocomplete
            style={{ padding: "0", margin: "0" }}
            autoComplete={true}
            filterSelectedOptions={true}
            freeSolo
            id="free-solo-2-demo"
            disableClearable
            onChange={(object, value) => {
              setSearchValue(value);
              if (searchValue !== "") history.push(`/search/${value}`);
            }}
            autoSelect={false}
            options={suggestions.map((option) => option)}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search with a keyword"
                margin="normal"
                InputProps={{
                  ...params.InputProps,
                  type: "search",
                  disableUnderline: true,
                }}
                style={{
                  color: "white",
                  backgroundColor: "white",
                  outline: "none",
                  padding: "5px 15px 5px 15px",
                  margin: "0",
                  height: "40px",
                }}
                value={searchValue}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    if (searchValue !== "")
                      history.push(`/search/${searchValue}`);
                  }
                }}
                onChange={(event) => {
                  if (event.target.value === "") {
                    setSuggestions([]);
                  } else {
                    event.persist();
                    const debounceFunc = debounce(() => {
                      setSearchValue(event.target.value);
                    }, 500);
                    debounceFunc();
                  }
                  event.target.value !== ""
                    ? (disableRef.current.disabled = false)
                    : (disableRef.current.disabled = true);
                }}
                autoFocus={false}
                ref={searchStringRef}
                fullWidth={true}
              />
            )}
          />
        </div>
        <SearchBtn searchValue={searchValue} disableRef={disableRef} />
      </div>
    </div>
  );
};

export default SearchBar;
