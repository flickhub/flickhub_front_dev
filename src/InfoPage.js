import React from "react";

import { theWitcherCommentsArray } from "./utils/response";
import "./App.css";
import { useMediaQuery } from "react-responsive";
import { icons } from "./constants/icons";

const InfoPage = (props) => {
  const { item } = props;
  const [rating, setRating] = React.useState();
  const [review, setReview] = React.useState("");
  const [comments, setComments] = React.useState(theWitcherCommentsArray());

  const ratingRef = React.useRef();
  const reviewRef = React.useRef();
  const commentsRef = React.useRef();

  const hideRef = React.useRef();

  const onClick = (e) => {
    setRating(ratingRef.current.value);
    alert("Your rating: " + ratingRef.current.value + "/10");
  };

  const addReview = () => {
    if (reviewRef.current != null) {
      setReview(reviewRef.current);
    }
  };

  const mobile = useMediaQuery({ minWidth: 1200 });

  return (
    // <Router>
    // <Route
    //   path={`/title/${item.name}`}
    //   exact
    //   render={() => (
    <div style={{ marginTop: "50px" }}>
      {mobile ? (
        <div
          ref={hideRef}
          id="moreInfoContainer"
          style={{
            borderRadius: "5px",
            transition: "all 0.7s ease",
            padding: "50px",
            zIndex: "1",
            overflow: "hidden",
          }}
        >
          <div>
            <div id="innerContainer" style={{}}>
              <div
                id="dark"
                style={{
                  height: "400px",
                  width: "300px",
                  backgroundColor: "rgba(15,15,15)",
                  backgroundImage: "url(" + item.image + ")",
                  backgroundPosition: "center center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                  marginLeft: "125px",
                }}
              ></div>

              <div id="right">
                <div style={{ marginLeft: "50px" }}>
                  <h2>{item.name}</h2>
                  <p style={{ color: "orange" }}>{item.year}</p>
                </div>

                <div id="infoRight" style={{ marginLeft: "50px" }}>
                  {/* Synopsis */}
                  <div style={{ display: "flex" }}>
                    <span style={{ minWidth: "125px" }}>Synopsis: </span>
                    <div
                      style={{
                        width: "50vw",
                        height: "90px",
                        overflow: "auto",
                        padding: "10px",
                        borderRadius: "5px",
                        background: "rgba(50,50,50, 0.7)",
                      }}
                    >
                      <b
                        style={{
                          fontSize: "18px",
                        }}
                      >
                        {item.plot}
                      </b>
                    </div>
                  </div>

                  {/* Cast */}
                  <div style={{ display: "flex", marginTop: "30px" }}>
                    <span style={{ minWidth: "125px" }}>Cast: </span>
                    <div
                      style={{
                        // width: "50vw",
                        // height: "90px",
                        overflow: "auto",
                        padding: "10px",
                        borderRadius: "5px",
                        background: "rgba(50,50,50,0.7)",
                      }}
                    >
                      <b style={{ fontSize: "18px" }}>{item.cast}</b>
                    </div>
                  </div>

                  {/* Rating */}
                  <div style={{ display: "flex", marginTop: "40px" }}>
                    <span style={{ minWidth: "110px" }}>IMDb Rating:</span>
                    <b
                      style={{
                        color: "orange",
                        fontSize: "20px",
                        padding: "5px 10px",
                        background: "rgba(50,50,50)",
                        borderRadius: "5px",
                        // width: "6%",
                        marginLeft: "15px",
                        marginTop: "-5px",
                        fontSize: "18px",
                      }}
                    >
                      {item.rate ? item.rate : "N/A"}
                    </b>
                  </div>
                </div>

                <div
                  id="ImagesDiv"
                  style={{
                    display: "flex",
                    marginTop: "15px",
                    marginLeft: "50px",
                  }}
                >
                  <span style={{ minWidth: "125px" }}>Stream:</span>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      padding: "5px",
                      background: "rgba(60,60,60,0.8)",
                      borderRadius: "5px",
                      maxWidth: "30vw",
                      overflowX: "auto",
                    }}
                  >
                    <a
                      href={item.urlname.NETFLIX ? item.urlname.NETFLIX : null}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: item.urlname.NETFLIX ? "block" : "none",
                        margin: "3px",
                      }}
                    >
                      <img
                        id="thumbnail"
                        src={item.urlname.NETFLIX ? icons.netflixIcon : null}
                        height="40px"
                        width="40px"
                        alt=""
                      />
                    </a>
                    <a
                      href={item.urlname.PRIME ? item.urlname.PRIME : null}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: item.urlname.PRIME ? "block" : "none",
                        margin: "3px",
                      }}
                    >
                      <img
                        id="thumbnail"
                        src={item.urlname.PRIME ? icons.primeVideoIcon : null}
                        height="40px"
                        width="40px"
                        alt=""
                      />
                    </a>
                    <a
                      href={item.urlname.HOTSTAR ? item.urlname.HOTSTAR : null}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: item.urlname.HOTSTAR ? "block" : "none",
                        margin: "3px",
                      }}
                    >
                      <img
                        id="thumbnail"
                        src={item.urlname.HOTSTAR ? icons.hotstarIcon : null}
                        height="40px"
                        width="40px"
                        alt=""
                      />
                    </a>

                    <a
                      href={item.urlname.SONYLIV ? item.urlname.SONYLIV : null}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: item.urlname.SONYLIV ? "block" : "none",
                        margin: "3px",
                      }}
                    >
                      <img
                        id="thumbnail"
                        src={item.urlname.SONYLIV ? icons.sonyLivIcon : null}
                        height="40px"
                        width="40px"
                        alt=""
                      />
                    </a>

                    <a
                      href={item.urlname.ZEE5 ? item.urlname.ZEE5 : null}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: item.urlname.ZEE5 ? "block" : "none",
                        margin: "3px",
                      }}
                    >
                      <img
                        id="thumbnail"
                        src={item.urlname.ZEE5 ? icons.zee5Icon : null}
                        height="40px"
                        width="40px"
                        alt=""
                      />
                    </a>

                    <a
                      href={item.urlname.EROSNOW ? item.urlname.EROSNOW : null}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: item.urlname.EROSNOW ? "block" : "none",
                        margin: "3px",
                      }}
                    >
                      <img
                        id="thumbnail"
                        src={item.urlname.EROSNOW ? icons.erosNowIcon : null}
                        height="40px"
                        width="40px"
                        alt=""
                      />
                    </a>

                    <a
                      href={item.urlname.VOOT ? item.urlname.VOOT : null}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: item.urlname.VOOT ? "block" : "none",
                        margin: "3px",
                      }}
                    >
                      <img
                        id="thumbnail"
                        src={item.urlname.VOOT ? icons.vootIcon : null}
                        height="40px"
                        width="40px"
                        alt=""
                      />
                    </a>

                    <a
                      href={item.urlname.VIU ? item.urlname.VIU : null}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: item.urlname.VIU ? "block" : "none",
                        margin: "3px",
                      }}
                    >
                      <img
                        id="thumbnail"
                        src={item.urlname.VIU ? icons.viuIcon : null}
                        height="40px"
                        width="40px"
                        alt=""
                      />
                    </a>

                    <a
                      href={
                        item.urlname.ALTBALAJI ? item.urlname.ALTBALAJI : null
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: item.urlname.ALTBALAJI ? "block" : "none",
                        margin: "3px",
                      }}
                    >
                      <img
                        id="thumbnail"
                        src={
                          item.urlname.ALTBALAJI ? icons.altBalajiIcon : null
                        }
                        height="40px"
                        width="40px"
                        alt=""
                      />
                    </a>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    marginTop: "10px",
                    marginLeft: "50px",
                  }}
                >
                  <span style={{ minWidth: "125px" }}>IMDb page: </span>
                  <div
                    style={{
                      color: "orange",
                      padding: "10px 0px",
                      background: "rgba(60,60,60,0.8)",
                      borderRadius: "5px",
                      maxWidth: "30vw",
                    }}
                  >
                    <b style={{ padding: "5px 10px" }}>
                      {item.imdb ? (
                        <a href={item.imdb}>
                          <img
                            src={icons.imdbIcon}
                            height="40px"
                            width="40px"
                          />
                        </a>
                      ) : (
                        "N/A"
                      )}
                    </b>
                  </div>
                </div>
              </div>
            </div>

            {item.trailer ? (
              <div id="embededVid">
                <iframe
                  title="youtubeTrailer"
                  width="1000"
                  height="500"
                  src={item.trailer}
                  frameborder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen="true"
                ></iframe>
              </div>
            ) : (
              <div
                style={{
                  background: "rgba(1,1,1)",
                  height: "500px",
                  width: "1000px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1 style={{ fontSize: "100px" }}>Trailer coming soon</h1>
              </div>
            )}

            {/* <div id="AddComment">
            <div id="rate">
              <h1 style={{ color: "white", fontSize: "75px" }}>Rate</h1>
              <select ref={ratingRef}>
                <option ref={ratingRef} value="1">
                  1
                </option>
                <option ref={ratingRef} value="2">
                  2
                </option>
                <option ref={ratingRef} value="3">
                  3
                </option>
                <option ref={ratingRef} value="4">
                  4
                </option>
                <option ref={ratingRef} value="5">
                  5
                </option>
                <option ref={ratingRef} value="6">
                  6
                </option>
                <option ref={ratingRef} value="7">
                  7
                </option>
                <option ref={ratingRef} value="8">
                  8
                </option>
                <option ref={ratingRef} value="9">
                  9
                </option>
                <option ref={ratingRef} value="10">
                  10
                </option>
              </select>
              <button className="btn btn-primary" onClick={(e) => onClick(e)}>
                Submit
              </button>
            </div>

            <input
              type="text"
              placeholder="Add Review..."
              id="commentInput"
              ref={reviewRef}
              onChange={(e) => {
                setReview(e.target.value);
                console.log(review);
              }}
            />
            <br />
            <button
              className="btn btn-danger"
              onClick={() => {
                const newComment = new commentsObj(review, "User21");
                setComments([newComment, ...comments]);
                reviewRef.current.value = "";
              }}
            >
              Submit
            </button>
          </div> */}
            {/* <br />
          <br />

          <p style={{ marginLeft: "40px", fontSize: "50px" }}>
            <strong>Comments: </strong>
          </p>

          <div id="rev" ref={commentsRef}></div>

          {comments.map((item, index) => {
            return <Review review={item.comment} user={item.userName} key={`comment-${index}`} />;
          })} */}
          </div>
        </div>
      ) : (
        //Mobile

        <div
          style={{
            marginTop: "100px",
            backgroundColor: "rgba(1,1,1,0.8)",
            width: "90vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "50px 0px",
          }}
        >
          {/* Title */}
          <div
            style={{
              display: "flex",
              color: "white",
              textAlign: "center",
            }}
          >
            <h3>{item.name}</h3>
          </div>

          {/* Poster */}

          <div
            style={{
              height: "200px",
              width: "50vw",
              backgroundImage: "url(" + item.image + ")",
              backgroundPosition: "center center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          ></div>

          {/* Rating */}
          <div
            style={{
              textAlign: "left",
              display: "flex",
              justifyContent: "flex-start",
              color: "white",
              padding: "10px 30px",
              margin: "10px",
              background: "rgba(60,60,60,0.8)",
              color: "orange",
              borderRadius: "5px",
            }}
          >
            <b>{item.rate !== null ? item.rate : "N/A"}</b>
          </div>

          <div style={{ marginTop: "30px" }}></div>

          {/* IMDb Page */}
          <div
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "10px",
            }}
          >
            <h3>IMDb Page</h3>
            <div
              style={{
                width: "75vw",
                padding: "20px",
                background: "rgba(60,60,60,0.8)",
                borderRadius: "5px",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <p>{item.plot}</p> */}
              <p>
                <b>N/A</b>
              </p>

              <div>
                <a
                  // href={item.ott.imdb}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    alt=""
                    id="thumbnail"
                    // src={item.ott.imdb === "" ? null : icons.imdbIcon}
                    height="50px"
                  />
                </a>
              </div>
            </div>
          </div>

          {/* Summary */}
          <div
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "10px 40px",
            }}
          >
            <h3>Synopsis</h3>
            <div
              style={{
                width: "75vw",
                padding: "20px",
                background: "rgba(60,60,60,0.8)",
                borderRadius: "5px",
              }}
            >
              <p>{item.plot}</p>
            </div>
          </div>

          {/* Cast */}
          <div
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "10px 40px",
            }}
          >
            <h3>Cast</h3>
            <div
              style={{
                width: "75vw",
                padding: "20px",
                background: "rgba(60,60,60,0.8)",
                borderRadius: "5px",
              }}
            >
              <p>{item.cast}</p>
            </div>
          </div>

          {/* Stream */}
          <div
            style={{
              color: "white",
              display: "flex",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
              flexDirection: "column",
              margin: "40px",
            }}
          >
            <h3>Stream</h3>
            <div
              style={{
                width: "75vw",
                padding: "20px",
                background: "rgba(60,60,60,0.8)",
                borderRadius: "5px",
                overflow: "scroll",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {/* <div style={{ display: "flex", overflow: "auto" }}> */}
              <a
                href={item.urlname.NETFLIX ? item.urlname.NETFLIX : null}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="thumbnail"
                  src={item.urlname.NETFLIX ? icons.netflixIcon : null}
                  height="50px"
                  alt=""
                />
              </a>
              <a
                href={item.urlname.PRIME ? item.urlname.PRIME : null}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="thumbnail"
                  src={item.urlname.PRIME ? icons.primeVideoIcon : null}
                  height="50px"
                  alt=""
                />
              </a>
              <a
                href={item.urlname.HOTSTAR ? item.urlname.HOTSTAR : null}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="thumbnail"
                  src={item.urlname.HOTSTAR ? icons.hotstarIcon : null}
                  height="50px"
                  alt=""
                />
              </a>

              <a
                href={item.urlname.SONYLIV ? item.urlname.SONYLIV : null}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="thumbnail"
                  src={item.urlname.SONYLIV ? icons.sonyLivIcon : null}
                  height="50px"
                  alt=""
                />
              </a>

              <a
                href={item.urlname.ZEE5 ? item.urlname.ZEE5 : null}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  id="thumbnail"
                  src={item.urlname.ZEE5 ? icons.zee5Icon : null}
                  height="50px"
                  alt=""
                />
              </a>
              {/* </div> */}
              <a
                // href={item.ott.primeVideo}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  id="thumbnail"
                  // src={
                  // item.ott.primeVideo === "" ? null : icons.primeVideoIcon
                  // }
                  height="50px"
                />
              </a>
              <a
                // href={item.ott.hotstar}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt=""
                  id="thumbnail"
                  // src={item.ott.hotstar === "" ? null : icons.hotstarIcon}
                  height="50px"
                />
              </a>
            </div>
          </div>

          {/* Trailer */}
          <h3 style={{ textAlign: "center", color: "white", margin: "10px" }}>
            Trailer
          </h3>
          {item.trailer ? (
            <div>
              <iframe
                title="youtubeTrailer"
                // width="1000"
                // height="500"
                src={item.trailer}
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen="true"
                style={{ padding: "10px 10px 40px 10px" }}
              ></iframe>
            </div>
          ) : (
            <div
              style={{
                background: "rgba(1,1,1)",
                // height: "500px",
                // width: "1000px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <h1 style={{ fontSize: "25px", color: "white" }}>
                Trailer coming soon
              </h1>
            </div>
          )}
        </div>
      )}
    </div>
    //   )}
    // />
    // </Router>
  );
};

export default InfoPage;
