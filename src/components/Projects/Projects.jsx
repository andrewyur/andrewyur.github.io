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

export function Projects() {
	return (
		<>
			<div id="projectsBg">
				<div id="projects" className="layer1">
					<h1>Projects</h1>
					{ProjectsContent.paragraph1}
					<div id="bp">
						<BigProject {...ProjectsContent.bigproject1} />
						<p>&</p>
						<BigProject {...ProjectsContent.bigproject2} />
					</div>
				</div>
			</div>
			<div id="accent2" className="layer2" />
		</>
	);
}
