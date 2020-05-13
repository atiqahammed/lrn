import React/*, { useState, useEffect }*/ from "react";
import { connect } from "react-redux";
// import { getCourses } from "../../api/courseApi";
// import CourseList from "./CourseList";
// import { Link } from "react-router-dom";
// import ManageCoursePage from "./ManageCoursePage";
import * as courseActions from "../../redux/actions/courseAction";
import * as authorAction from "../../redux/actions/authorActions";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

class CoursePage extends React.Component {


  componentDidMount() {

    if(this.props.courses.length === 0) {
      this.props.loadCourses();
    }
    if(this.props.authors.length === 0) {
      this.props.loadAuthors();
    }
    
  }
    // state = {
    //   course: {
    //     title: "" 
    //   }
    // }

  // const [courses, setCourse] = useState([]);

  // useEffect( () => {
  //   getCourses().then((_courses) => {
  //     setCourse(_courses);
  //   });
  // }, []);
  


  // handleChange = (event) => {
  //   event.preventDefault();
  //   const course = { ...this.state.course, title: event.target.value };
  //   this.setState({course: course});
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // console.log(this.state)
  //   this.props.createCourse( this.state.course);
  // }
    render() {
      return (
        <>
          <div className="jumbotron" >
            <h1>Courses</h1>
            <p>This page contains the list of course to have CRUD Operation.</p>
            <Link to="/course" className="btn btn-dark">Add New Course</Link>
          </div>

          <div className="container jumbotron">
            <CourseList courses={this.props.courses} authors={this.props.authors} />
          </div>
        </>
      );
    }
    
  
}

function mapStateToProps(state) {
  return {
    courses: state.courses,
    authors: state.authors
  }
}

// function mapDispatchToProps(dispatch) {
//   return {
//     createCourse: (course) => dispatch(courseActions.createCourse(course))
//   }
// } 

const mapDispatchToProps = {
  createCourse: courseActions.createCourse,
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorAction.loadAuthors
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);