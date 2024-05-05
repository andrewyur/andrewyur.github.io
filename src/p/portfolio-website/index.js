import React from "react";
import ReactDOM from "react-dom/client";
import { PortfolioWebsite } from "./PortfolioWebsite";

function App() {
	return (
		//eventually a header component will go here
		<PortfolioWebsite />
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
