// import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Cards from './Cards';
// // import InfoPage from './InfoPage';

// const Routers = () => {
//     return (
//       <Router>
//         <div>
//           <nav>
//             <ul style={{ color: "white" }}>
//               <a Link to="/">
//                 Home
//               </a>
//               <a Link to="/about">
//                 About
//               </a>
//               <a Link to="/moreInfo">
//                 Users
//               </a>
//             </ul>
//           </nav>

//           <Switch>
//             {/* <Route path="/about">
//             <About />
//           </Route> */}
//             {/* <Route path="/moreInfo">
//               <InfoPage />
//             </Route> */}
//             <Route path="/">
//               <Cards />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     );
// }

// export default Routers;

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
  Redirect,
} from "react-router-dom";

import CardInitial from "./CardInitial";
import Cards from "./Cards";
import Filter from "./Filter";
import { titles } from "./utils/response";
import Hover from "./Hover";
import InfoPage from "./InfoPage";

  
function Routers(props) {
  
  return (
    <Router>
      <div>/
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/title">Card</Link>
          </li>
          <li>
            <Link to="/filter">
              <Buttons />
            </Link>
          </li>
          <li>
            <Link to="/more">Info Page</Link>
          </li>
          <li></li>
        </ul>

        <Switch>
          <Route
            exact
            path="/more"
            render={(props) => <InfoPage item={titles()[3]} isAuthed={true} />}
            active
          >
          </Route>
          <Route path="/filter">
            <Redirect from="/filter" to="/more" />
          </Route>
          <Route path="/title">
            <GoToPage />
          </Route>
          <Route path="/">
            <Cards />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const Buttons = () => {
  return <button type="button"  >GO</button>
}

const GoToPage = () => {
  const [go, setGo] = React.useState(false);
  const [click, setClick] = React.useState();

  return (
    <div onClick={() => setGo(!go)} style={{ zIndex: "0", overflow: "auto" }}>
      <div style={{ display: "flex" }}>
        {titles().map((item) => {
          return (
            <div
              onClick={() => {
                setClick(item);
                
              }}
            >
              <Hover item={item} />
            </div>
          );
        })}
      </div>

      {/* <div
        style={{
          opacity: go ? "1" : "0",
          position: "fixed",
          top: "0",
          transition: "all 1s ease-out",

        }}
      >
        {click != null ? <InfoPage item={click} /> : null}
      </div> */}
    </div>
  );
};

const RenderComps = () => {
  const match = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <Link to={`${match.url}/Text there`}>Text here</Link>
        </li>
        <li>
          <Link to={`${match.url}/component2`}>Component 2</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/:componentsID`}>
          <CardInitial title="This is rendered from RenderComp" />
        </Route>
        <Route path={`${match.path}`}>
          <h3>SELECTED: </h3>
        </Route>
      </Switch>
    </div>
  );
};
function Greet(props) {
  return <h1>{props.id}</h1>;
}

function RenderComp() {
  const { componentsID } = useParams();
  const [state, setState] = React.useState(false);
  return (
    <div>
      {state ? <Greet id={componentsID} /> : null}
      <h1 onClick={() => setState(!state)}>SELECTED: {componentsID}</h1>
    </div>
  );
}

export default Routers;
