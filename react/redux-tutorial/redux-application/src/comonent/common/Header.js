import React from "react";
import { NavLink } from "react-router-dom";

function Header() {

	const activeLinkStyle = {color : 'red'};


  	return (
		<>
			<nav>
				<NavLink to="/" activeStyle={activeLinkStyle} exact>Home</NavLink> {" | "} 
				<NavLink to="/courses" activeStyle={activeLinkStyle} exact>Course</NavLink> {" | "} 
				<NavLink to="/about" activeStyle={activeLinkStyle} exact>About</NavLink>
			</nav>
		</>
  	);
}

export default Header;