import React from 'react';
import Layout from '../components/layout';
import { graphql, useStaticQuery } from 'gatsby';

const BlogPage = () => {
	const data = useStaticQuery(graphql`
		query {
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							date
						}
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<h1>Blog</h1>
			<ol>
				{data.allMarkdownRemark.edges.map(ele => {
					return (
						<div>
							<li>
								<h2>{ele.node.frontmatter.title}</h2>
								<p>{ele.node.frontmatter.date}</p>
							</li>
						</div>
					);
				})}
			</ol>
		</Layout>
	);
};
export default BlogPage;
