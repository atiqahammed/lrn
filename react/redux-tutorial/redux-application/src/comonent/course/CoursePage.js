import React/*, { useState, useEffect }*/ from "react";
// import { getCourses } from "../../api/courseApi";
// import CourseList from "./CourseList";
// import { Link } from "react-router-dom";
// import ManageCoursePage from "./ManageCoursePage";

class CoursePage extends React.Component {

    state = {
      course: {
        title: "" 
      }
    }

  // const [courses, setCourse] = useState([]);

  // useEffect( () => {
  //   getCourses().then((_courses) => {
  //     setCourse(_courses);
  //   });
  // }, []);
  


  handleChange = (event) => {
    event.preventDefault();
    const course = { ...this.state.course, title: event.target.value };
    this.setState({course: course});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state)
  }
    render() {
      return (
        <>
          <div className="jumbotron" >
            <h1>Courses</h1>
            <p>This page contains the list of course to have CRUD Operation.</p>
            {/* <Link to="/course" className="btn btn-dark" component={ManageCoursePage}>Add New Course</Link> */}
          </div>

          <div className="container" >
            <form className="from" onSubmit={this.handleSubmit}>
              <input 
                type="text"
                onChange={this.handleChange}
                value={this.state.course.title}  
              />
              <hr />
              <input type="submit" value="saev" className="btn btn-dark" />
            </form>
          </div>

          {/* <CourseList courses={courses}/> */}
        </>
      );
    }
    
  
}

export default CoursePage;