import React from "react";
import styles from "./Internship.module.css";
import { achievements } from "../../data/achievements";

const ShareIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z"
    />
  </svg>
);

const AchievementCard = ({ title, image, description, link }) => (
  <div className={styles.achievementCard}>
    <div className={styles.achievementCardImageWrapper}>
      <img
        width="400"
        height="300"
        loading="lazy"
        decoding="async"
        src={image}
        alt={title}
        className={styles.achievementCardImage}
      />
      <div className={styles.achievementCardImageOverlay} />
    </div>
    <div className={styles.achievementCardBody}>
      <h3 className={styles.achievementCardTitle}>{title}</h3>
      <p className={styles.achievementCardDescription}>{description}</p>
      {link && (
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className={styles.achievementCardBtn}
        >
          View Post
          <ShareIcon />
        </a>
      )}
    </div>
  </div>
);

const Internship = () => (
  <div className={styles.achievementPage}>
    <div className={styles.achievementGrid}>
      {achievements.map((item) => (
        <AchievementCard
          key={item.id}
          title={item.title}
          image={item.image}
          description={item.description}
          link={item.link}
        />
      ))}
    </div>
  </div>
);

export default Internship;
