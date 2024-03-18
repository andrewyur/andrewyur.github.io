import React from "react";

export function Header() {
	return (
		<div id="header">
			<button
				onClick={() => {
					window.scroll(0, 0);
				}}
			>
				About Him
			</button>
			<button
				onClick={() => {
					window.scroll(0, document.getElementById("projects").offsetTop);
				}}
			>
				Projects
			</button>
			<button
				onClick={() => {
					window.scroll(0, document.getElementById("contact").offsetTop);
				}}
			>
				Contact
			</button>
		</div>
	);
}
