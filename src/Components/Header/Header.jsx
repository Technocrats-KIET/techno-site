import React from "react";
import { Link } from "react-router-dom";
import { FcMenu } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";
import styles from "./header.module.css";
import { useMobileMenu } from "../../hooks/useMobileMenu";

const clubIcon = "/common/clubIcon.webp";
const joinUrl = "https://chat.whatsapp.com/Gi9OoTWITrnCPd6URsgQFj";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Team" },
  { to: "/event", label: "Event" },
  { to: "/achievement", label: "Achievement" },
  { to: "/resource", label: "Resources" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const { isOpen, isMobile, toggle, close } = useMobileMenu();

  const linkClass = `${isOpen ? styles.nav_mobile_view : ""} ${styles.nav_link}`;

  return (
    <div className={styles.nav_container}>
      <img
        loading="lazy"
        decoding="async"
        src={clubIcon}
        className={styles.club_icon_img}
        alt="logoicon"
      />

      <div
        className={`${!isMobile ? styles.link_container : styles.close_menu} ${
          isOpen ? styles.mobile_view : ""
        }`}
      >
        <div
          style={{
            border: "2px solid grey",
            borderRadius: "5px",
            margin: "10px",
          }}
          className={`${styles.ham_menu} ${isMobile ? "" : styles.close_menu}`}
          onClick={toggle}
        >
          <RxCross2
            style={{ marginTop: "12px", borderBottom: "2px solid grey" }}
            className={styles.close_icon}
            size={30}
            color="white"
          />
        </div>

        {navLinks.map(({ to, label }) => (
          <Link key={to} to={to} onClick={close} className={linkClass}>
            {label}
          </Link>
        ))}

        {isOpen && (
          <a href={joinUrl}>
            <button className={styles.join_mobile}>Join Us</button>
          </a>
        )}
      </div>

      <a href={joinUrl}>
        <button className={styles.joinbtn}>Join Us</button>
      </a>

      <div
        className={`${styles.ham_menu} ${isMobile ? "" : styles.close_menu}`}
        onClick={toggle}
      >
        <FcMenu size={30} />
      </div>
    </div>
  );
};

export default Header;
