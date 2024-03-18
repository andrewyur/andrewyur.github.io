import React from "react";
import "./AboutHim.css";
import { AboutHimContent } from "./AboutHimContent";

export function AboutHim() {
	return (
		<div id="abouthim">
			<h1>About Him</h1>
			{AboutHimContent.paragraph1}

			<div id="image1" className="backer">
				{AboutHimContent.image1}
			</div>
			{AboutHimContent.paragraph2}
			<div id="image2" className="backer">
				{AboutHimContent.image2}
			</div>
			{AboutHimContent.paragraph3}
			<div id="image3" className="backer">
				{AboutHimContent.image3.image}
				{AboutHimContent.image3.desc}
			</div>
			<div className="accent" />
		</div>
	);
}
