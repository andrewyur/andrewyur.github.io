import React from "react";
import { Link } from "react-router-dom";

export function ProjectsList() {
	return (
		<>
			<h1>LIST OF PROJECTS posts for completeness sake...</h1>
			<div>
				<Link to="/p/portfolio-website">Portfolio Website</Link>
				<Link to="/p/poetry-bot">Poetry Bot</Link>
			</div>
		</>
	);
}
