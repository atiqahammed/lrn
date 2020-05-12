import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursePage from "./course/CoursePage";
import { Route, Switch } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import ManageCoursePage from "./course/ManageCoursePage";

function App() {
	return (
		<div className="container-fluid">
			<Header />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/about" component={AboutPage} />
				<Route path="/courses" component={CoursePage} />
				<Route path="/course/:slug"component={ManageCoursePage} />
				<Route path="/course"component={ManageCoursePage} />
				<Route component={PageNotFound}/>
			</Switch>
		</div>
	);
}

export default App;