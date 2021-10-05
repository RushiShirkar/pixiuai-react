import React from 'react';
import bell_fill from '../assets/images/bell-fill.svg'
import '../styles/home.css';

const IdeaCard = (idea) => {
	console.log(idea.data)
	return(
		<>
			<div className="card mt-2">
				<div className="card-body">
					<div className="row">
						<div className="col">
							<h5>Kumar Harsh Vardhan</h5>
						</div>
						<div className="col d-flex justify-content-end">
							<img src={bell_fill} alt="" className="bell" />
						</div>
					</div><hr/>
					<div className="row">
						<div className="col">
							<h6>{idea.data.name}</h6>
						</div>
						<div className="col d-flex justify-content-end">
							<button className="btn btn-primary">Join this Idea</button>
						</div>
					</div>
					<a href="#" class="badge mb-4">{idea.data.risk}</a>
					<div className="row">
						<div className="col">
							<p>Enter below</p>
						</div>
						<div className="col d-flex justify-content-end">
							<p className="text-primary">${idea.data.target}</p>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<p>Book Profit Near</p>
						</div>
						<div className="col d-flex justify-content-end">
							<p className="text-primary">$10000-$12000</p>
						</div>
					</div>
					<div className="row">
						<div className="col">
							<p>Stoploss at</p>
						</div>
						<div className="col d-flex justify-content-end">
							<p className="text-primary">${idea.data.stoploss}</p>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default IdeaCard;