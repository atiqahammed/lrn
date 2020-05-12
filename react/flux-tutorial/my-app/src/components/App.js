import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursePage from "./course/CoursePage";
import { Route } from "react-router-dom";

function App() {
	return (
		<div className="container-fluid">
			<Header />
			<Route path="/" exact component={HomePage} />
			<Route path="/about" exact component={AboutPage} />
			<Route path="/course" exact component={CoursePage} />
		</div>
	);
}

export default App;