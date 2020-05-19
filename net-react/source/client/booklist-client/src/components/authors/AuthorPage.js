import React, { useState, useEffect } from "react";
import { getAuthors } from "../../api/authorApi";
import AuthorList from "./AuthorList";
import { Link } from "react-router-dom";

function AuthorPage () {

    const [authors, setAuthors] = useState([]);

    useEffect( () => {
        getAuthors().then((_authors) => {
            setAuthors(_authors);
        });
    }, []);
  
    return (
      <>
        <div className="jumbotron">
            <h1>Authors</h1>
          <Link to="/author" className="btn btn-dark">Add New Author</Link>
        </div>
        <AuthorList authors={authors}/>
      </>
    );
  
}

export default AuthorPage;