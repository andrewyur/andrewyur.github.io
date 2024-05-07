import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainPage } from "./MainPage/MainPage";
import { Error } from "./Error";
import { ProjectsList } from "./projectsPages/ProjectsList";
import { PoetryBot } from "./projectsPages/PoetryBot/PoetryBot";
import { PortfolioWebsite } from "./projectsPages/PortfolioWebsite/PortfolioWebsite";
import { ProjectsTemplate } from "./projectsPages/ProjectsTemplate";

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
	{
		path: "/p/template",
		element: (
			<ProjectsTemplate title="Project Template">
				<p>
					So this was my first project!! isnt that insane?! hdoiawhd ahdoao
					oawio iw ida wao dwha wi whdao daod aida di iaowiodaoi i wdaoidaowdh
					ir o ehfo vose oev jeaojpjapj ah aohcheos voish vos osho r hoshvvh so
					hvsoosh voshvso hovo shvosvh srihvos t oh
				</p>
				<img src="/battler.png" style={{ width: "200px" }}></img>
				<p className="caption">adiaowdnaon</p>
				<p>
					So this was my first project!! isnt that insane?! hdoiawhd ahdoao
					oawio iw ida wao dwha wi whdao daod aida di iaowiodaoi i wdaoidaowdh
					ir o ehfo vose oev jeaojpjapj ah aohcheos voish vos osho r hoshvvh so
					hvsoosh voshvso hovo shvosvh srihvos t oh
				</p>
				<p>
					So this was my first project!! isnt that insane?! hdoiawhd ahdoao
					oawio iw ida wao dwha wi whdao daod aida di iaowiodaoi i wdaoidaowdh
					ir o ehfo vose oev jeaojpjapj ah aohcheos voish vos osho r hoshvvh so
					hvsoosh voshvso hovo shvosvh srihvos t oh
				</p>
				<img
					src="/batter.png"
					style={{ width: "400px", "margin-top": "30px" }}
				></img>
				<p className="caption">adiaowdnaon</p>
				<p>
					So this was my first project!! isnt that insane?! hdoiawhd ahdoao
					oawio iw ida wao dwha wi whdao daod aida di iaowiodaoi i wdaoidaowdh
					ir o ehfo vose oev jeaojpjapj ah aohcheos voish vos osho r hoshvvh so
					hvsoosh voshvso hovo shvosvh srihvos t oh
				</p>
				<h2>And one more thing...</h2>
				<p>
					So this was my first project!! isnt that insane?! hdoiawhd ahdoao
					oawio iw ida wao dwha wi whdao daod aida di iaowiodaoi i wdaoidaowdh
					ir o ehfo vose oev jeaojpjapj ah aohcheos voish vos osho r hoshvvh so
					hvsoosh voshvso hovo shvosvh srihvos t oh
				</p>
				<img
					src="/le batteur.png"
					style={{ width: "500px", "margin-top": "40px" }}
				></img>
				<p className="caption">adiaowdnaon</p>
				<p>
					So this was my first project!! isnt that insane?! hdoiawhd ahdoao
					oawio iw ida wao dwha wi whdao daod aida di iaowiodaoi i wdaoidaowdh
					ir o ehfo vose oev jeaojpjapj ah aohcheos voish vos osho r hoshvvh so
					hvsoosh voshvso hovo shvosvh srihvos t oh
				</p>
			</ProjectsTemplate>
		),
	},
]);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(<RouterProvider router={router} />);
