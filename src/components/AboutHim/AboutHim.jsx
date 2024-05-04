import React from "react";
import "./AboutHim.css";
import { AboutHimContent } from "./AboutHimContent";

function AboutHimImage(props) {
	return <div className="backer">{props.image}</div>;
}

export function AboutHim() {
	return (
		<>
			<div id="abouthimBg">
				<div id="abouthim">
					<h1>About Him</h1>
					<div className="container">
						<div className="subcontainer">
							{AboutHimContent.paragraph1}
							<AboutHimImage {...AboutHimContent.image2} />
							{AboutHimContent.paragraph2}
						</div>
						<div className="subcontainer">
							<AboutHimImage {...AboutHimContent.image1} />
							{AboutHimContent.paragraph3}
							<AboutHimImage {...AboutHimContent.image3} />
						</div>
					</div>
				</div>
			</div>
			<div id="accent1" />
		</>
	);
}
