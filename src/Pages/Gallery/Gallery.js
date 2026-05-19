import React from 'react'
import styles from './Gallery.module.css'
import Gallerycard from '../../Components/GalleryCard/Gallerycard'

const glimpse1 = "/assets/glimpse/glimpse1.webp";
const glimpse2 = "/assets/glimpse/glimpse2.webp";
const glimpse3 = "/assets/glimpse/glimpse3.webp";
const glimpse4 = "/assets/glimpse/glimpse4.webp";
const glimpse5 = "/assets/glimpse/glimpse5.webp";

const imgdata = [
  {
    name:"aryan",
    img:glimpse1
  },
  {
    name:"aryan",
    img:glimpse5
  }
  , {
    name:"aryan",
    img:glimpse4
  }, {
    name:"aryan",
    img:glimpse3
  } ,{
    name:"aryan",
    img:glimpse2
  }
]
const Gallery = () => {
  return (
    <div className={styles.testimonial_wrapper} id="gallery_here">
    <div className={styles.bgname}> GALLERY</div>
    <div className={styles.test_text}>
    A Glimpse of Our  <div>Vision</div> </div>
<div className={styles.imagecontainer}>
{imgdata.map((e)=><Gallerycard key={e.img} image={e.img}/>)}
</div>
{/* <button className={styles.gall_btn}>Show More</button> */}
  </div>
  )
}

export default Gallery
