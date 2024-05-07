import React from "react";
import "./ProjectsTemplate.css";

export function ProjectsTemplate(props) {
	return (
		<main id="project-template">
			<nav>
				<div className="navLinkWrapper">
					<a href="/">Main Page</a>
				</div>
				<div className="navLinkWrapper">
					<a href="/p">Other Projects</a>
				</div>
			</nav>
			<div id="infoDiv">
				<p>Andrew Yurovchak</p>
				<h1>{props.title}</h1>
			</div>
			<hr />
			{props.children}
		</main>
	);
}
