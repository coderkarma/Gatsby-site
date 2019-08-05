import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
	return (
		<Layout>
			<h1>About me</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit.
				Officiis magni doloribus asperiores sapiente et earum tempore
				nostrum possimus quia cumque ullam, iusto velit ipsa ratione
				autem! Repellat odio fugiat repudiandae.
			</p>

			<p>
				<Link to='/contact'>Want to work me with me reach out.</Link>
			</p>
		</Layout>
	);
};

export default AboutPage;
