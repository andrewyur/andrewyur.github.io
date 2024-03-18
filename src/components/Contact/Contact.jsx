import React from "react";
import "./Contact.css";
import { ContactContent } from "./ContactContent";

export function Contact() {
	return (
		<div id="contact">
			<h1>Contact</h1>
			{ContactContent.paragraph1}
			{ContactContent.paragraph2}
			{ContactContent.paragraph3}
			{ContactContent.image}
		</div>
	);
}
