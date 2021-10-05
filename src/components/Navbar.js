import React from 'react';
import { useHistory } from "react-router-dom";

const Navbar = () => {
	const history = useHistory();

	const navigation = (url) => {
		history.push(url)
	}

	const logout = () => {
		localStorage.clear();
	    history.push('/login');
	}

	return(
		<>
			<nav className="navbar navbar-expand-lg navbar-white bg-white">
			  	<a className="navbar-brand" href="#">PixiuAI</a>
			  	<div className="collapse navbar-collapse" id="navbarNav">
			    	<ul className="navbar-nav ml-auto">
			    		<li className="nav-item">
			        		<a className="nav-link active pr-4" onClick={() => navigation('/') }>Home</a>
			      		</li>
			      		<li className="nav-item">
			        		<a className="nav-link" onClick={() => navigation('/myideas') }>My Ideas</a>
			      		</li>
			      		<li className="nav-item">
			        		<a className="nav-link" onClick={logout}>Logout</a>
			      		</li>
			    	</ul>
			  	</div>
			</nav>
		</>
	)
}

export default Navbar;
