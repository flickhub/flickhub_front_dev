import React from 'react';

import styles from './Faq.module.css';

const Faq = () => {
  return (
    <div className={styles.faq__holder}>
      {/* 1 */}
      <div className={styles.card}>
        <h3 className={styles.primary}>What is flickhub?</h3>
        <p className={styles.white}>
          We are a platform that helps you check where a certain movie or show
          is streaming. So that you don’t have to jump from one OTT platform to
          another looking for the movie you want to watch. We also recommend top
          rated shows and movies.
        </p>
      </div>

      {/* 2 */}
      <div className={styles.card}>
        <h3 className={styles.primary}>Is this a paid thing? </h3>
        <p className={styles.white}>
          Nope, all free! Flickhub is completely free to use. Netflix, Prime and
          other streaming services aren’t free though. So you gotta pay for
          that, unless you have a friend, who has a friend. You know what I
          mean?
        </p>
      </div>

      {/* 3 */}
      <div className={styles.card}>
        <h3 className={styles.primary}>Are you a streaming service?</h3>
        <p className={styles.white}>
          No, we aren’t. Right now, we’re just connecting you to other online
          streaming platforms.
        </p>
      </div>

      {/* 4 */}
      <div className={styles.card}>
        <h3 className={styles.primary}>What countries do you support?</h3>
        <p className={styles.white}>
          Just India as of now. We’re planning to amplify our reach soon.
        </p>
      </div>

      {/* 5 */}
      <div className={styles.card}>
        <h3 className={styles.primary}>Where do you get your data from?</h3>
        <p className={styles.white}>
          We gather our data from the magical internet and then our algorithms
          just flick their wands, combine and clean everything so that you are
          transported to an easy-to-use interface that deeplinks to the right
          place every time.
        </p>
      </div>

      {/* 6 */}
      <div className={styles.card}>
        <h3 className={styles.primary}>Do you have an app?</h3>
        <p className={styles.white}>We don’t have an app yet. But soon!</p>
      </div>
    </div>
  );
};

export default Faq;
