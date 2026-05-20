import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Achievement.module.css";

const cards = [
  {
    tag: "HACKATHONS",
    title: "Hackathon Wins",
    description:
      "From Smart India Hackathon to NASA Space Apps Challenge, our members have conquered prestigious national competitions, bringing home trophies and recognition across India's top technical institutions.",
    image: {
      src: "/Achievements/SIH.webp",
      alt: "Hackathon",
      width: 1080,
      height: 1080,
    },
    cta: "Explore All Hackathons",
    route: "/achievements/hackathons",
    cardClass: "hackathonCard",
  },
  {
    tag: "INTERNSHIPS",
    title: "Industry Internships",
    description:
      "Our members secure coveted positions at companies like NEC Corporation India, Ostello India Pvt Ltd, and TBI-KIET, turning academic passion into real-world product impact.",
    image: {
      src: "/Achievements/abhinavintern.webp",
      alt: "Internship",
      width: 1080,
      height: 1159,
    },
    cta: "Explore All Internships",
    route: "/achievements/internships",
    cardClass: "internCard",
  },
];

const Achievement = () => {
  const navigate = useNavigate();

  return (
    <section className={styles.pageWrapper}>
      <h1 className={styles.sectionHeading}>
        <span className={styles.headingAccent}>OUR</span> ACHIEVEMENTS
      </h1>
      <p className={styles.sectionSubtitle}>
        Milestones that define the Technocrats journey
      </p>

      <div className={styles.cardsContainer}>
        {cards.map((c) => (
          <div
            key={c.tag}
            className={`${styles.card} ${styles[c.cardClass]}`}
            onClick={() => navigate(c.route)}
          >
            <div className={styles.cardTag}>{c.tag}</div>
            <div className={styles.cardImageGrid}>
              <img
                width={c.image.width}
                height={c.image.height}
                loading="lazy"
                decoding="async"
                src={c.image.src}
                alt={c.image.alt}
                className={styles.gridImg}
              />
            </div>
            <div className={styles.cardBody}>
              <h2 className={styles.cardTitle}>{c.title}</h2>
              <p className={styles.cardDesc}>{c.description}</p>
              <div className={styles.cta}>
                {c.cta}
                <span className={styles.ctaArrow}>→</span>
              </div>
            </div>
            <div className={styles.cardGlow} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
