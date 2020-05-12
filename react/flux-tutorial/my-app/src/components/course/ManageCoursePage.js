import React from "react";

function ManageCoursePage(props) {

  return (
    <div className="jumbotron">
      <h1>{props.match.params.slug ? "Update Course" : "Create New Course"}</h1>
    </div>
  );
}

export default ManageCoursePage;