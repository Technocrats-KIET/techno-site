import React from "react";
import "./event.css";
import DomainCard from "../../Components/Domaincard/Domaincard";
import { Link } from "react-router-dom";
const websitelaunch1 = "/Events/website-launch.webp";
const sangam1 = "/Events/sangam1.webp";
const techno1 = "/Events/techno1.webp";
const career1 = "/Events/careerguide1.webp";
const ing1 = "/Events/Inga1.webp";
const hackers1 = "/Events/hh1.webp";
const innotech1 = "/Events/Innotech1.JPG.webp";
const technoverse1 = "/Events/technoverse1.webp";
const foundationday = "/Events/foundation1.webp";
const uiux1 = "/Events/uiux1.webp";
const ml1 = "/Events/ml1.webp";
const technoverse3= "/Events/technoverse3.0.webp";


const data = [
  {
    name:"Inauguration Ceremony",
    img:ing1,
  },
  {
    name: "Technoverse 3.0",
    img: technoverse3,
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
    name: "Technoverse",
    addon: "date here ",
    img: techno1,
  },
  {
    name:"2nd foundation day",
    img:foundationday,
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
    name: "Career Guidance",
    addon: "date here ",
    img: career1,
  },  {
    name: "THE HACKER'S MEETUP",
    addon: "date here ",
    img: hackers1,
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
