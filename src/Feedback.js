import React from "react";
import QuickReview from "./QuickReview";

const Feedback = (props) => {
  const textRef1 = React.useRef();
  const textRef2 = React.useRef();
  const textRef3 = React.useRef();
  const textRef4 = React.useRef();
  const textRef5 = React.useRef();

  const [selected, setSelected] = React.useState(false);

  const [quickReview, setQuickReview] = React.useState();
  const [firstName, setFirstName] = React.useState();
  const [lastName, setLastName] = React.useState();
  const [email, setEmail] = React.useState();
  const [question, setQuestion] = React.useState();
  const [feedback, setFeedback] = React.useState();

  const getFeedback = () => {
    console.log("First Name: ", firstName);
    console.log("Last Name: ", lastName);
    console.log("E-mail: ", email);
    console.log("Question: ", question);
    console.log("Feedback: ", feedback);
  };

  return (
    <div
      style={{
        border: "2px solid #999999",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "50px 100px",
        margin: "175px",
      }}
    >
      <div>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => {
            setSelected(!selected);
          }}
        >
          {!selected ? "Quick Review" : "Hide"}
        </button>
        <div
          style={{
            width: selected ? "900px" : "0px",
            transition: "all 0.7s linear",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {selected ? (
            <QuickReview selected={selected} />
          ) : (
            <QuickReview selected={false} />
          )}
        </div>
      </div>
      <div style={{ display: "flex", padding: "10px" }}>
        <div>
          <p
            ref={textRef1}
            style={{
              zIndex: "1",
              fontSize: "25px",
              marginLeft: "10px",
              marginTop: "23px",
              position: "fixed",
              color: "#999999",
              // transition: "all 0.5s ease",
            }}
          >
            FirstName
          </p>
          <input
            type="text"
            style={{
              borderRadius: "3px",
              border: "1px solid #999999",
              padding: "10px",
              marginTop: "20px",
            }}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            onFocus={(e) => {
              textRef1.current.style.fontSize = "13px";
              textRef1.current.style.transform = "translate(-3px, 0px)";
              textRef1.current.style.color = "rgba(255,134,20)";
              e.target.style.paddingTop = "25px";

              e.target.style.border = "2px solid orange";
            }}
            onBlur={(e) => {
              if (e.target.value == "") {
                textRef1.current.style.fontSize = "25px";
                textRef1.current.style.transform = "translate(0px, 0px)";
                textRef1.current.style.color = "#999999";
                e.target.style.border = "1px solid #999999";
                e.target.style.paddingTop = "10px";
              } else {
                textRef1.current.value = "";
              }
            }}
          />
        </div>
        <div>
          <p
            ref={textRef2}
            style={{
              zIndex: "1",
              fontSize: "25px",
              marginLeft: "10px",
              marginTop: "23px",
              position: "fixed",
              color: "#999999",
              transition: "all 0.5s ease",
            }}
          >
            Last Name
          </p>
          <input
            type="text"
            style={{
              borderRadius: "3px",
              border: "1px solid #999999",
              padding: "10px",
              marginTop: "20px",
            }}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            onFocus={(e) => {
              textRef2.current.style.fontSize = "13px";
              textRef2.current.style.transform = "translate(-3px, 0px)";
              textRef2.current.style.color = "rgba(255,134,20)";
              e.target.style.paddingTop = "25px";
              e.target.style.border = "2px solid orange";
            }}
            onBlur={(e) => {
              if (e.target.value == "") {
                textRef2.current.style.fontSize = "25px";
                textRef2.current.style.transform = "translate(0px, 0px)";
                textRef2.current.style.color = "#999999";
                e.target.style.border = "1px solid #999999";
                e.target.style.paddingTop = "10px";
              } else {
                textRef2.current.value = "";
              }
            }}
          />
        </div>
      </div>

      <div>
        <p
          ref={textRef3}
          style={{
            zIndex: "1",
            fontSize: "25px",
            marginLeft: "10px",
            marginTop: "23px",
            position: "fixed",
            color: "#999999",
            transition: "all 0.5s ease",
          }}
        >
          E-mail
        </p>
        <input
          type="text"
          style={{
            borderRadius: "3px",
            border: "1px solid #999999",
            padding: "10px",
            marginTop: "20px",
          }}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          onFocus={(e) => {
            textRef3.current.style.fontSize = "13px";
            textRef3.current.style.transform = "translate(-3px, 0px)";
            textRef3.current.style.color = "rgba(255,134,20)";
            e.target.style.paddingTop = "25px";
            e.target.style.border = "2px solid orange";
          }}
          onBlur={(e) => {
            if (e.target.value == "") {
              textRef3.current.style.fontSize = "25px";
              textRef3.current.style.transform = "translate(0px, 0px)";
              textRef3.current.style.color = "#999999";
              e.target.style.border = "1px solid #999999";
              e.target.style.paddingTop = "10px";
            } else {
              textRef3.current.value = "";
            }
          }}
        />
      </div>

      <div>
        <p
          ref={textRef4}
          style={{
            zIndex: "1",
            fontSize: "25px",
            marginLeft: "10px",
            marginTop: "23px",
            position: "fixed",
            color: "#999999",
            transition: "all 0.5s ease",
          }}
        >
          Questions
        </p>
        <input
          type="text"
          style={{
            borderRadius: "3px",
            border: "1px solid #999999",
            padding: "10px",
            marginTop: "20px",
          }}
          onChange={(e) => {
            setQuestion(e.target.value);
          }}
          onFocus={(e) => {
            textRef4.current.style.fontSize = "13px";
            textRef4.current.style.transform = "translate(-3px, 0px)";
            textRef4.current.style.color = "rgba(255,134,20)";
            e.target.style.paddingTop = "25px";
            e.target.style.border = "2px solid orange";
          }}
          onBlur={(e) => {
            if (e.target.value == "") {
              textRef4.current.style.fontSize = "25px";
              textRef4.current.style.transform = "translate(0px, 0px)";
              textRef4.current.style.color = "#999999";
              e.target.style.border = "1px solid #999999";
              e.target.style.paddingTop = "10px";
            } else {
              textRef4.current.value = "";
            }
          }}
        />
      </div>

      <div>
        <p
          ref={textRef5}
          style={{
            zIndex: "1",
            fontSize: "25px",
            marginLeft: "10px",
            marginTop: "23px",
            position: "fixed",
            color: "#999999",
            transition: "all 0.5s ease",
          }}
        >
          Feedback
        </p>
        <input
          type="text"
          style={{
            borderRadius: "3px",
            border: "1px solid #999999",
            padding: "10px",
            marginTop: "20px",
          }}
          onChange={(e) => {
            setFeedback(e.target.value);
          }}
          onFocus={(e) => {
            textRef5.current.style.fontSize = "13px";
            textRef5.current.style.transform = "translate(-3px, 0px)";
            textRef5.current.style.color = "rgba(255,134,20)";
            e.target.style.paddingTop = "25px";

            e.target.style.border = "2px solid orange";
          }}
          onBlur={(e) => {
            if (e.target.value == "") {
              textRef5.current.style.fontSize = "25px";
              textRef5.current.style.transform = "translate(0px, 0px)";
              textRef5.current.style.color = "#999999";
              e.target.style.border = "1px solid #999999";
              e.target.style.paddingTop = "10px";
            } else {
              textRef5.current.value = "";
            }
          }}
        />
      </div>
      <button
        type="button"
        className="btn btn-danger"
        style={{ backgroundColor: "rgba(255,134,20)", marginTop: "30px" }}
        onClick={() => {
          getFeedback();
          if (
            firstName !=null && lastName !=null &&email !=null &&question !=null &&feedback !=null
          ) {
            alert("Your feedback has been submitted.");
          } else {
            alert("Please fill all the fields.");
          }
        }}
      >
        Submit
      </button>

      <div
        id="connect"
        style={{
          display: "flex",
          flexDirection: "column",
          zIndex: "1",
          //   top: "310px",
          left: "300px",
          position: "fixed",
          border: "1px solid white",
          borderRadius: "2px",
          padding: "20px 10px",
          background: "black",
        }}
      >
        <a href="#" target="_blank" style={{ marginBottom: "20px" }}>
          <i
            className="fa fa-facebook"
            style={{ fontSize: "40px", color: "rgba(255,134,20)" }}
          ></i>
        </a>
        <a href="#" target="_blank" style={{ marginBottom: "20px" }}>
          <i
            className="fa fa-twitter"
            style={{ fontSize: "40px", color: "rgba(255,134,20)" }}
          ></i>
        </a>
        <a href="#" target="_blank">
          <i
            className="fa fa-instagram"
            style={{ fontSize: "40px", color: "rgba(255,134,20)" }}
          ></i>
        </a>
      </div>
    </div>
  );
};

export default Feedback;
