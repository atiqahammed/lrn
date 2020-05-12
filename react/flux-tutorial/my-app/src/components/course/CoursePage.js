import React, { useState, useEffect } from "react";
import { getCourses } from "../../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";
import ManageCoursePage from "./ManageCoursePage";

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
          <Link to="/course" className="btn btn-dark" component={ManageCoursePage}>Add New Course</Link>
        </div>
        <CourseList courses={courses}/>
      </>
    );
  
}

export default CoursePage;