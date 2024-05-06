import React from "react";
import { useRouteError } from "react-router-dom";

export function Error() {
	const error = useRouteError();
	console.error(error);
	return (
		<div>
			<h1>{error.statusText || error.message}</h1>
		</div>
	);
}
