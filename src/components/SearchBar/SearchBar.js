import React, { useEffect, useState, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { debounce } from 'lodash';

import styles from './SearchBar.module.css';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const searchStringRef = useRef();
  const disableRef = useRef();

  const history = useHistory();

  useEffect(() => {
    if (searchValue !== '') {
      fetch(`https://flickhub.in/search/${searchValue}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((response) => response.json())
        .then((response) => {
          setSuggestions(response.data);
        })
        .catch((error) => setSuggestions([]));
    } else setSuggestions([]);
  }, [searchValue]);

  return (
    <div className={styles.searchbar_container}>
      <Autocomplete
        className={styles.autocomplete}
        autoComplete={true}
        filterSelectedOptions={true}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        onChange={(object, value) => {
          setSearchValue(value);
          if (searchValue !== '') history.push(`/search/${value}`);
        }}
        autoSelect={false}
        options={suggestions.map((option) => option)}
        renderInput={(params) => (
          <TextField
            className={styles.text_field}
            {...params}
            placeholder="Search with a keyword"
            margin="normal"
            InputProps={{
              ...params.InputProps,
              type: 'search',
              disableUnderline: true,
            }}
            value={searchValue}
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                if (searchValue !== '') history.push(`/search/${searchValue}`);
              }
            }}
            onChange={(event) => {
              if (event.target.value === '') {
                setSuggestions([]);
              } else {
                event.persist();
                const debounceFunc = debounce(() => {
                  setSearchValue(event.target.value);
                }, 500);
                debounceFunc();
              }
              event.target.value !== ''
                ? (disableRef.current.disabled = false)
                : (disableRef.current.disabled = true);
            }}
            autoFocus={false}
            ref={searchStringRef}
            fullWidth={true}
          />
        )}
      />
      <Link to={`/search/${searchValue}`}>
        <button className={styles.submit_btn} disabled={true} ref={disableRef}>
          <SearchOutlinedIcon />
        </button>
      </Link>
    </div>
  );
};

export default SearchBar;
