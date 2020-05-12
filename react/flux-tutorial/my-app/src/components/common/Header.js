import React from "react";
import { NavLink } from "react-router-dom";

function Header() {

	const activeLinkStyle = {color : 'red'};


  	return (
		<>
			<nav>
				<NavLink to="/" activeStyle={activeLinkStyle}>Home</NavLink> {" | "} 
				<NavLink to="/courses" activeStyle={activeLinkStyle}>Course</NavLink> {" | "} 
				<NavLink to="/about" activeStyle={activeLinkStyle}>About</NavLink>
			</nav>
		</>
  	);
}

export default Header;