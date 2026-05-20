import React from 'react'
import styles from './Gallerycard.module.css';
const Gallerycard = (props) => {
  return (
    <div >
     <img loading="lazy" decoding="async" className={styles.imggall} src={props.image} alt="illustartion"/> 
    </div>
  )
}

export default Gallerycard
