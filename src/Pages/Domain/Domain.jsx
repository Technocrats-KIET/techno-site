import React from "react";
import styles from "./Domain.module.css";
import Domaincard from "../../Components/Domaincard/Domaincard";
import { domainsShowcase } from "../../data/domains";

const Domain = () => (
  <div className={styles.domain_wrapper} id="domains_here">
    <div className={styles.bgname}>DOMAINS</div>
    <div className={styles.domain_text}>
      An Insight of Our Versatile
      <div> Domains</div>{" "}
    </div>
    <div className={styles.domain_container}>
      {domainsShowcase.map((e) => (
        <Domaincard
          key={e.name}
          addon={e.addon}
          name={e.name}
          img={e.img}
          data={e.data}
        />
      ))}
    </div>
  </div>
);

export default Domain;
