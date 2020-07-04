import React from "react";
import QuickReview from "../QuickReview";


export const textAreaStyle = {
         width: "70vw",
         height: "150px",
         borderRadius: "5px",
         border: "2px solid white",
         padding: "10px",
         overflowX: "hidden",
         overflowY: "auto"
       };

export const footerButtonStyle = {
    bottom: "0",
    left: "0",
    width: "100%",
    position: "fixed",
    background: "rgba(200,200,200)",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}

const MobileFeedback = () => {
  

    const [formSubmit, setFormSubmit] = React.useState({
      quick_review: null,
      first_name: "",
      last_name: "",
      email: "",
      question: "",
      feedback: "",
    });

  const [showModal, setShowModal] = React.useState(false)
    const [rating, setRating] = React.useState(null);

  const mobileFeedbackStyle = {
    margin: "100px 0px 150px 0px",
    padding: "50px 20px",
    background: "rgba(1,1,1, 0.6)",
    borderRadius: "3px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // background: showModal ? "rgba(1,1,1,0.7)" : "rgba(150,150,150, 0.8)",
    // height: "100vh",
    zIndex: 1,
  };

  const feedbackInputStyle = {
    padding: "10px 10px 0px 10px",
    borderRadius: "5px",
    border: "2px solid white",
    width: "70vw",
    zIndex: -1,
  };

  const labelStyle = {
    position: "absolute",
    transform: "translate(10px,7px)",
    transition: "all 0.3s ease",
    color: "grey",
    zIndex: 0,
  }; 


  const firstNameRef = React.useRef();
  const lastNameRef = React.useRef();
  const emailRef = React.useRef();
  const questionRef = React.useRef();
  const feedbackRef = React.useRef();

   const inputRef1 = React.useRef();
   const inputRef2 = React.useRef();
   const inputRef3 = React.useRef();
   const inputRef4 = React.useRef();
   const inputRef5 = React.useRef();

   React.useEffect(() => {
     console.log("feedback", rating)
   },[rating])

  const onFocus = (e, ref) => {
    ref.current.style.transform = "translate(10px,-1px)";
    ref.current.style.color = "rgba(255,134,20)";
    ref.current.style.fontSize = "10px";
    e.target.style.border = "2px solid rgba(255,134,20)";
  }

  const onBlur = (e,ref) => {
    if (e.target.value === "") {
      ref.current.style.transform = "translate(10px,7px)";
      ref.current.style.color = "grey";
      ref.current.style.fontSize = "16px";
    }

    e.target.style.border = "2px solid white";
  }

    const getFeedback = () => {
      console.log("feedback", formSubmit);
    };

    const onClick= (e, ref) => {
      e.target.style.fontSize = "10px";
      e.target.style.transform = "translate(-3px, 0px)";
      e.target.style.color = "rgba(255,134,20)";
      ref.current.focus();
      ref.current.select();
    }

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

      // return request
    };


  return (
    <div>
      <div
        style={{
          margin: "100px 5px -90px 5px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
        }}
        onClick={() => setFormSubmit({ ...formSubmit, quick_review: rating })}
      >
        <QuickReview setRating={setRating} />
      </div>

      <div style={mobileFeedbackStyle}>
        <div
          id="mobileConnect"
          style={{
            display: "flex",
            justifyContent: "center",
            padding: "0px 15px 30px 15px",
          }}
        >
          <a
            href="https://www.facebook.com/flickhub.in/"
            target="_blank"
            style={{ margin: "0px 20px" }}
          >
            <i
              className="fa fa-facebook"
              style={{ fontSize: "40px", color: "rgba(255,134,20)" }}
            ></i>
          </a>
          <a
            href="https://twitter.com/flickhub_in"
            target="_blank"
            style={{ margin: "0px 20px" }}
          >
            <i
              className="fa fa-twitter"
              style={{ fontSize: "40px", color: "rgba(255,134,20)" }}
            ></i>
          </a>
          <a
            href="https://www.instagram.com/flickhub.in/"
            target="_blank"
            style={{ margin: "0px 20px" }}
          >
            <i
              className="fa fa-instagram"
              style={{ fontSize: "40px", color: "rgba(255,134,20)" }}
            ></i>
          </a>
        </div>

        <div style={{ padding: "10px 0px" }}>
          <label
            ref={firstNameRef}
            style={labelStyle}
            onClick={(e, ref = inputRef1) => onClick(e, ref)}
          >
            First Name
          </label>
          <input
            ref={inputRef1}
            style={feedbackInputStyle}
            type="text"
            onChange={(e) => {
              setFormSubmit({ ...formSubmit, first_name: e.target.value });
            }}
            onFocus={(e, ref = firstNameRef) => {
              onFocus(e, ref);
            }}
            onBlur={(e, ref = firstNameRef) => {
              onBlur(e, ref);
            }}
          />
        </div>

        <div style={{ padding: "10px 0px" }}>
          <label
            ref={lastNameRef}
            style={labelStyle}
            onClick={(e, ref = inputRef2) => onClick(e, ref)}
          >
            Last Name
          </label>
          <input
            ref={inputRef2}
            style={feedbackInputStyle}
            type="text"
            onChange={(e) => {
              setFormSubmit({ ...formSubmit, last_name: e.target.value });
            }}
            onFocus={(e, ref = lastNameRef) => {
              onFocus(e, ref);
            }}
            onBlur={(e, ref = lastNameRef) => {
              onBlur(e, ref);
            }}
          />
        </div>

        <div style={{ padding: "10px 0px" }}>
          <label
            ref={emailRef}
            style={labelStyle}
            onClick={(e, ref = inputRef3) => onClick(e, ref)}
          >
            E-mail
          </label>
          <input
            ref={inputRef3}
            style={feedbackInputStyle}
            type="text"
            onChange={(e) => {
              setFormSubmit({ ...formSubmit, email: e.target.value });
            }}
            onFocus={(e, ref = emailRef) => {
              onFocus(e, ref);
            }}
            onBlur={(e, ref = emailRef) => {
              onBlur(e, ref);
            }}
          />
        </div>

        <div style={{ padding: "10px 0px" }}>
          <label
            ref={questionRef}
            style={labelStyle}
            onClick={(e, ref = inputRef4) => onClick(e, ref)}
          >
            Questions
          </label>
          <input
            ref={inputRef4}
            style={feedbackInputStyle}
            type="text"
            onChange={(e) => {
              setFormSubmit({ ...formSubmit, question: e.target.value });
            }}
            onFocus={(e, ref = questionRef) => {
              onFocus(e, ref);
            }}
            onBlur={(e, ref = questionRef) => {
              onBlur(e, ref);
            }}
          />
        </div>

        <div style={{ padding: "10px 0px" }}>
          <label
            ref={feedbackRef}
            style={labelStyle}
            onClick={(e, ref = inputRef5) => onClick(e, ref)}
          >
            Feedback
          </label>
          <textarea
          ref={inputRef5}
            style={textAreaStyle}
            onChange={(e) => {
              setFormSubmit({ ...formSubmit, feedback: e.target.value });
            }}
            onFocus={(e, ref = feedbackRef) => onFocus(e, ref)}
            onBlur={(e, ref = feedbackRef) => onBlur(e, ref)}
          ></textarea>
        </div>

        <div style={footerButtonStyle}>
          <button
            type="button"
            className="btn btn-light"
            style={{ width: "100%", marginRight: "5px" }}
            onClick={() => {
              // getFeedback();
              // sendFeedback()
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
        </div>
      </div>
    </div>
  );
};

export const Modal = (props) => {
  
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",

        alignItems: "center",
        transform: props.show ? "translate(0px,50vh)" : "translate(0px,-50vh)",
        transition: "all 0.2s ease",
        width: "100vw",
        zIndex: 2,
      }}
    >
      <h1
        // className="card"
        style={{
          textAlign: "center",
          padding: "30px 10px",
          zIndex: "2",
          height: "100px",
          width: "300px",
          background: "orange",
        }}
      >
        MODAL
      </h1>
    </div>
  );
}

export default MobileFeedback;
