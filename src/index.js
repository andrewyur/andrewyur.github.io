import React, { useRef, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AboutHim } from "./components/AboutHim/AboutHim.jsx";
import { Header } from "./components/Header.jsx";
import { Projects } from "./components/Projects/Projects.jsx";
import { Contact } from "./components/Contact/Contact.jsx";

function App() {
	const appRef = useRef();

	let mainOffset = 0;

	let layer1;
	let layer1Offset = 0;

	let layer2;
	let layer2Offset = 0;

	let scrollPosition = 0;

	function linearInterpolation(x1, x2, easingValue) {
		return (1 - easingValue) * x1 + easingValue * x2;
	}

	useLayoutEffect(() => {
		layer1 = document.querySelectorAll(".layer1");
		layer2 = document.querySelectorAll(".layer2");
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
		mainOffset = linearInterpolation(mainOffset, scrollPosition, 0.17);
		layer1Offset = linearInterpolation(layer1Offset, scrollPosition, 0.16);
		layer2Offset = linearInterpolation(layer2Offset, scrollPosition, 0.15);

		layer1.forEach((e) => {
			e.style.transform = `translateY(-${
				Math.floor(Math.abs(mainOffset - layer1Offset) * 100) / 100
			}px)`;
		});
		layer2.forEach((e) => {
			// this sucks!!!
			if (e.id == "accent1") {
				e.style.transform = `rotate(7.64deg) translateY(-${
					Math.floor(Math.abs(mainOffset - layer2Offset) * 100) / 100
				}px)`;
			} else {
				e.style.transform = `translateY(-${
					Math.floor(Math.abs(mainOffset - layer2Offset) * 100) / 100
				}px)`;
			}
		});
		appRef.current.style.transform = `translateY(-${
			Math.floor(mainOffset * 100) / 100
		}px)`;

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
