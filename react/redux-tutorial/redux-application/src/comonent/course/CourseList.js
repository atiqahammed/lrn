import React from "react";
// import { PropTypes } from "prop-types";
import { Link } from "react-router-dom";

function CourseList ({ courses, authors }) {
    return (
      <>
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Author ID</th>
                <th>Category</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((courses) => {
                return (
                  <tr key={courses.id}>
                    <td><Link to={"/course/" + courses.slug}>{courses.title}</Link></td>
                    <td>{courses.authorId}</td>
                    <td>{courses.category}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="container">
        <table className="table">
            <thead>
              <tr>
                <th>Author ID</th>
                <th>Author Name</th>
              </tr>
            </thead>
            <tbody>
              {authors.map((author) => {
                return (
                  <tr key={author.id}>
                    <td>{author.id}</td>
                    <td>{author.name}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </>
    );
}

// CourseList.prototype = {
//   courses: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     authorId: PropTypes.number.isRequired,
//     category: PropTypes.string.isRequired
//   })).isRequired
// }

export default CourseList;