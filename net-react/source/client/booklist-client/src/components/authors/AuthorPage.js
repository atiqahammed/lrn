import React, { useState, useEffect } from "react";
// import { getCourses } from "../../api/courseApi";
// import CourseList from "./CourseList";
// import { Link } from "react-router-dom";
// import ManageCoursePage from "./ManageCoursePage";

function AuthorPage () {

    const [authors, setAuthors] = useState([]);

    useEffect( () => {
        // getCourses().then((_courses) => {
        //     setAuthors(_courses);
        // });
    }, []);
  
    return (
      <>
        <div className="jumbotron">
          <h1>Authors</h1>
          {/* <Link to="/author" className="btn btn-dark" component={ManageCoursePage}>Add New Course</Link> */}
        </div>
        {/* <CourseList courses={courses}/> */}
      </>
    );
  
}

export default AuthorPage;