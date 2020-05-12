import React, { useState } from "react";
import CourseForm from "./CourseForm";
import * as courseApi from "../../api/courseApi"
import { toast } from "react-toastify";

function ManageCoursePage(props) {

  const [errors, setErrors] = useState({});
  const [course, setCourse] = useState({
    id: null,
    slug: "",
    title: "",
    authorId: null,
    category: null
  });


  function handleChange({target}) {
    setCourse({
      ...course, [target.name]: target.value
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!course.title) _errors.title = "Title is required";
    if (!course.authorId) _errors.authorId = "Author ID is required";
    if (!course.category) _errors.category = "Category is required";

    setErrors(_errors);
    // Form is valid if the errors object has no properties
    return Object.keys(_errors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (!formIsValid()) return;
    courseApi.saveCourse(course).then(() => {
      props.history.push("/courses");
      toast.success("Course saved.");
    });
  }


  return (
    <>
    <div className="jumbotron">
      <h1>{props.match.params.slug ? "Update Course" : "Create New Course"}</h1>
    </div>
    <div className="container">
      <CourseForm course={course} errors={errors} onChange={handleChange} onSubmit={handleSubmit} />
    </div>
    </>
  );
}

export default ManageCoursePage;