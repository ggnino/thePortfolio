import React, { useEffect, useState } from "react";
import img1 from "../imgs/spellbook.png";
import img2 from "../imgs/fitapp.PNG";
import img3 from "../imgs/roseshop.PNG";
import img4 from "../imgs/fixerup.PNG";
import img5 from "../imgs/uglyblog.PNG";
import img6 from "../imgs/calculator.PNG";

function Portfolio() {
	const [slide, setSlide] = useState({
		img: img2,
		link: "https://github.com/ggnino/fitApp",
		link2: "https://gg-exercise-app.herokuapp.com/",
	});
	const [desc, setDesc] = useState({
		description:
			"A exercise app built for tracking daily activites. You can register with a new user or login with user: Admin pw: 123456. Built this app with the MERN stack, passportjs and loading.io library.",
	});
	useEffect(() => {
		if (slide.img === img2) {
			setTimeout(() => {
				setSlide({
					img: img3,
					link: "https://github.com/ggnino/clientDesign",
					link2: "https://gg-client-design.herokuapp.com/",
				});
				setDesc({
					description:
						"A mock design for a client with a rose shop. The design goal was to be simple and straight forward for the user. Built this simple app with react and some css.",
				});
			}, 5000);
		} else if (slide.img === img3) {
			setTimeout(() => {
				setSlide({
					img: img4,
					link: "https://github.com/ggnino/fixerUpper",
					link2: "https://fixer-upper.herokuapp.com",
				});
				setDesc({
					description:
						"A mock app for a start up IT service. Where the user can send their issue to be fixed and where the technician can login and view said issue. Built this app using Bootstrap 4/CSS and the MERN stack.",
				});
			}, 4000);
		} else if (slide.img === img4) {
			setTimeout(
				() => {
					setSlide({
						img: img5,
						link: "https://github.com/ggnino/uglyBlog",
						link2: "https://gg-blog-redesign.herokuapp.com",
					});
					setDesc({
						description:
							"A mock design for a client that needed a redesign for their blog. Built this app using Bootstrap 4/CSS and Reactjs",
					});
				},

				4000
			);
		} else if (slide.img === img5) {
			setTimeout(() => {
				setSlide({
					img: img6,
					link: "https://github.com/ggnino/binCalculator",
					link2: "https://gg-calculator.herokuapp.com",
				});
				setDesc({
					description:
						"A calculator app for normal operations. Plus, it has a binary mode for binary numbers. Built this with Reactjs and CSS",
				});
			}, 4000);
		} else if (slide.img === img6) {
			setTimeout(() => {
				setSlide({
					img: img2,
					link: "https://github.com/ggnino/fitApp",
					link2: "https://gg-exercise-app.herokuapp.com/",
				});
				setDesc({
					description:
						"A exercise app built for tracking daily activites. You can register with a new user or login with user: Admin pw: 123456. Built this app with the MERN stack, passportjs and loading.io library.",
				});
			}, 4000);
		}
	}, [slide]);

	return (
		<div className="container-fluid" id="portfolio">
			<svg
				id="s"
				className="img-fluid"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#dc143c"
					fillOpacity="1"
					d="M0,224L720,0L1440,288L1440,0L720,0L0,0Z"
				></path>
			</svg>

			<img
				className=" ld ld-tremble"
				src={img1}
				alt="spell-book"
				id="spellbook"
			/>

			<h1>Portfolio</h1>
			<div className="row">
				<div className="col-md-8">
					<img
						className="img-fluid"
						alt="project-img"
						src={slide.img}
						id="projectImg"
					/>
				</div>
				<div className="col-md-4">
					<p>{desc.description}</p>
					<div id="port1">
						<a
							href={slide.link}
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
						>
							Source Code
						</a>
						<a
							href={slide.link2}
							target="_blank"
							rel="noreferrer"
							className="btn btn-primary"
						>
							Live Version
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Portfolio;
