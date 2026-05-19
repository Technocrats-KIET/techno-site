// import React from "react";
// import styles from "./Teamcard.module.css";



// const Teamcard = (props) => {
//   return (
//     <div className={styles.team_card_wrapper}>
//       <img loading="lazy" decoding="async" className={styles.teammate_img} src={props.img} alt="illustartion" />
//       <div className={styles.teammate_name}>{props.name}</div>
//       <div className={styles.teammate_name}>{props.role}</div>
//     </div>
//   );
// };

// export default Teamcard;
import React from "react";
import styles from "./Teamcard.module.css";

const Teamcard = ({ name, role, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img loading="lazy" decoding="async" src={img} alt={name} />
      </div>

      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.role}>{role}</div>
      </div>
    </div>
  );
};

export default Teamcard;
