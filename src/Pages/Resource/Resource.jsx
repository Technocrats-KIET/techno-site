import React from "react";
import { Link } from "react-router-dom";
import styles from "./Resource.module.css";
import Domaincard from "../../Components/Domaincard/Domaincard";
import { resourceLinks } from "../../data/domains";

const Resource = () => (
  <div className={styles.domain_wrapper}>
    <div className={styles.bgname}> RESOURCES</div>
    <div className={styles.test_text}>
      Maximize Efficiency with <div>Tech Resources </div>{" "}
    </div>
    <div className={styles.domain_container}>
      {resourceLinks.map((e) => (
        <Link
          key={e.name}
          style={{ textDecoration: "none" }}
          to={"/course?c=" + e.name}
        >
          <Domaincard addon={e.addon} name={e.name} img={e.img} data={e.data} />
        </Link>
      ))}
    </div>
  </div>
);

export default Resource;
