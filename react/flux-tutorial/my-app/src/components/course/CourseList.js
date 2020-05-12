import React from "react";

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
              {props.cources.map((courses) => {
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

export default CourseList;