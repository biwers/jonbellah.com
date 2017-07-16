import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import RightArrow from '../images/RightArrow';

export default class Index extends React.Component {
	render() {
		return (
			<div className="container flex flex-hor-center">
				<div className="hero">
					<span className="hero__label">Hello, my name is</span>
					<h1 className="hero__title">Jon Bellah</h1>
					<p className="hero__bio">I am a full-stack web developer, speaker, and occasional writer living in the beautiful city of Denver, Colorado.</p>
					<Link to="/articles/" className="hero__link">Read my mind <RightArrow /></Link>
				</div>
			</div>
		)
	}
}
