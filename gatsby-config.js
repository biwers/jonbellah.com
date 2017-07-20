module.exports = {
	siteMetadata: {
		title: `JonBellah.com`,
		author: `Jon Bellah`,
		description: `Lead Front-End Engineer at 10up`,
		siteUrl: `https://jonbellah.com`
	},
	plugins: [
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/src/pages`,
				name: "pages",
			},
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590,
						},
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`,
						},
					},
					"gatsby-remark-prismjs",
					"gatsby-remark-copy-linked-files",
					"gatsby-remark-smartypants",
				],
			},
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-10941714-4'
			},
		},
		{
			resolve: `gatsby-plugin-feed`,
			options: {
				query: `
					{
						site {
							siteMetadata {
								title
								description
								siteUrl
							}
						}
					}
				`,
				feeds: [
					{
						query: `
							{
								allMarkdownRemark(
									limit: 1000,
									sort: { order: DESC, fields: [frontmatter___date] }
								) {
									edges {
										node {
											id
											html
											fields { slug }
											frontmatter {
												title
												date
											}
										}
									}
								}
							}
						`,
						output: '/rss.xml'
					}
				]
			}
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-sass`,
	],
}
