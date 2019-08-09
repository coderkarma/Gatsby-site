import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/layout';

const AboutPage = () => {
	return (
		<Layout>
			<h1>About me</h1>
			<p>
				I am a self-taught developer. My passion for programming began
				when I was taking cybersecurity classes. My hunger for learning
				hasn't stopped since then. I love solving problems and bringing
				creativity, innovation, and a unique perspective to a team.
			</p>

			<p>
				<Link to='/contact'>Want to work me with me reach out.</Link>
			</p>
		</Layout>
	);
};

export default AboutPage;
