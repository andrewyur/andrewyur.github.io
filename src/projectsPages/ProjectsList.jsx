import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsList.css";

export function ProjectsList() {
	return (
		<main id="projects-list">
			<nav>
				<div className="navLinkWrapper">
					<a href="/">Main Page</a>
				</div>
				<div className="navLinkWrapper">
					<a href="/p">Other Projects</a>
				</div>
			</nav>
			<h1>Projects</h1>
			<hr />
			<div id="projectsContainer">
				<Link to="/p/portfolio-website" className="projectsLink">
					<p>May 2024</p>
					<h2>Portfolio Website</h2>
				</Link>
				<Link to="/p/poetry-bot" className="projectsLink">
					<p>April 2024</p>
					<h2>Poetry Bot</h2>
				</Link>
			</div>
		</main>
	);
}
