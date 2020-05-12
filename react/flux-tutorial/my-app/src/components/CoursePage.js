import React from "react";
import { getCourses } from "../api/courseApi";

class CoursePage extends React.Component {

  state = {
    courses: []
  }

  componentDidMount() {
    getCourses().then((courses) => {
      this.setState({courses: courses});
    });
  }

  render() {
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
              {this.state.courses.map((courses) => {
                return (
                  <tr>
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
  
}

export default CoursePage;