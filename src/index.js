import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AboutHim } from "./components/AboutHim/AboutHim.jsx";
import { Header } from "./components/Header.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

function App() {
	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	function handleScroll() {
		if (window.scrollY === 0) {
			document.getElementById("header").style.right = "35vw";
		} else {
			document.getElementById("header").style.right = "3vw";
		}
	}

	return (
		<main>
			<div id="container">
				<AboutHim />
				<Projects />
				<Contact />
			</div>
		</main>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Header />
		<App />
	</React.StrictMode>
);
