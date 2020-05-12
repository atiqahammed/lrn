import React, { useState, useEffect } from "react";
import { getCourses } from "../../api/courseApi";
import CourseList from "./CourseList";

function CoursePage () {

  const [courses, setCourse] = useState([]);

  useEffect( () => {
    getCourses().then((_courses) => {
      setCourse(_courses);
    });
  }, []);
  
    return (
      <>
        <div className="jumbotron">
          <h1>Courses</h1>
          <p>This page contains the list of course to have CRUD Operation.</p>
        </div>
        <CourseList courses={courses}/>
      </>
    );
  
}

export default CoursePage;