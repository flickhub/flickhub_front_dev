import React from "react";

export const faqCardStyle = {
         width: "65vw",
         padding: "25px",
         margin: "20px",
         background: "rgba(60,60,60)",
       };

const Faq = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "80vw",
        margin: "70px 20px 20px 20px",
        flexDirection: "column",
      }}
    >
      {/* 1 */}
      <div className="card" style={faqCardStyle}>
        <h3 style={{ color: "orange" }}>What is flickhub?</h3>
        <p style={{ color: "white" }}>
          We are a platform that helps you check where a certain movie or show
          is streaming. So that you don’t have to jump from one OTT platform to
          another looking for the movie you want to watch. We also recommend top
          rated shows and movies.{" "}
        </p>
      </div>

      {/* 2 */}
      <div className="card" style={faqCardStyle}>
        <h3 style={{ color: "orange" }}>Is this a paid thing? </h3>
        <p style={{ color: "white" }}>
          Nope, all free! Flickhub is completely free to use. Netflix, Prime and
          other streaming services aren’t free though. So you gotta pay for
          that, unless you have a friend, who has a friend. You know what I
          mean?
        </p>
      </div>

      {/* 3 */}
      <div className="card" style={faqCardStyle}>
        <h3 style={{ color: "orange" }}>Are you a streaming service?</h3>
        <p style={{ color: "white" }}>
          No, we aren’t. Right now, we’re just connecting you to other online
          streaming platforms.
        </p>
      </div>

      {/* 4 */}
      <div className="card" style={faqCardStyle}>
        <h3 style={{ color: "orange" }}>What countries do you support?</h3>
        <p style={{ color: "white" }}>
          Just India as of now. We’re planning to amplify our reach soon.
        </p>
      </div>

      {/* 5 */}
      <div className="card" style={faqCardStyle}>
        <h3 style={{ color: "orange" }}>Where do you get your data from?</h3>
        <p style={{ color: "white" }}>
          We gather our data from the magical internet and then our algorithms
          just flick their wands, combine and clean everything so that you are
          transported to an easy-to-use interface that deeplinks to the right
          place every time.
        </p>
      </div>

      {/* 6 */}
      <div className="card" style={faqCardStyle}>
        <h3 style={{ color: "orange" }}>Do you have an app?</h3>
        <p style={{ color: "white" }}>We don’t have an app yet. But soon!</p>
      </div>
    </div>
  );
};

export default Faq;
