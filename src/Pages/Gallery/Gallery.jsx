import React from "react";
import styles from "./Gallery.module.css";
import Gallerycard from "../../Components/GalleryCard/Gallerycard";

const images = [
  "/Gallery/glimpse1.webp",
  "/Gallery/glimpse5.webp",
  "/Gallery/glimpse4.webp",
  "/Gallery/glimpse3.webp",
  "/Gallery/glimpse2.webp",
];

const Gallery = () => (
  <div className={styles.testimonial_wrapper} id="gallery_here">
    <div className={styles.bgname}> GALLERY</div>
    <div className={styles.test_text}>
      A Glimpse of Our <div>Vision</div>{" "}
    </div>
    <div className={styles.imagecontainer}>
      {images.map((src) => (
        <Gallerycard key={src} image={src} />
      ))}
    </div>
  </div>
);

export default Gallery;
