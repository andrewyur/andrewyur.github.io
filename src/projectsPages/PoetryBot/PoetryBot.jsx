import React from "react";
import { ProjectsTemplate } from "../ProjectsTemplate";

export function PoetryBot() {
	return (
		<ProjectsTemplate title="Poetry Bot" date="April 2024">
			<img src="/poetry bot.gif" style={{ width: "600px" }} />
			<p className="caption">a gif of the poetry bot in action</p>
			<p>
				This was a quick project I threw together in a couple days during spring
				break. I had the idea on the bus ride home, and a day later I had a
				working prototype. The basic was idea was for the user&apos;s request
				for a poem on a given topic to be recieved by the Discord bot, and
				forwarded to openAI&apos;s ChatGPT API. The API would send back a short
				poem, which would be sent by the bot back to the Discord server. I enjoy
				making things that are actually useful to me, and I was able to use this
				project in a Discord server to write annoying poems on demand, so this
				was a pretty enjoyable project.
			</p>
			<h2>Technical Details</h2>
			<p>
				To make the Discord bot, I used the Discord.js framework, which was a
				lot easier than doing it from scratch, which was what Discord&apos;s
				developer documentation suggested. The Discord.js tutorial project was
				in commonjs however, and converting it into ES6 was probably the most
				time consuming part of the project. But when I finished, it was as easy
				as installing the OpenAI npm package and using async/await to call and
				use its response.
			</p>
			<p>
				At this point I had a working product, but I still needed to deploy it.
				Even though I had spent $10 on tokens for the ChatGPT API, I was weary
				of using AWS, because I wasn&apos;t entirely sure how much it would cost
				me, and I had just found out that my fraternity&apos;s website had cost
				a total of $1000 a year because it had been deployed improperly on
				google cloud(there were something like 50 instances running at the same
				time).
			</p>
			<p>
				Thankfully, a friend of mine had offered to throw it on one of his
				servers, so I deceided to dockerize it to make it easy for him to run.
				This was a very simple but interesting process, as I did not have much
				experience with docker prior to this. To deal with the .env file, which
				I ommited from the repo, I sent it to him separately, and used docker
				compose to mount it as a volume.
			</p>
			<p>
				I could have easily stopped here, but I was a little worried the bot
				would crash while running on my friend&apos;s server, and I would have
				no way to restart it. So, I downloaded an error logging package, and
				wrapped every possible point of failure in a try catch statement, then
				called it a day.
			</p>
			<p style={{ textAlign: "center", width: "100%" }}>
				The repo can be found at{" "}
				<a
					href="https://github.com/andrewyur/poetry-bot"
					target="_blank"
					rel="noreferrer"
				>
					https://github.com/andrewyur/poetry-bot
				</a>
				.
			</p>
		</ProjectsTemplate>
	);
}
