import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AboutHim } from "./components/AboutHim/AboutHim.jsx";
import { Header } from "./components/Header.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

function App() {
	return (
		<>
			<Header />
			<AboutHim />
			<Projects />
			<Contact />
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
