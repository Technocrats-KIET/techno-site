import React from "react";
import styles from "./Resource.module.css";
import Domaincard from "../../Components/Domaincard/Domaincard";
import { Link } from "react-router-dom";

const and = "/Domain/android.webp";
const webd = "/Domain/webdev.webp";
const cyber = "/Domain/cybersecurity-card.webp";
const meta = "/Domain/arvr.webp";
const graphic = "/Domain/graphics.webp";
const ml = "/Domain/ml.webp";
const coding = "/Domain/coding.webp";
const content = "/Domain/cyber.webp";

const data = [
  {
    name: "Web",
    addon: "Development",
    data: "Examined as an existence in the soul of the Internet age, Web Development is a professional field which has helped the world envision numerous aspects of E-shopping, E-transition and many more ",
    img: webd,
  },
  {
    name: "Machine",
    addon: "Learning",
    data: "this is a web development ... ",
    img: ml,
  },
  {
    name: "Android",
    addon: "Development",
    data: "this is a web development ... ",
    img: and,
  },
  {
    name: "AR/VR",
    addon: "",
    data: "this is a web development ... ",
    img: meta,
  },
  {
    name: "CyberSecurity",
    addon: "Security",
    data: "this is a web development ... ",
    img: cyber,
  },
  {
    name: "CP/DSA",
    addon: " ",
    data: "this is a web development ... ",
    img: coding,
  },
  {
    name: "UI/UX",
    addon: " ",
    data: "this is a web development ... ",
    img: graphic,
  },
  {
    name: "Content",
    addon: "Writing",
    data: "this is a web development ... ",
    img: content,
  },
];
const Resource = () => {
  return (
    <div className={styles.domain_wrapper}>
      <div className={styles.bgname}> RESOURCES</div>
      <div className={styles.test_text}>
        Maximize Efficiency with <div>Tech Resources </div>{" "}
      </div>
      <div className={styles.domain_container}>
        {data.map((e) => (
          <Link style={{ textDecoration: "none" }} to={"/course?c=" + e.name}>
            <Domaincard
              addon={e.addon}
              key={e}
              name={e.name}
              img={e.img}
              data={e.data}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Resource;
