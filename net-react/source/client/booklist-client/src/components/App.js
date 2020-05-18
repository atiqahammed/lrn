import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
// import CoursePage from "./course/CoursePage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import AuthorPage from "./authors/AuthorPage";
// import ManageCoursePage from "./course/ManageCoursePage";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";


function App() {
	return (
		<div className="container-fluid">
			<Header />
			{/* <ToastContainer autoClose={1500} hideProgressBar/> */}
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/authors" component={AuthorPage} />
				{/* <Route path="/course/:slug"component={ManageCoursePage} />
				<Route path="/course"component={ManageCoursePage} /> */}
				<Route component={PageNotFound}/>
			</Switch>
		</div>
	);
}

export default App;