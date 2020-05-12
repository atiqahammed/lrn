import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";

function CoursePage () {

  const [cources, setCourse] = useState([]);

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
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author Id</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {cources.map((courses) => {
                return (
                  <tr key={courses.id}>
                    <td>{courses.title}</td>
                    <td>{courses.authorId}</td>
                    <td>{courses.category}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
    
  
  
}

export default CoursePage;