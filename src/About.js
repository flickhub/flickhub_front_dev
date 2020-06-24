import React from "react";

const About = (props) => {
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
          style={{
            color: "white",
            fontSize: props.headFontSize ? props.headFontSize : "",
          }}
        >
          The significance of our existence
        </h1>

        <p style={{ marginTop: props.margin ? props.margin : "50px" }}>
          Did you have a particular show in mind, something you really want to
          watch but you’re not sure where you’ll find it? Because you certainly
          don’t see it on Netflix right now and Google is just not helping
          today! Well, we have got you covered. The idea for Flickhub was born
          just like this. We were not sure where to find this movie we wanted to
          watch. We have all been there. :( So, we thought, “What if we had a
          platform that will tell us what movie is streaming on which platform
          so we can watch what we want without the whole hassle of going on each
          platform on looking for that one particular movie?" This is exactly
          what we do. We connect you to non stop entertainment of your choice.
          We help you find the perfect tv show, an awesome movie or that
          documentary you wanted to watch in this big jungle of online streaming
          platforms. At Flickhub, we cover OTT (over the top) platforms like
          Netflix, Amazon Prime video, Bigflix, Voot, ALT Balaji, Viu, Sony LIV,
          Eros now, ZEE5 and Hotstar. We not only help you find the trending,
          popular and high quality content streaming online, but also all the
          Bollywood and Hollywood movies, all the classics and the underrated
          shows that aren’t shown enough. Basically, we’re your new BFFs in the
          browsing department, because “Nobody searches it better!” So, browse
          away, my friend.
        </p>
      </p>
    </div>
  );
};

export default About;
