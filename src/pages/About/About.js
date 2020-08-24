import React from 'react';

import styles from './About.module.css';

const About = () => {
  return (
    <>
      <div className={styles.about__holder}>
        <h1 className={styles.header}>The significance of our existence</h1>
        <p className={styles.content}>
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
      </div>
      <div className={styles.about__holder}>
        <h1 className={styles.contact__header}>Contact</h1>
        <p className={styles.contact__details}>
          Feel free to reach us anytime, we are super friendly and always ready
          to answer your questions.
          <br />
          <br />
          <b>Mail us at - </b>
          <a className={styles.orange} href="mailto:info.flickhub@gmail.com">
            info.flickhub@gmail.com
          </a>
          <br />
          <b>Call/Whatsapp - </b>
          <span className={styles.orange}>8989882529</span>
        </p>
      </div>
    </>
  );
};

export default About;
