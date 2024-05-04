import React, { useRef, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AboutHim } from "./components/AboutHim/AboutHim.jsx";
import { Header } from "./components/Header.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

function App() {
	const appRef = useRef();

	let divOffset = 0;
	let scrollPosition = 0;

	function linearInterpolation(x1, x2, easingValue) {
		return (1 - easingValue) * x1 + easingValue * x2;
	}

	useLayoutEffect(() => {
		const resizeObserver = new ResizeObserver(() => {
			document.body.style.height = getComputedStyle(appRef.current).height;
		});
		resizeObserver.observe(appRef.current);
		window.requestAnimationFrame(render);
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	});

	const handleScroll = () => {
		scrollPosition = window.scrollY;
	};

	const render = () => {
		divOffset =
			Math.floor(linearInterpolation(divOffset, scrollPosition, 0.17) * 100) /
			100;
		// divRef.current.style.transform = `translateY(-${divOffset * 0.5}px)`;
		appRef.current.style.transform = `translateY(-${divOffset}px)`;

		console.log(getComputedStyle(appRef.current).height);

		window.requestAnimationFrame(render);
	};

	return (
		<>
			<Header />
			<main id="main" ref={appRef}>
				<AboutHim />
				<Projects />
				<Contact />
			</main>
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
