import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import VenuesMap from './VenuesMap';
import { Link } from 'react-router-dom';

class Venues extends Component {
	render(){

		const venues = this.props.venues || [];

		return (
			<div className='row' style={{width: 100 + '%'}}>
				<div className='col-md-3 col-md-offset-9' style={{overflowY: 'scroll', height: 100 +'vh'}}>
					<ol>
						{
							venues.map( (venue) => {
								return (
									<li key={venue.id}>
										<div style={{padding:12, marginBottom: 12, backgroundColor: '#f9f9f9'}}>
											<Link style={{wordWrap: "break-word"}} to={venue.id}><h4 style={{marginBottom:0}}>{venue.name}</h4></Link>
											<span>{venue.location.address}</span> <br />
											<p style={{wordWrap: "break-word"}}><a  href={venue.url}>{venue.url}</a></p>
										</div>
									</li>
								)
							})
					}
					</ol>
				</div>
				<div className='col-md-9' style={{overflowY: 'scroll',  height: 100 +'vh'}}>
					<VenuesMap />
				</div>
			</div>
		)
	}
}

const stateToProps = (state) => {
	return {
		venues: state.venue.venues
	}
}

export default connect(stateToProps)(Venues);
