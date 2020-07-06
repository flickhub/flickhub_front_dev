import React from 'react'
import { BrowserRouter as Router, Link, Switch, Route, HashRouter } from 'react-router-dom'
import About from '../About';
import Filter from '../Filter';
import MobileFeedback from './MobileFeedback';



const Hamburger = props => {

    const mobileHamburger = {
      top: "45px",
      postion: "fixed",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      zIndex: 3,
      // width: "100%",
      backgroundColor: "white",
    };

    const showRef = React.useRef()

    return (
      // <Router>
      <div>
        <ul
          style={mobileHamburger}
          ref={showRef}
          onClick={(e) =>
            props.showMenu
              ? (e.target.style.display = "block")
              : (e.target.style.display = "none")
          }
        >
          <li>
            <a href="/about/#contactInfo">
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: "90vw", margin: "3px 0px" }}
                onClick={(e) => (e.target.style.display = "none")}
              >
                Contact
              </button>
            </a>
          </li>
          <li>
            <a href="/faq">
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: "90vw", margin: "3px 0px" }}
              >
                FAQs
              </button>
            </a>
          </li>
          <li>
            <a href="/about">
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: "90vw", margin: "3px 0px" }}
              >
                About
              </button>
            </a>
          </li>
          <li>
            <a href="/filter">
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: "90vw", margin: "3px 0px" }}
              >
                Filtered Search
              </button>
            </a>
          </li>
          <li>
            <a href="/feedback">
              <button
                type="button"
                className="btn btn-secondary"
                style={{ width: "90vw", margin: "3px 0px" }}
              >
                Feedback
              </button>
            </a>
          </li>
        </ul>

        {/* <Switch>
          <Route path="/feedback" exact component={MobileFeedback} />
          <Route path="/filter" exact component={Filter} />
          <Route
            path="/about"
            exact
            render={() => (
              <div style={{ marginTop: "150px" }}>
                <About font="18px" headFontSize="35px" margin="30px" />
              </div>
            )}
          />
        </Switch> */}
      </div>
      // {/* </Router> */}
    );
}

export default Hamburger