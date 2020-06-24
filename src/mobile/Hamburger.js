import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'
import About from '../About';
import Filter from '../Filter';
import MobileFeedback from './MobileFeedback';



const Hamburger = props => {


    const mobileHamburger = {
      top: "40px",
      postion: "fixed",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      // width: "100%",
      backgroundColor: "white",
    };

    return (
      <Router>
        <ul style={mobileHamburger}>
          <li>
            <Link to="/about">
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: "90vw", margin: "3px 0px",  }}
              >
                About
              </button>
            </Link>
          </li>
          <li>
            <Link to="/filter">
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: "90vw", margin: "3px 0px" }}
              >
                Filtered Search
              </button>
            </Link>
          </li>
          <li>
            <Link to="/feedback">
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: "90vw", margin: "3px 0px" }}
              >
                Feedback
              </button>
            </Link>
          </li>
        </ul>

        <Switch>
          <Route path="/feedback" component={MobileFeedback} />
          <Route path="/filter" component={Filter} />
          <Route
            path="/about"
            render={() => (
              <About font="18px" headFontSize="35px" margin="30px" />
            )}
          />
        </Switch>
      </Router>
    );
}

export default Hamburger