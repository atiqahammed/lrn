import React/*, { useState, useEffect }*/ from "react";
import { connect } from "react-redux";
// import { getCourses } from "../../api/courseApi";
// import CourseList from "./CourseList";
// import { Link } from "react-router-dom";
// import ManageCoursePage from "./ManageCoursePage";
import * as courseActions from "../../redux/actions/courseAction"

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
    // console.log(this.state)
    this.props.createCourse( this.state.course);
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
              <hr/>
              <input type="submit" value="save" className="btn btn-dark" />
            </form>
          </div>

          <div className="container jumbotron">
            {this.props.courses.map((course) => {
              return <div key={course.title}>{course.title}</div>
            })}
          </div>

          {/* <CourseList courses={courses}/> */}
        </>
      );
    }
    
  
}

function mapStateToProps(state) {
  return {
    courses: state.courses
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     createCourse: (course) => dispatch(courseActions.createCourse(course))
//   }
// } 

const mapDispatchToProps = {
  createCourse: courseActions.createCourse
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);