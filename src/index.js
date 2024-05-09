import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainPage } from "./MainPage/MainPage";
import { Error } from "./Error";
import { ProjectsList } from "./projectsPages/ProjectsList";
import { PoetryBot } from "./projectsPages/PoetryBot/PoetryBot";
import { PortfolioWebsite } from "./projectsPages/PortfolioWebsite/PortfolioWebsite";

const router = createBrowserRouter([
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
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RouterProvider router={router} />);
