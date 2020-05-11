import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursePage from "./CoursePage";

function App() {


	function getPage() {
		const route = window.location.pathname;
		if(route === '/about') return  <AboutPage />;
		if(route === '/course') return <CoursePage />
		else return <HomePage />
	}

	return (
		<div className="container-fluid">
			<Header />
			{ getPage() }
		</div>
	);
}

export default App;