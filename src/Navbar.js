// import React from "react";
// import ReactDOM from "react-dom";

// import "./App.css";

// import Cards from "./Cards";
// import CardInitial from "./CardInitial";
// import Filter from "./Filter";
// import Feedback from "./Feedback";
// import Flickhub from "./Flickhub";

// import { icons } from "./constants/icons";
// import { titles } from "./utils/response";
// import flickhub from './assets/images/logo3.jpg'
// import Routers from "./Routers";

// const Navbar = () => {
//   const [filterPage, setFilterPage] = React.useState(false);

//   const [find, setFind] = React.useState("");
//   const searchRef = React.useRef();
//   const scrollRef = React.useRef();

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <header
//         id="navbar"
//         style={{
//           top: 0,
//           left: 0,
//           position: "fixed",
//           backgroundColor: "black",
//           borderBottom: "3px solid rgba(255,134,20) ",
//         }}
//       >
//         <button
//           id="leftBtn"
//           className="btn btn-link"
//           href="#"
//           onClick={() => {
//             ReactDOM.render(
//               <div>
//                 <div
//                   style={{
//                     marginLeft: "30px",
//                   }}
//                 >
//                   <Flickhub />
//                 </div>
//               </div>,
//               document.getElementsByTagName("body")[0]
//             );
//           }}
//         >
          
//         </button>
        
//           <button
//             href="#"
//             className="btn btn-link"
//             onClick={() => {
//               ReactDOM.render(
//                 <div>
//                   <Filter
//                     netflixIcon={icons.netflixIcon}
//                     primeVideoIcon={icons.primeVideoIcon}
//                     hotstarIcon={icons.hotstarIcon}
//                   />
//                 </div>,
//                 document.getElementsByTagName("body")[0]
//               );
//             }}
//           >
//             Filtered Search
//           </button>
//           <button href="#" className="btn btn-link">
//             <Routers />
//           </button>
//           <button href="#" className="btn btn-link">
//             Contact Us
//           </button>
//           <button
//             href="#"
//             className="btn btn-link"
//             onClick={() => {
//               ReactDOM.render(
//                 <div
//                   style={{
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     height: "100vh",
//                   }}
//                 >
//                   <Navbar />
//                   <Feedback />
//                 </div>,
//                 document.getElementsByTagName("body")[0]
//               );
//             }}
//           >
//             Feedback
//           </button>
  
//       </header>
//     </div>
//   );
// };
// export default Navbar;
