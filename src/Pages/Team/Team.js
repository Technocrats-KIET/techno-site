import React from "react";
import styles from "./Team.module.css";
import Teamcard from "../../Components/TeamCard/Teamcard";
// import teamsample from "../../Assets/team/team.JPG";
import aryan from "../../Assets/team/aryan.png";
import Prashant from "../../Assets/team/prashant.png";
import raj from "../../Assets/team/raj.png";
import garvit from "../../Assets/team/garvit.png";
import veer from "../../Assets/team/narwar.png";
import raunak from "../../Assets/team/raunak.png";
import utlarsh from "../../Assets/team/utkarsh.png";
import sanskriti from "../../Assets/team/vats.png";
import tushar from "../../Assets/team/tushar.png";
import AdityaMohan from "../../Assets/team/currenteam/aditya.png";
import AshutoshMishra from "../../Assets/team/currenteam/ashutosh.png";
import Ananya from "../../Assets/team/currenteam/ananya.png";
import Pranshu from "../../Assets/team/currenteam/pranshu.png";
import shreya from "../../Assets/team/currenteam/shruti.png";
import Siddarth from "../../Assets/team/currenteam/sid.png";
import Nishika from "../../Assets/team/currenteam/nishika.png";
import Shreya from "../../Assets/team/currenteam/shreya.png";
import Rithik from "../../Assets/team/currenteam/hrithik_android.png";
import Sahil from "../../Assets/team/currenteam/sahil.png";
import Anoushka from "../../Assets/team/currenteam/anushka.png";
import Sarvin from "../../Assets/team/currenteam/sarvin.png";
import Shreevesh from "../../Assets/shreevesh.png";
import coreTeam from "../../Assets/updated_team.jpg";
import updatedteam from "../../Assets/innotech1.png";
import Rashi from "../../Assets/team/currenteam/Rashi.jpg";
import Ishika from "../../Assets/team/currenteam/Ishika.jpeg";
import Sarthak from "../../Assets/team/currenteam/Sarthak.jpg";
import Gaurang from "../../Assets/team/currenteam/Gaurang.jpg";
import Ankit from  "../../Assets/team/currenteam/Ankit.jpg";
import Ashwani from "../../Assets/team/currenteam/Ashwani.jpg";
import Rauniyar from "../../Assets/team/currenteam/Rauniyar.jpg";
import Naimish from "../../Assets/team/currenteam/Naimish.jpg";
import Ujjwal from "../../Assets/team/currenteam/Ujjwal.jpg";
import Vartika from "../../Assets/team/currenteam/Vartika.jpg";
import Akshat from "../../Assets/team/currenteam/Akshat.jpg";
import Unnati from "../../Assets/team/currenteam/Unnati.jpg";
import Raj from "../../Assets/team/currenteam/Raj.jpg";
import Ronit from "../../Assets/team/currenteam/Ronit.jpg";
import Prashant2 from "../../Assets/team/currenteam/Prashant2.jpg";
import Rishabh from "../../Assets/team/currenteam/Rishabh.jpg";
import Anas from "../../Assets/team/currenteam/Anas.png";
import Priyanshi from "../../Assets/team/currenteam/Priyanshi.jpg";
import Anshika from "../../Assets/team/currenteam/Anshika.jpg";
import Yash from "../../Assets/team/currenteam/yash.jpg";
import Saurabh from "../../Assets/team/currenteam/Saurabh.jpg";
import Priyanshu from "../../Assets/team/currenteam/Priyanshu.jpg";
import Harsh from "../../Assets/team/currenteam/Harsh.jpg";
import Riya from "../../Assets/team/currenteam/Riya.jpg";





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
