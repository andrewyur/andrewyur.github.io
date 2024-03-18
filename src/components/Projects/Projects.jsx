import React from "react";
import "./Projects.css";
import { ProjectsContent } from "./ProjectsContent";

function BigProject(props) {
	return (
		<div className="bp">
			<a href=".">{props.title}</a>
			<p>{", " + props.desc}</p>
			<div className="backer" />
		</div>
	);
}

function SmallProject(props) {
	return (
		<div>
			<a href=".">{props.title}</a>
			<p>{", " + props.desc}</p>
			<div className="backer" />
		</div>
	);
}

export function Projects() {
	return (
		<div id="projects">
			<h1>Projects</h1>
			{ProjectsContent.paragraph1}
			<BigProject {...ProjectsContent.bigproject1} />
			{ProjectsContent.paragraph2}
			<div id="sp">
				<SmallProject {...ProjectsContent.smallproject1} />
				<SmallProject {...ProjectsContent.smallproject2} />
				<SmallProject {...ProjectsContent.smallproject3} />
			</div>
			<div className="accent" />
		</div>
	);
}
