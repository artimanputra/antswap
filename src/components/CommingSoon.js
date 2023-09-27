import React from 'react';
import { animated, useSpring } from 'react-spring';
import styles from './comming.module.css';

const ComingSoon = () => {
  // Animation for the title
  const titleSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-50px)' },
  });

  // Animation for the countdown
  const countdownSpring = useSpring({
    opacity: 1,
    transform: 'scale(1)',
    from: { opacity: 0, transform: 'scale(0.5)' },
    delay: 300,
  });

  return (
    <div className={styles.comingSoonContainer}>
      <animated.h1 className={styles.title} style={titleSpring}>
        Coming Soon!
      </animated.h1>
      <animated.div className={styles.countdown} style={countdownSpring}>
        <p>Our website is under construction.</p>
        <p>We'll be back shortly.</p>
        {/* Add your countdown timer component here */}
      </animated.div>
    </div>
  );
};

export default ComingSoon;
