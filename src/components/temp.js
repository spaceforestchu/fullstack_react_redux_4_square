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

								let icon;
								if (venue.categories[0] === undefined) {
									icon = '';
								} else {
									icon = venue.categories[0].icon.prefix + "bg_88" + venue.categories[0].icon.suffix;
								}


								return (
									<li key={venue.id}>
										<div style={{padding:12, marginBottom: 12, backgroundColor: '#f9f9f9'}}>
											<img src={`${icon}`}/>
											<Link style={{wordWrap: "break-word"}} to={venue.id} onClick={() => this.props.fetchVenue(venue.id)}><h4 style={{marginBottom:0}}>{venue.name}</h4></Link>
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

const dispatchToProps = (dispatch) => {
	return {
		venuesReceived: (venues) => dispatch(actions.venuesReceived(venues)),
		fetchVenue: (id) => dispatch(actions.fetchVenue(id))
	}
}

export default connect(stateToProps, dispatchToProps)(Venues);

======
let icon;
if (venue.categories[0] === undefined) {
	icon = '';
} else {
	icon = venue.categories[0].icon.prefix + "bg_88" + venue.categories[0].icon.suffix;
}


return (
	<li key={venue.id}>
		<div style={{padding:12, marginBottom: 12, backgroundColor: '#f9f9f9'}}>
			<img src={`${icon}`}/>
			<Link style={{wordWrap: "break-word"}} to={venue.id} onClick={() => this.props.fetchVenue(venue.id)}><h4 style={{marginBottom:0}}>{venue.name}</h4></Link>
			<span>{venue.location.address}</span> <br />
			<p style={{wordWrap: "break-word"}}><a  href={venue.url}>{venue.url}</a></p>
		</div>
	</li>
)

=====
<div className='container'>
	<div className='row'>
		<div className='col-sm-3'>
			<div style={{backgroundColor: '#00B551', borderRadius: 35, textAlign: "center"}}>
				<span style={{color: 'white',  fontSize: 13}}>{venueRating}</span>
			</div>
		</div>
		<div className='col-xs-9'>
			<div>
				<span style={{display: 'inline-block',  fontSize: 11}}>{boroughsAndCity}</span>
			</div>
			<div>
					{venueAddress}
			</div>
		</div>
	</div>
</div>

=====
import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { Main } from './components/layout'
import { Venue, VenueModal } from './components/views'
import store from './stores';
import { Provider } from 'react-redux';
require('./index.css');

import { BrowserRouter, Route, Switch } from 'react-router-dom';


class App extends Component {

	render(){
		return(
			<Provider store={store.initialize()}>
				<BrowserRouter>
					<div>
						<Switch>
							<Route path='/:id' component={VenueModal} exact/>
							<Route path='/'  component={Main}/>
						</Switch>
					</div>
				</BrowserRouter>
			</Provider>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
