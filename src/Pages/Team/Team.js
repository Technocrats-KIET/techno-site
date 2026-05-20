import React from "react";
import styles from "./Team.module.css";
import Teamcard from "../../Components/TeamCard/Teamcard";
// import teamsample from "../../Assets/team/team.JPG";
const aryan = "/Team/2k24 core/aryan.webp";
const Prashant = "/Team/founders/prashant.webp";
const raj = "/Team/founders/raj.webp";
const garvit = "/Team/2k24 core/garvit.webp";
const veer = "/Team/founders/narwar.webp";
const raunak = "/Team/2k24 core/raunak.webp";
const utlarsh = "/Team/2k24 core/utkarsh.webp";
const sanskriti = "/Team/founders/vats.webp";
const tushar = "/Team/2k24 core/tushar.webp";
const AdityaMohan = "/Team/2k25 core/aditya.webp";
const AshutoshMishra = "/Team/2k25 core/ashutosh.webp";
const Ananya = "/Team/2k25 core/ananya.webp";
const Pranshu = "/Team/2k25 core/pranshu.webp";
const shreya = "/Team/2k25 core/shruti.webp";
const Siddarth = "/Team/2k25 core/sid.webp";
const Nishika = "/Team/2k25 core/nishika.webp";
const Shreya = "/Team/2k25 core/shreya.webp";
const Rithik = "/Team/2k25 core/hrithik_android.webp";
const Sahil = "/Team/2k25 core/sahil.webp";
const Anoushka = "/Team/2k25 core/anushka.webp";
const Sarvin = "/Team/2k25 core/sarvin.webp";
const Shreevesh = "/Team/2k25 core/shreevesh.webp";
const coreTeam = "/Team/updated_team.webp";
const updatedteam = "/Team/innotech1.webp";
const Rashi = "/Team/2k26 core/Rashi.webp";
const Ishika = "/Team/2k26 core/Ishika.webp";
const Sarthak = "/Team/2k26 core/Sarthak.webp";
const Gaurang = "/Team/2k26 core/Gaurang.webp";
const Ankit = "/Team/2k26 core/Ankit.webp";
const Ashwani = "/Team/2k26 core/Ashwani.webp";
const Rauniyar = "/Team/2k26 core/Rauniyar.webp";
const Naimish = "/Team/2k26 core/Naimish.webp";
const Ujjwal = "/Team/2k26 core/Ujjwal.webp";
const Vartika = "/Team/2k26 core/Vartika.webp";
const Akshat = "/Team/2k26 core/Akshat.webp";
const Unnati = "/Team/2k26 core/Unnati.webp";
const Raj = "/Team/2k26 core/Raj.webp";
const Ronit = "/Team/2k26 core/Ronit.webp";
const Prashant2 = "/Team/2k26 core/Prashant2.webp";
const Rishabh = "/Team/2k26 core/Rishabh.webp";
const Anas = "/Team/2k26 core/Anas.webp";
const Priyanshi = "/Team/2k26 core/Priyanshi.webp";
const Anshika = "/Team/2k26 core/Anshika.webp";
const Yash = "/Team/2k26 core/yash.webp";
const Saurabh = "/Team/2k26 core/Saurabh.webp";
const Priyanshu = "/Team/2k26 core/Priyanshu.webp";
const Harsh = "/Team/2k26 core/Harsh.webp";
const Riya = "/Team/2k26 core/Riya.webp";





const founderteam = [
  {
    name: "Harveer Narwar",
    role: " ",
    img: veer,
  },
  {
    name: "Prashant Rai",
    role: "",
    img: Prashant,
  },
  {
    name: "Raj Pandey",
    role: "",
    img: raj,
  },

  {
    name: "Sanskriti Vats",
    role: "",
    img: sanskriti,
  },
];

const current2026 = [
  {
    name: "Gaurang Agarwal",
    role: "President",
    img: Gaurang,
  },
  {
    name: "Ishika Tyagi",
    role: "Vice President",
    img: Ishika,
  },
  {
    name: "Rashi Gupta",
    role: "General Secretary",
    img: Rashi,
  },
  {
    name: "Sarthak Srivastava",
    role: "Community manager",
    img: Sarthak,
  },
  {
    name: "Ankit Kumar",
    role: "Management Lead",
    img: Ankit,
  },
  {
    name: "Ashwani Bhardwaj ",
    role: "Co-Management Lead",
    img: Ashwani,
  },

  {
    name: "Aditya Rauniyar ",
    role: "Co-Management Lead",
    img: Rauniyar,
  },
  {
    name: "Akshat Shukla",
    role: "Web Lead",
    img: Akshat,
  },
  {
    name: "Vartika Agrawal ",
    role: "Web Coordinator",
    img: Vartika,
  },
  {
    name: "Unnati Gupta",
    role: "Web Coordinator",
    img: Unnati,
  },
    {
    name: "Naimish Omar",
    role: "UI/UX Lead",
    img: Naimish,
  },
  {
    name: "Ujjwal Upadhyay",
    role: "UI/UX Coordinator",
    img: Ujjwal,
  },
  {
    name: "Ronit Jain",
    role: "AR/VR Lead",
    img: Ronit,
  },
  {
    name: "Raj Singh",
    role: "AR/VR Coordinator",
    img: Raj,
  },
  {
    name: "Anas Ahmad",
    role: "Cybersecurity Lead",
    img: Anas,
  },
  {
    name: "Rishabh Gupta",
    role: "Cybersecurity Coordinator",
    img: Rishabh,
  },
  {
    name: "Prashant Kumar Jha",
    role: "Cybersecurity Coordinator",
    img: Prashant2,
  },
  {
    name: "Priyanshi Govil ",
    role: "DSA Lead",
    img: Priyanshi,
  },
  {
    name: "Saurabh Tripathi",
    role: "DSA Coordinator",
    img: Saurabh,
  },
  {
    name: "Anshika Sanghal",
    role: "Android Lead",
    img: Anshika,
  },
  {
    name: "Yash Jain",
    role: "ML Lead",
    img: Yash,
  },
  {
    name: "Priyanshu Upadhyay",
    role: "ML Coordinator",
    img: Priyanshu,
  },
  {
    name: "Harsh Singh ",
    role: "Social Lead",
    img: Harsh,
  },
  {
    name: "Riya Gupta",
    role: "Content Lead",
    img: Riya,
  },
 
];

const current2025 = [
  {
    name: "Ananya Srivastava",
    role: "President",
    img: Ananya,
  },
  {
    name: "Pranshu Gupta",
    role: "Vice President",
    img: Pranshu,
  },
  {
    name: "Shreya Bhradwaj ",
    role: "General Secretary",
    img: shreya,
  },
  {
    name: "Siddarth Yadav",
    role: "Community manager",
    img: Siddarth,
  },
  {
    name: "Nishika tyagi  ",
    role: "Social Media Lead",
    img: Nishika,
  },
  {
    name: "Shreevesh Kumar ",
    role: "Web Lead",
    img: Shreevesh,
  },

  {
    name: "Ritik Bhatt",
    role: "Android Lead",
    img: Rithik,
  },
  {
    name: "Shreya punani",
    role: "Cyber Lead",
    img: Shreya,
  },
  {
    name: "Ashutosh Mishra ",
    role: "ML Lead",
    img: AshutoshMishra,
  },
  {
    name: "Sarvin srivastava",
    role: "AR/VR Lead",
    img: Sarvin,
  },
  {
    name: "Sahil Panwar",
    role: "UI/UX Lead",
    img: Sahil,
  },
  {
    name: "Anoushka  ",
    role: "Content Lead",
    img: Anoushka,
  },
  {
    name: "Aditya Mohan ",
    role: "CP/DSA Lead",
    img: AdityaMohan,
  },
];

const pastcoreteam = [
  {
    name: "Aryan Tiwari",
    role: "Web Lead",
    img: aryan,
  },
  {
    name: "Garvit Agarwal",
    role: "ML Lead",
    img: garvit,
  },
  {
    name: "Raunak Seth",
    role: "Android Lead",
    img: raunak,
  },
  {
    name: "Utkarsh Shukla",
    role: "AR/VR Lead",
    img: utlarsh,
  },
  {
    name: "Tushar Singh",
    role: "UI/UX Lead",
    img: tushar,
  },
];

const Team = () => {
  return (
    <div className={styles.testimonial_wrapper}>
      <div className={styles.bgname}> TEAM</div>
      <div className={styles.test_text}>
        The People who Drive <div>our Mission </div>{" "}
      </div>
      <div className={styles.mainimgdiv}>
        <img loading="lazy" decoding="async" className={styles.team_img} src={updatedteam} alt="illust" />
      </div>
      {/*core team of 2026*/ }
      <div className={styles.test_text}>Core Team 2026 </div>

      <div className={styles.team_container}>
        {current2026.map((e) => (
          <Teamcard key={e.name} name={e.name} img={e.img} role={e.role} />
        ))}
      </div>
      {/*core team of 2025*/ }
      <div className={styles.test_text}>Core Team 2025 </div>

      <div className={styles.team_container}>
        {current2025.map((e) => (
          <Teamcard key={e.name} name={e.name} img={e.img} role={e.role} />
        ))}
      </div>

      <div className={styles.test_text}>First Core Team </div>

      <div className={styles.team_container}>
        {pastcoreteam.map((e) => (
          <Teamcard key={e.name} name={e.name} img={e.img} role={e.role} />
        ))}
      </div>
      <div className={styles.test_text}>Founders </div>

      <div className={styles.team_container}>
        {founderteam.map((e) => (
          <Teamcard key={e.name} name={e.name} img={e.img} role={e.role} />
        ))}
      </div>
      <div className={styles.mainimgdiv}>
        <img loading="lazy" decoding="async" className={styles.team_img} src={coreTeam} alt="illust" />
      </div>
    </div>
  );
};

export default Team;
