import React from "react";
import styles from "./Home.module.css";
import About from "../About/About";
import Domain from "../Domain/Domain";
import Testimonial from "../Testimonials/Testimonial";
import Gallery from "../Gallery/Gallery";
import Contact from "../Contact/Contact";
import { useEffect, useRef } from "react";

const Home = () => {
  const container = useRef(null);

  useEffect(() => {
    let anim;
    let cancelled = false;
    Promise.all([
      import(/* webpackChunkName: "lottie" */ "lottie-web"),
      import(/* webpackChunkName: "home-animation" */ "../../animation.json"),
    ]).then(([lottieMod, animationMod]) => {
      if (cancelled || !container.current) return;
      anim = lottieMod.default.loadAnimation({
        animationData: animationMod.default,
        autoplay: true,
        container: container.current,
        loop: true,
        renderer: "svg",
      });
    });
    return () => {
      cancelled = true;
      anim?.destroy();
    };
  }, []);

  return (
    <div>
      <div className={styles.container}>
        <div className={styles.topheading}>TECHNOCRATS</div>
        <div className={styles.heading_2}>LEAD-COLLABORATE-EXPLORE</div>
        <div
          ref={container}
          id="animation-container"
          className={styles.lottie}
        ></div>
      </div>
      <About />
      <Domain />
      <Testimonial />
      {/*<Teamsection/>*/}
      <Gallery />

      <Contact />
    </div>
  );
};

export default Home;
