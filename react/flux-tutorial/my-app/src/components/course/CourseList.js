import React from "react";
import { PropTypes } from "prop-types";

function CourseList (props) {
    return (
      <>
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
              {props.courses.map((courses) => {
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

CourseList.prototype = {
  courses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    authorId: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired
  })).isRequired
}

export default CourseList;