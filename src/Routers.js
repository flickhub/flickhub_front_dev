import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import Index from './pages/Index/Index';
import GoBackButton from './components/GoBackButton/GoBackButton';
import SearchResult from './pages/SearchResult/SearchResult';
import Feedback from './pages/Feedback/Feedback';
import About from './pages/About/About';
import FilteredSearch from './pages/FilteredSearch/FilteredSearch';
import FilterResult from './pages/FilterResult/FilterResult';
import MobileSpinner from './mobile/MobileSpinner';
import PageNotFound from './PageNotFound';
import Faq from './pages/Faq/Faq';
import NavBar from './components/NavBar/NavBar';
import Movie from './pages/Movie/Movie';
import Footer from './components/Footer/Footer';

export const SearchScreen = (props) => {
  const [respObj, setRespObj] = React.useState(null);
  const [notFound, setNotFound] = React.useState(false);

  // Link to server for making requests
  React.useEffect(() => {
    fetch(`https://flickhub.in/submit2/${props.match.params.searchString}`, {
      method: 'POST',
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
      mode: 'cors',
      body: JSON.stringify({ mv_name: props.match.params.searchString }),
    })
      .then((response) => response.json())
      .then((response) => {
        setRespObj(response);
        response.data.length === 0 ? setNotFound(true) : setNotFound(false);
      })
      .catch((error) => console.log('error', error));
  }, [props.match.params.searchString]);

  return (
    <div>
      {!notFound ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {respObj ? (
            <div>
              <SearchResult
                searchFor={props.match.params.searchString}
                respObj={respObj.data}
                similar={respObj.similar}
              />
            </div>
          ) : (
            <div>
              <MobileSpinner />
            </div>
          )}
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

function Routers(props) {
  return (
    <Router>
      <NavBar />
      <GoBackButton />
      <Switch>
        <Route exact path="/feedback">
          <Feedback />
        </Route>
        <Route exact path="/filter">
          <FilteredSearch />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/faq">
          <Faq />
        </Route>
        <Route exact path="/filterResult" component={FilterResult} />
        <Route exact path="/search/:searchString" component={SearchScreen} />
        <Route path="/title/:id" component={Movie} />

        <Route exact path="/">
          <Index />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routers;
