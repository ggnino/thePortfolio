import React from "react";
import img1 from "../imgs/mw.png";
import img2 from "../imgs/down-arrow.png";

function Home() {
	return (
		<div className="container-fluid" id="home">
			<div className="row">
				<div className="col-md-6">
					<p>
						Hi, I am <span>Guillermo Gonzalez</span>,<br /> a developer who
						feels like a wizard 😎...
					</p>
				</div>
				<div className="col-md-6">
					<img className="img-fluid" src={img1} alt="wizard" id="wiz" />
				</div>
			</div>
			<img
				className="ld ld-wander-v img-fluid"
				src={img2}
				alt="arrow"
				id="arrow"
			/>
			<svg id="x" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#000"
					fillOpacity="1"
					d="M0,192L720,320L1440,192L1440,0L720,0L0,0Z"
				></path>
			</svg>
		</div>
	);
}

export default Home;
