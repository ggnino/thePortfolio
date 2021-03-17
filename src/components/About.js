import React from "react";
import img1 from "../imgs/me1.png";

function About() {
	return (
		<div className="container-fluid" id="about">
			<h1>About</h1>
			<img className="img-fluid" src={img1} alt="me" id="me" />
			<p>
				Hi, Im Guillermo Gonzalez, a developer who feels like a wizard behind a
				computer screen. My coding journey started in community college, but I
				ended up teaching myself the all powerful <span>MERN stack</span>. I
				love to code and build different apps, also love learning different
				languages/frameworks/libaries. Anytime I get an opportunity to learn
				something, I think of it as adding a new "spell" in my "spell book".
				Everytime I build an app, I think of it as making magic on a computer. I
				am looking for a place where I can have an impact, learn from great
				people, and where I can blossom into an excellent developer.
			</p>
		</div>
	);
}

export default About;
