import React from "react";
// import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Iframe from "react-iframe";

export const Splash = () => (
	<div className="text-center mt-5">
		<iframe
			src="https://player.vimeo.com/video/373263087"
			width="640"
			height="360"
			frameBorder="0"
			allow="autoplay; fullscreen"
			allowFullscreen
			allowAutoplay
		/>
	</div>
);
