import React from 'react';
import { animated, useSpring } from 'react-spring';
import styles from './comming.module.css';
import Navbar from './navbar';

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
    <>
      <Navbar />
      <section className=" h-screen py-20 flex justify-center items-center hero-section">
        <div className=" text-white w-[80%] z-90 h-full min-w-[70%] flex items-center title max-sl:p-4 max-sl:flex-col max-sl:justify-evenly max-sm:w-[100%]">
          <div className=" pr-10 opacity-100 transform translate-x-0 w-[60%]  translate-y-0 translate-z-0 scale-100 rotate-x-0 rotate-y-0 rotate-z-0 skew-x-0 flex-col items-start flex skew-y-0 transform-style-preserve-3d welcome max-sm:w-[100%] max-sm:px-0 max-sm:items-center">

            <div className=" w-[50%] xs:w-[70%]  hero_video2">
              <video autoPlay loop muted>
                <source src="/video.mp4" type="video/mp4" />
              </video>
            </div>
            <span className=" text-left leading-tight pb-5 text-3xl pt-4">
            <animated.h1 className={styles.title} style={titleSpring}>
            DEX IS Coming Soon!
          </animated.h1>
            </span>
          
          </div>
          <div className=" w-[50%] xs:w-[70%]  hero_video">
            <video autoPlay loop muted>
              <source src="/video.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>
    </>
  );
};

export default ComingSoon;
