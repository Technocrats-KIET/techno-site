import React from "react";
import "./event.css";
import DomainCard from "../../Components/Domaincard/Domaincard";
import { Link } from "react-router-dom";
const websitelaunch1 = "/assets/website-launch.webp";
const sangam1 = "/assets/sangam1.webp";
const techno1 = "/assets/techno1.webp";
const career1 = "/assets/careerguide1.webp";
const ing1 = "/assets/Inga1.webp";
const hackers1 = "/assets/hh1.webp";
const innotech1 = "/assets/Innotech1.JPG.webp";
const technoverse1 = "/assets/technoverse1.webp";
const foundationday = "/assets/foundation1.webp";
const uiux1 = "/assets/uiux1.webp";
const ml1 = "/assets/ml1.webp";



const data = [
  {
    name:"Inauguration Ceremony",
    img:ing1,
  },
  {
    name: "Technocrats Website",
    addon: "date here ",
    img: websitelaunch1,
  },
  {
    name: "WEB 3 SANGAM",
    addon: "date here ",
    img: sangam1,
  },
  {
    name: "Technoverse",
    addon: "date here ",
    img: techno1,
  },
  {
    name: "Career Guidance",
    addon: "date here ",
    img: career1,
  },
  {
    name: "THE HACKER'S MEETUP",
    addon: "date here ",
    img: hackers1,
  },
  {
    name:"Organised Innotech'25",
    img:innotech1,
  },
  {
    name:"Technoverse 2.0",
    img:technoverse1,
  },
  {
    name:"2nd foundation day",
    img:foundationday,
  },
  {
    name:"UI/UX Bootcamp",
    img:uiux1,
  },{
    name:"Machine Learning Bootcamp",
    img:ml1,
  }
];

const Event = () => {
  return (
    <div className="domain_wrapper">
      <div className="bgname">Events</div>
      <div className="test_text">
        Highlighted Upcoming <div>Milestones </div>{" "}
      </div>
      <div className="domain_container">
        {data.map((event) => (
          <Link
            key={event.name}
            style={{ textDecoration: "none" }}
            to={`/hackers/${encodeURIComponent(event.name)}`}
          >
            <DomainCard addon={event.addon} name={event.name} img={event.img} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Event;
