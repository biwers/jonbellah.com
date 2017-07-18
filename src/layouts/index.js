import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import { NavLink } from 'react-router-dom';
import Helmet from 'react-helmet';

// Import Styles
import '../css/styles.scss';

// Import Images
import favicon from '../images/favicon.ico';
import Logo from '../images/Logo';
import TwitterIcon from '../images/TwitterIcon';
import GithubIcon from '../images/GithubIcon';
import RssIcon from '../images/RssIcon';

export default class Template extends Component {
	static propTypes = {
		children: PropTypes.func,
	}

	render() {
		return (
			<div>
				<Helmet
					title="JonBellah.com"
					meta={[
						{ name: "description", content: "Jon is a full-stack web developer, speaker, and occasional writer" },
					]}
				>
					<link rel="icon" href={favicon} type="x-icon/image" />
					<meta property="og:locale" content="en_US" />
					<meta property="og:type" content="website" />
					<meta property="og:site_name" content="Jon Bellah" />
				</Helmet>
				<div className="site">
					<header id="header" className="site-header animated fadeInDown">
						<div className="container">
							<Link to="/" className="site-header__link">
								<Logo className="site-header__logo" />
							</Link>

							<nav id="navigation" className="site-nav">
								<button id="js-menu-toggle" className="toggle-icon" aria-controls="primary-menu" aria-expanded="false">
									<span className="line line-1" />
									<span className="line line-2" />
									<span className="line line-3" />
								</button>

								<NavLink to="/articles/" className="site-nav__item">
									Articles
								</NavLink>
								<NavLink to="/speaking/" className="site-nav__item">
									Speaking
								</NavLink>
								<NavLink to="/contact/" className="site-nav__item">
									Contact
								</NavLink>
							</nav>
						</div>
					</header>

					<main className="site-content">
						{this.props.children()}
					</main>

					<footer id="colophon" className="site-footer animated fadeInUp">
						<div className="container flex">
							<div className="site-footer__copyright">
								&copy; 2017 JonBellah.com. Made in Colorado.
							</div>

							<div className="site-footer__social">
								<a href="https://twitter.com/jonbellah">
									<TwitterIcon />
								</a>

								<a href="https://github.com/jonbellah">
									<GithubIcon />
								</a>

								<a href="/rss.xml">
									<RssIcon />
								</a>
							</div>
						</div>
					</footer>
				</div>
			</div>
		)
	}
}
