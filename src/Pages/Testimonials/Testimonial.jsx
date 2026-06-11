import React, { useState } from "react";
import styles from "./Testimonial.module.css";
import Testicard from "../../Components/Testicard/Testicard";
import { testimonials } from "../../data/testimonials";

const CARDS_PER_PAGE = 8;

const Testimonial = () => {
  const [page, setPage] = useState(0);

  const totalPages = Math.ceil(testimonials.length / CARDS_PER_PAGE);
  const start = page * CARDS_PER_PAGE;
  const visible = testimonials.slice(start, start + CARDS_PER_PAGE);

  return (
    <div className={styles.testimonial_wrapper}>
      <div className={styles.bgname}>SAY'S</div>
      <div className={styles.test_text}>
        Experience Our Excellence <div>Through Testimonials</div>
      </div>

      <div className={styles.testimonial_container}>
        {visible.map((e) => (
          <Testicard
            key={e.name}
            desc={e.desc}
            img={e.img}
            role={e.role}
            name={e.name}
            linkedin={e.linkedin}
            instagram={e.instagram}
            twitter={e.twitter}
          />
        ))}
      </div>

      {totalPages > 1 && (
        <div className={styles.pagination}>
          <button
            className={styles.page_btn}
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 0}
          >
            ← Prev
          </button>
          <span className={styles.page_info}>
            {page + 1} / {totalPages}
          </span>
          <button
            className={styles.page_btn}
            onClick={() => setPage((p) => p + 1)}
            disabled={page >= totalPages - 1}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
};

export default Testimonial;