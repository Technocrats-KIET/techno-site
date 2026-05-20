import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import styles from "./Course.module.css";
import CourseCard from "../../Components/CourseCard/CourseCard";
import { courseCatalog, categoryKeyMap } from "../../data/courses";

const Course = () => {
  const [params] = useSearchParams();
  const category = params.get("c");
  const courses = courseCatalog[categoryKeyMap[category]] ?? [];

  return (
    <div className={styles.corsecont}>
      {courses.map((e) => (
        <Link
          key={e.id}
          style={{ color: "black", textDecoration: "none" }}
          to={"/videos?id=" + e.id}
        >
          <CourseCard data={e.data} img={e.img} name={e.name} />
        </Link>
      ))}
    </div>
  );
};

export default Course;
