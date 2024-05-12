import React from "react";

/*eslint react/jsx-key: 0*/
let images = [
	<img src="/IMG_5438.JPG" alt="some lights and a window" />,
	<img src="/skyline.jpg" alt="the new york city skyline" />,
];

export const AboutHimContent = {
	paragraph1: (
		<p>
			Andrew Yurovchak is currently a sophomore at Stevens Institute for
			technology, studying Computer Science. He is a developer for the{" "}
			<a
				href="https://www.stevens.edu/school-business/student-managed-investment-fund"
				target="_blank"
				rel="noreferrer"
			>
				Stevens Student Managed Investment Fund
			</a>
			, where he works with a small team to create web tools for the equity
			analysts. He is a member of the{" "}
			<a
				href="https://stevensducks.com/sports/mens-fencing"
				target="_blank"
				rel="noreferrer"
			>
				Stevens Div. III Fencing Team
			</a>
			, for which he trains for ~10hrs a week, and travels often. He is the
			secretary for{" "}
			<a href="https://lodge804.com/Home.html" target="_blank" rel="noreferrer">
				Chi Psi Fraternity at Stevens
			</a>
			.
		</p>
	),
	image1: { image: <img src="/IMG_0485.JPG" alt="andrew yurovchak"></img> },
	paragraph2: (
		<p>
			He enjoys going for walks, taking in the beautiful atmosphere of Hoboken,
			NJ, where he resides during the school year, and Nashua, NH, where he
			lives in the summer.
		</p>
	),
	image2: {
		image: images[Math.floor(Math.random() * images.length)],
	},
	paragraph3: (
		<p>
			He listens to a lot of music, and likes to take pictures and doodle on MS
			Paint. He also folds origami and plays pool when he has time.
		</p>
	),
	image3: { image: <img src="/pfp2hd.png" alt="doodle of a monkey"></img> },
};
