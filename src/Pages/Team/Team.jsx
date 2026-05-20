import React from "react";
import styles from "./Team.module.css";
import Teamcard from "../../Components/TeamCard/Teamcard";
import {
  coreTeam2024,
  coreTeam2025,
  coreTeam2026,
  founders,
  heroImages,
} from "../../data/team";

const sections = [
  { title: "Core Team 2026", members: coreTeam2026 },
  { title: "Core Team 2025", members: coreTeam2025 },
  { title: "First Core Team", members: coreTeam2024 },
  { title: "Founders", members: founders },
];

const Team = () => {
  return (
    <div className={styles.testimonial_wrapper}>
      <div className={styles.bgname}> TEAM</div>
      <div className={styles.test_text}>
        The People who Drive <div>our Mission </div>{" "}
      </div>
      <div className={styles.mainimgdiv}>
        <img
          width="917"
          height="437"
          loading="lazy"
          decoding="async"
          className={styles.team_img}
          src={heroImages.groupPhoto}
          alt="illust"
        />
      </div>

      {sections.map(({ title, members }) => (
        <React.Fragment key={title}>
          <div className={styles.test_text}>{title} </div>
          <div className={styles.team_container}>
            {members.map((e) => (
              <Teamcard key={e.name} name={e.name} img={e.img} role={e.role} />
            ))}
          </div>
        </React.Fragment>
      ))}

      <div className={styles.mainimgdiv}>
        <img
          width="1280"
          height="511"
          loading="lazy"
          decoding="async"
          className={styles.team_img}
          src={heroImages.coreTeam}
          alt="illust"
        />
      </div>
    </div>
  );
};

export default Team;
