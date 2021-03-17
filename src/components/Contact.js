import React from "react";
import icon from "../imgs/dust.png";

function Contact() {
	return (
		<div className="container-fluid" id="contact">
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#000"
					fillOpacity="1"
					d="M0,32L720,64L1440,192L1440,0L720,0L0,0Z"
				></path>
			</svg>
			<div id="ft">
				<h1>Contact</h1>
				<p>
					If you have any questions or want to know more, contact me at my
					<a type="email" href="mailto:ggnino18@gmail.com">
						email
					</a>
					.<img className="img-fluid" alt="magic" src={icon} />
					<br />
					Portfolio built using React &copy; 2021 By GG.
				</p>
			</div>
		</div>
	);
}

export default Contact;
