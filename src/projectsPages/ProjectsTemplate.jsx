import React from "react";
import "./ProjectsTemplate.css";

export function ProjectsTemplate(props) {
	return (
		<main id="project-template">
			<nav>
				<div className="navLinkWrapper">
					<a href="/">Main Page</a>
				</div>
				<div className="navLinkWrapper">
					<a href="/p">Other Projects</a>
				</div>
			</nav>
			<div id="infoDiv">
				<p>{props.date}</p>
				<h1>{props.title}</h1>
			</div>
			<hr />
			{props.children}
		</main>
	);
}

/*
<ProjectsTemplate title="Project Template" date="January 2024"
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
   </p> */
