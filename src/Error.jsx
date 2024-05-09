import React from "react";
import { useRouteError } from "react-router-dom";
import "./Error.css";

export function Error() {
	const error = useRouteError();
	console.error(error);
	return (
		<main id="error">
			<h1 id="status">{error.status}</h1>
			<p id="message">{error.statusText || error.message}</p>
			<div id="links">
				<a href="/">Main Page</a>
				<a href="/#p">Projects</a>
			</div>
		</main>
	);
}
