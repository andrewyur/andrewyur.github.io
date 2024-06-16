import React from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import { MainPage } from "./MainPage/MainPage";
import { Error } from "./Error";
import { ProjectsList } from "./projectsPages/ProjectsList";
import { PoetryBot } from "./projectsPages/PoetryBot/PoetryBot";
import { PortfolioWebsite } from "./projectsPages/PortfolioWebsite/PortfolioWebsite";
import { QArtEncoder } from "./projectsPages/QArtEncoder/PortfolioWebsite";

window.onhashchange = () => {
	window.scrollTo(0, 0);
	window.location.reload();
};

const router = createHashRouter([
	{
		path: "/",
		element: <MainPage />,
		errorElement: <Error />,
	},
	{
		path: "/p",
		element: <ProjectsList />,
	},
	{
		path: "/p/poetry-bot",
		element: <PoetryBot />,
	},
	{
		path: "/p/portfolio-website",
		element: <PortfolioWebsite />,
	},
	{
		path: "/p/qart-encoder",
		element: <QArtEncoder />,
	},
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RouterProvider router={router} />);
