import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import Navbar from '../components/Navbar';
import IdeaCard from '../components/IdeaCard';
import '../styles/home.css';
import { Modal, Form } from 'react-bootstrap';
import { createIdea, getAllIdeas } from '../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {
	const history = useHistory();
	const dispatch = useDispatch();
	const [show, setShow] = useState(false);
	const { ideas } = useSelector( ({ ideas }) => ideas );
	useEffect(() => {
		getAllIdeas(dispatch);
	},[])
	const [ideaData, setIdeaData] = useState({ 
		name: '',
		crypto: 'crypto1',
		risk: 'High',
		target: '',
		stoploss: '',
		user:localStorage.getItem("user")
	});

	const handleLogout = () => {
	    localStorage.clear();
	    history.push('/login');
	};

	const handleSubmitData = async(e) => {
		e.preventDefault();
		await createIdea(ideaData,dispatch);
		setIdeaData({
			name: '',
			crypto: '',
			risk: '',
			target: '',
			stoploss: '',
			user: ''
		})
		handleClose()
	}

	const handleClose = () => {
		setShow(false);
	}
  	const handleShow = () => {
  		setShow(true);
  	}

	return(
		<>
			<div>
				<Navbar />
				<div className="container">
					<div className="row">
						<div className="col-md-3 section1  mt-96">
							<h5 className="side-home-title mt-4 ml-4">Home</h5>
							<ul className="style-type">
								<li>
									<a className="side-link">Ideas</a>
								</li>
							</ul>
						</div>
						<div className="col-md-5 mt-60">
							<div className="row">
								<div className="col">
									<h4>Top Ideas</h4>
								</div>
								<div className="col d-flex justify-content-end">
									<button className="btn btn-primary" onClick={handleShow}>Create Idea</button>
								</div>
							</div>
							{ ideas.length > 0 ? (
								<div>
									{ideas.map((e,i) => (
										<IdeaCard data={e} key={i} />
									))}
								</div>
							) : (
								<h3 className="text-center mt-5">No Ideas Available</h3>
							)}
						</div>
						<div className="col-md-3 section3 mt-96">
							<h5 className="side-home-title mt-4 ml-4">Trending</h5>
							<ul className="style-type">
								<li>#bitcoin</li>
								<li>#cryptocurrency</li>
								<li>#crypto</li>
								<li>#btc</li>
							</ul>
						</div>
					</div>
				</div>
				<Modal show={show} onHide={handleClose}>
			        <Modal.Header closeButton>
			          <Modal.Title>Create Trade Idea</Modal.Title>
			        </Modal.Header>
		        	<Form className="p-3" onSubmit={handleSubmitData}>
		           		<div className="form-group">
				    		<label htmlFor="input1" className="mb-2">Name your Idea</label>
				    		<input type="text" className="form-control" id="input1" placeholder="Name your idea" 
				    			value={ideaData.name}
				    			required
				    			onChange={ (e) => setIdeaData({...ideaData, name: e.target.value})}
				    		/>
				  		</div>
				  		<div className="form-group">
				  			<label htmlFor="input1" className="mb-2">Select crypto</label>
				  			<select className="form-control" value={ideaData.crypto} onChange={(e) => setIdeaData({...ideaData, crypto: e.target.value})}>
					            <option value="crypto1">crypto1</option>
					            <option value="crypto2">crypto2</option>
					        </select>
				  		</div>
				  		<div className="form-group">
				  			<label htmlFor="input1" className="mb-2">Select Risk</label>
				  			<select className="form-control" value={ideaData.risk} onChange={(e) => setIdeaData({...ideaData, risk: e.target.value})}>
					            <option value="High">High</option>
					            <option value="Medium">Medium</option>
					            <option value="Low">Low</option>
					        </select>
				  		</div>
				  		<div className="form-group mt-3">
				    		<label htmlFor="input2" className="mb-2">Target</label>
				    		<input type="text" className="form-control" id="input2" placeholder="Target" 
				    			value={ideaData.target} 
				    			required
				    			onChange={ (e) => setIdeaData({...ideaData, target: e.target.value})}
				    		/>
				  		</div>
				  		<div className="form-group mt-3">
				    		<label htmlFor="input3" className="mb-2">Stoploss</label>
				    		<input type="number" className="form-control" id="input3" placeholder="Stoploss" 
				    			value={ideaData.stoploss} 
				    			required
				    			onChange={ (e) => setIdeaData({...ideaData, stoploss: e.target.value})}
				    		/>
				  		</div>
				  		<div className="row">
				  			<div className="col">
				  				
				  			</div>
				  			<div className="col">
				  				<button type="submit" className="btn btn-primary mt-4 w-100">
				             		Submit
				           		</button>
				  			</div>
				  		</div>
		         	</Form>	
			    </Modal>
			</div>
		</>
	)
}

export default Home