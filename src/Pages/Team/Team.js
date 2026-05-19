import React from "react";
import styles from "./Team.module.css";
import Teamcard from "../../Components/TeamCard/Teamcard";
// import teamsample from "../../Assets/team/team.JPG";
const aryan = "/assets/team/aryan.webp";
const Prashant = "/assets/team/prashant.webp";
const raj = "/assets/team/raj.webp";
const garvit = "/assets/team/garvit.webp";
const veer = "/assets/team/narwar.webp";
const raunak = "/assets/team/raunak.webp";
const utlarsh = "/assets/team/utkarsh.webp";
const sanskriti = "/assets/team/vats.webp";
const tushar = "/assets/team/tushar.webp";
const AdityaMohan = "/assets/team/currenteam/aditya.webp";
const AshutoshMishra = "/assets/team/currenteam/ashutosh.webp";
const Ananya = "/assets/team/currenteam/ananya.webp";
const Pranshu = "/assets/team/currenteam/pranshu.webp";
const shreya = "/assets/team/currenteam/shruti.webp";
const Siddarth = "/assets/team/currenteam/sid.webp";
const Nishika = "/assets/team/currenteam/nishika.webp";
const Shreya = "/assets/team/currenteam/shreya.webp";
const Rithik = "/assets/team/currenteam/hrithik_android.webp";
const Sahil = "/assets/team/currenteam/sahil.webp";
const Anoushka = "/assets/team/currenteam/anushka.webp";
const Sarvin = "/assets/team/currenteam/sarvin.webp";
const Shreevesh = "/assets/shreevesh.webp";
const coreTeam = "/assets/updated_team.webp";
const updatedteam = "/assets/innotech1.webp";
const Rashi = "/assets/team/currenteam/Rashi.webp";
const Ishika = "/assets/team/currenteam/Ishika.webp";
const Sarthak = "/assets/team/currenteam/Sarthak.webp";
const Gaurang = "/assets/team/currenteam/Gaurang.webp";
const Ankit = "/assets/team/currenteam/Ankit.webp";
const Ashwani = "/assets/team/currenteam/Ashwani.webp";
const Rauniyar = "/assets/team/currenteam/Rauniyar.webp";
const Naimish = "/assets/team/currenteam/Naimish.webp";
const Ujjwal = "/assets/team/currenteam/Ujjwal.webp";
const Vartika = "/assets/team/currenteam/Vartika.webp";
const Akshat = "/assets/team/currenteam/Akshat.webp";
const Unnati = "/assets/team/currenteam/Unnati.webp";
const Raj = "/assets/team/currenteam/Raj.webp";
const Ronit = "/assets/team/currenteam/Ronit.webp";
const Prashant2 = "/assets/team/currenteam/Prashant2.webp";
const Rishabh = "/assets/team/currenteam/Rishabh.webp";
const Anas = "/assets/team/currenteam/Anas.webp";
const Priyanshi = "/assets/team/currenteam/Priyanshi.webp";
const Anshika = "/assets/team/currenteam/Anshika.webp";
const Yash = "/assets/team/currenteam/yash.webp";
const Saurabh = "/assets/team/currenteam/Saurabh.webp";
const Priyanshu = "/assets/team/currenteam/Priyanshu.webp";
const Harsh = "/assets/team/currenteam/Harsh.webp";
const Riya = "/assets/team/currenteam/Riya.webp";





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
        <img className={styles.team_img} src={updatedteam} alt="illust" />
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
        <img className={styles.team_img} src={coreTeam} alt="illust" />
      </div>
    </div>
  );
};

export default Team;
