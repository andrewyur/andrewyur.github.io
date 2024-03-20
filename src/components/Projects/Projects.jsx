import React from "react";
import "./Projects.css";
import { ProjectsContent } from "./ProjectsContent";

function BigProject(props) {
	return (
		<div className="bp">
			<div className="text">
				<a href=".">{props.title}</a>
				<p>{props.desc}</p>
			</div>
			<div className="backer" />
		</div>
	);
}

function SmallProject(props) {
	return (
		<div className="sp">
			<div className="text">
				<a href=".">{props.title}</a>
				<p>{props.desc}</p>
			</div>
			<div className="backer" />
		</div>
	);
}

export function Projects() {
	return (
		<>
			<div id="projectsBg">
				<div id="projects">
					<h1>Projects</h1>
					{ProjectsContent.paragraph1}
					<div id="bp">
						<BigProject {...ProjectsContent.bigproject1} />
						<p>and also this one:</p>
						<BigProject {...ProjectsContent.bigproject2} />
					</div>
					{ProjectsContent.paragraph2}
					<div id="sp">
						<SmallProject {...ProjectsContent.smallproject1} />
						<SmallProject {...ProjectsContent.smallproject2} />
						<SmallProject {...ProjectsContent.smallproject3} />
					</div>
				</div>
			</div>
			<div id="accent2" />
		</>
	);
}
