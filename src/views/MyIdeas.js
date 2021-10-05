import React from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../components/Navbar';

const MyIdeas = () => {
	return(
		<>
			<Navbar />
			<div className="container">
				My Ideas
			</div>
		</>
	)
};

export default MyIdeas;