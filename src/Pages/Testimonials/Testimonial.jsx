import React from "react";
import styles from "./Testimonial.module.css";
import Testicard from "../../Components/Testicard/Testicard";
import { testimonials } from "../../data/testimonials";

const Testimonial = () => (
  <div className={styles.testimonial_wrapper}>
    <div className={styles.bgname}> SAY'S</div>
    <div className={styles.test_text}>
      Experience Our Excellence <div>Through Testimonials</div>{" "}
    </div>
    <div className={styles.testimonial_container}>
      {testimonials.map((e) => (
        <Testicard
          key={e.name}
          desc={e.desc}
          img={e.img}
          role={e.role}
          name={e.name}
          linkedin={e.linkedin}
          instagram={e.instagram}
          twitter={e.twitter}
        />
      ))}
    </div>
  </div>
);

export default Testimonial;
