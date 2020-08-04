import React from "react";
import QuickReview from "../../QuickReview";

const Feedback = (props) => {
  const textRef1 = React.useRef();
  const textRef2 = React.useRef();
  const textRef3 = React.useRef();
  const textRef4 = React.useRef();
  const textRef5 = React.useRef();

  const inputRef1 = React.useRef();
  const inputRef2 = React.useRef();
  const inputRef3 = React.useRef();
  const inputRef4 = React.useRef();
  const inputRef5 = React.useRef();

  const [rating, setRating] = React.useState(null);

  const [formSubmit, setFormSubmit] = React.useState({
    quick_review: 0,
    first_name: "",
    last_name: "",
    email: "",
    question: "",
    feedback: "",
  });

  const getFeedback = () => {
    console.log("feedback", formSubmit);
  };

  const sendFeedback = () => {
    const submitFeedback = {
      feedback: formSubmit,
    };
    fetch("http://3.7.155.169/feedback", {
      method: "POST",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      mode: "cors",
      body: JSON.stringify(submitFeedback),
    })
      .then((response) => response.json())
      .then((response) => console.log(response))
      .catch((error) => console.log("error", error));
  };

  return (
    <div
      style={{
        background: "rgba(1,1,1,0.5)",
        borderRadius: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        padding: "50px 100px",
        margin: "60px 60px 150px 60px",
      }}
    >
      <div>
        <div
          style={{
            width: "900px",
            transition: "all 0.5s linear",
            display: "flex",
            justifyContent: "center",
          }}
          onClick={() => setFormSubmit({ quick_review: rating })}
        >
          <QuickReview setRating={setRating} selected={true} />
        </div>
      </div>
      {/* <div style={{ display: "flex", padding: "10px" }}> */}
      <div>
        <p
          ref={textRef1}
          style={{
            zIndex: "1",
            fontSize: "25px",
            marginLeft: "10px",
            marginTop: "23px",
            position: "absolute",
            color: "#999999",
            transition: "all 0.2s ease",
          }}
          onClick={(e) => {
            e.target.style.fontSize = "10px";
            e.target.style.transform = "translate(-3px, 0px)";
            e.target.style.color = "rgba(255,134,20)";
            inputRef1.current.focus();
            inputRef1.current.select();
          }}
        >
          First Name
        </p>
        <input
          ref={inputRef1}
          type="text"
          style={{
            borderRadius: "3px",
            border: "1px solid #999999",
            padding: "17px 10px 3px 10px",
            marginTop: "20px",
            transition: "all 0.2s ease",
            width: "25vw",
          }}
          onChange={(e) => {
            setFormSubmit({ ...formSubmit, first_name: e.target.value });
          }}
          onFocus={(e) => {
            textRef1.current.style.fontSize = "10px";
            textRef1.current.style.transform = "translate(-3px, 0px)";
            textRef1.current.style.color = "rgba(255,134,20)";
            e.target.style.border = "2px solid orange";
            e.target.style.outline = "none";
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              textRef1.current.style.fontSize = "25px";
              textRef1.current.style.transform = "translate(-3px, 0px)";
              textRef1.current.style.color = "#999999";
              e.target.style.border = "1px solid #999999";
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
            position: "absolute",
            color: "#999999",
            transition: "all 0.2s ease",
          }}
          onClick={(e) => {
            e.target.style.fontSize = "10px";
            e.target.style.transform = "translate(-3px, 0px)";
            e.target.style.color = "rgba(255,134,20)";
            inputRef2.current.focus();
            inputRef2.current.select();
          }}
        >
          Last Name
        </p>
        <input
          ref={inputRef2}
          type="text"
          style={{
            borderRadius: "3px",
            border: "1px solid #999999",
            padding: "17px 10px 3px 10px",
            marginTop: "20px",
            transition: "all 0.2s ease",
            width: "25vw",
          }}
          onChange={(e) => {
            setFormSubmit({ ...formSubmit, last_name: e.target.value });
          }}
          onFocus={(e) => {
            textRef2.current.style.fontSize = "10px";
            textRef2.current.style.transform = "translate(-3px, 0px)";
            textRef2.current.style.color = "rgba(255,134,20)";
            e.target.style.border = "2px solid orange";
            e.target.style.outline = "none";
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              textRef2.current.style.fontSize = "25px";
              textRef2.current.style.transform = "translate(0px, 0px)";
              textRef2.current.style.color = "#999999";
              e.target.style.border = "1px solid #999999";
            } else {
              textRef2.current.value = "";
            }
          }}
        />
      </div>
      {/* </div> */}

      <div>
        <p
          ref={textRef3}
          style={{
            zIndex: "1",
            fontSize: "25px",
            marginLeft: "10px",
            marginTop: "23px",
            position: "absolute",
            color: "#999999",
            transition: "all 0.2s ease",
          }}
          onClick={(e) => {
            e.target.style.fontSize = "10px";
            e.target.style.transform = "translate(-3px, 0px)";
            e.target.style.color = "rgba(255,134,20)";
            inputRef3.current.focus();
            inputRef3.current.select();
          }}
        >
          E-mail
        </p>
        <input
          ref={inputRef3}
          type="text"
          style={{
            borderRadius: "3px",
            border: "1px solid #999999",
            padding: "17px 10px 3px 10px",
            marginTop: "20px",
            transition: "all 0.2s ease",
            width: "25vw",
          }}
          onChange={(e) => {
            setFormSubmit({ ...formSubmit, email: e.target.value });
          }}
          onFocus={(e) => {
            textRef3.current.style.fontSize = "10px";
            textRef3.current.style.transform = "translate(-3px, 0px)";
            textRef3.current.style.color = "rgba(255,134,20)";
            e.target.style.border = "2px solid orange";
            e.target.style.outline = "none";
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              textRef3.current.style.fontSize = "25px";
              textRef3.current.style.transform = "translate(0px, 0px)";
              textRef3.current.style.color = "#999999";
              e.target.style.border = "1px solid #999999";
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
            position: "absolute",
            color: "#999999",
            transition: "all 0.2s ease",
          }}
          onClick={(e) => {
            e.target.style.fontSize = "10px";
            e.target.style.transform = "translate(-3px, 0px)";
            e.target.style.color = "rgba(255,134,20)";
            inputRef4.current.focus();
            inputRef4.current.select();
          }}
        >
          Questions
        </p>
        <input
          ref={inputRef4}
          type="text"
          style={{
            borderRadius: "3px",
            border: "1px solid #999999",
            padding: "17px 10px 3px 10px",
            marginTop: "20px",
            transition: "all 0.2s ease",
            width: "25vw",
          }}
          onChange={(e) => {
            setFormSubmit({ ...formSubmit, question: e.target.value });
          }}
          onFocus={(e) => {
            textRef4.current.style.fontSize = "10px";
            textRef4.current.style.transform = "translate(-3px, 0px)";
            textRef4.current.style.color = "rgba(255,134,20)";
            e.target.style.border = "2px solid orange";
            e.target.style.outline = "none";
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              textRef4.current.style.fontSize = "25px";
              textRef4.current.style.transform = "translate(0px, 0px)";
              textRef4.current.style.color = "#999999";
              e.target.style.border = "1px solid #999999";
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
            position: "absolute",
            color: "#999999",
            transition: "all 0.2s ease",
          }}
          onClick={(e) => {
            e.target.style.fontSize = "10px";
            e.target.style.transform = "translate(-3px, 0px)";
            e.target.style.color = "rgba(255,134,20)";
            inputRef5.current.focus();
            inputRef5.current.select();
          }}
        >
          Feedback
        </p>
        <textarea
          ref={inputRef5}
          type="text"
          style={{
            borderRadius: "3px",
            border: "1px solid #999999",
            padding: "17px 10px 3px 10px",
            marginTop: "20px",
            transition: "all 0.2s ease",
            height: "200px",
            width: "400px",
          }}
          onChange={(e) => {
            setFormSubmit({ ...formSubmit, feedback: e.target.value });
          }}
          onFocus={(e) => {
            textRef5.current.style.fontSize = "10px";
            textRef5.current.style.transform = "translate(-3px, 0px)";
            textRef5.current.style.color = "rgba(255,134,20)";
            e.target.style.outline = "none";
            e.target.style.border = "2px solid orange";
          }}
          onBlur={(e) => {
            if (e.target.value === "") {
              textRef5.current.style.fontSize = "25px";
              textRef5.current.style.transform = "translate(0px, 0px)";
              textRef5.current.style.color = "#999999";
              e.target.style.border = "1px solid #999999";
            } else {
              textRef5.current.value = "";
            }
          }}
        />
      </div>
      <button
        type="button"
        className="btn btn-danger"
        style={{
          backgroundColor: "rgba(255,134,20)",
          width: "15%",
          marginTop: "30px",
        }}
        onClick={() => {
          getFeedback();
          sendFeedback();
          if (
            formSubmit.first_name !== "" &&
            formSubmit.last_name !== "" &&
            formSubmit.email !== "" &&
            formSubmit.question !== "" &&
            formSubmit.feedback !== ""
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
          alignItems: "center",
          justifyContent: "center",
          zIndex: "1",
          left: "200px",
          position: "absolute",
          alignSelf: "flex-start",
          border: "1px solid white",
          borderRadius: "2px",
          padding: "20px 10px",
          background: "black",
        }}
      >
        <a
          href="https://www.facebook.com/flickhub.in/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ marginBottom: "20px" }}
        >
          <i
            className="fa fa-facebook"
            style={{ fontSize: "40px", color: "rgba(255,134,20)" }}
          ></i>
        </a>
        <a
          href="https://twitter.com/flickhub_in"
          target="_blank"
          style={{ marginBottom: "20px" }}
          rel="noopener noreferrer"
        >
          <i
            className="fa fa-twitter"
            style={{ fontSize: "40px", color: "rgba(255,134,20)" }}
          ></i>
        </a>
        <a
          href="https://www.instagram.com/flickhub.in/"
          rel="noopener noreferrer"
          target="_blank"
        >
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
