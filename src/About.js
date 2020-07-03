import React from "react";

import "./App.css"
import { useMediaQuery } from "react-responsive";
import { Route } from "react-router-dom";

const About = (props) => {

  const mobile = useMediaQuery({ minWidth: 600 });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        color: "white",
        marginTop: "125px",
        flexWrap: "wrap",
      }}
    >
      <p
        style={{
          color: "white",
          width: "80%",
          marginTop: "50px",
          textAlign: "center",
          fontSize: props.font ? props.font : "25px",
        }}
      >
        <h1
        id="aboutHead"
          style={{
            color: "white",
            fontSize: props.headFontSize ? props.headFontSize : "75px",
          }}
        >
          The significance of our existence
        </h1>

        <p
          style={{
            marginTop: "50px",
            textAlign: "left",
            // padding: mobile ? "0px" : "50px 110px"
          }}
        >
          Did you have a particular show in mind, something you really want to
          watch but you’re not sure where you’ll find it? Because you certainly
          don’t see it on Netflix right now and Google is just not helping today
          ! If the questions, ‘What to watch?, Where to watch? And Where is this
          damn show streaming? haunt you, you are at the right place!
          <br />
          <br />
          The idea for Flickhub was born just like this. We were not sure where
          to find this movie we wanted to watch. We have all been there, right?
          And we thought, “What if we had a platform that will tell us what show
          is streaming on which OTT platform so that we can binge watch this,
          ‘must watch web series’ without the whole hassle of going on each
          platform and manually looking for it? This is exactly what we do.
          <br />
          <br />
          We connect you to non-stop entertainment of your choice. We help you
          find the perfect tv show, an awesome movie or that documentary you
          wanted to watch in this big jungle of online streaming platforms. With
          us by your side, you will never have to google, ‘Where is this
          streaming?, ‘Is this available on Amazon Prime?’ ‘Where can I watch
          Shawshank?’ etc, etc. At Flickhub, we cover OTT (over the top)
          platforms like Netflix, Amazon Prime video, Bigflix, Voot, ALT Balaji,
          Viu, Sony LIV, Eros now, ZEE5 and Disney + Hotstar.
          <br />
          <br />
          We not only help you find the trending, popular and high quality
          content streaming online, but also recommend the top rated and must
          watch shows and movies you can binge on! You will never miss those
          exclusive thrillers, action flicks, romantic movies and those
          underrated crime shows that no one talks about. No matter what genre
          you’re into, we have something for you! Basically, we’re your new BFFs
          in the browsing department, because “Nobody searches it better!” So,
          browse away, my friend.
        </p>
      </p>

        <section
          id="contactInfo"
          className="card"
          style={{
            display: "flex",
            padding: useMediaQuery({ minWidth: 600 }) ? "50px" : "30px",
            font: "white",
            width: useMediaQuery({ minWidth: 600 }) ? "50%" : "75%",
            background: "rgba(50,50,50)",
            margin: "50px",
            transition: "all 0.3s linear",
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.boxShadow = mobile
              ? "5px 2px 30px rgba(20,20,20)"
              : "";
            e.currentTarget.style.transform = mobile
              ? "translate(-3px,-3px)"
              : "";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow = "";
            e.currentTarget.style.transform = "translate(0px,0px)";
          }}
        >
          <h1>Contact</h1>
          <p>
            Feel free to reach us anytime, we are super friendly and always
            ready to answer your questions.
            <br />
            <br />
            <b>Mail us at - </b>
            <span style={{ color: "orange" }}>info.flickhub@gmail.com</span>
            <br />
            <b>Call/Whatsapp - </b>
            <span style={{ color: "orange" }}>8989882529</span>
          </p>
        </section>

      {/* <a href="#aboutHead">Top</a> */}
    </div>
  );
};

export default About;
