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

====
	<input className="form-control mr-sm-2" type="text" placeholder="Enter zip-code" aria-label="Search" name='zipCode' onChange={this.updateZipCode}/>
=====


// React and Redux Const
const { Component } = React;
const { render } = ReactDOM;
const { Provider, connect } = ReactRedux;
const { applyMiddleware, createStore, combineReducers, bindActionCreators } = Redux;

// Redux Action Types
const GET_LOCATION = 'GET_LOCATION';

const getLocation = () => {
  const geolocation = navigator.geolocation;

  const location = new Promise((resolve, reject) => {
    if (!geolocation) {
      reject(new Error('Not Supported'));
    }

    geolocation.getCurrentPosition((position) => {
      resolve(position);
    }, () => {
      reject (new Error('Permission denied'));
    });
  });

  return {
    type: GET_LOCATION,
    payload: location
  }
};

const Header = (props) => {
  return (
    <header><h1>{props.title}</h1></header>
  );
};

class Location extends Component {
  componentWillMount() {
    this.props.getLocation();
  }

  render () {
    const {coords: {latitude, longitude}} = this.props.location;

    return (
      <div>
        <div>Latitude: <span>{latitude}</span></div>
        <div>Longitude: <span>{longitude}</span></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {location: state.location};
};

Location = connect(mapStateToProps, {getLocation})(Location);

const App = () => {
  return (
    <div>
      <Header title="Your Location" />
      <Location />
    </div>
  );
};

const INIT_STATE = {
  coords: {
    latitude: 0,
    longitude: 0
  }
}

const LocationReducer = (state = INIT_STATE, action) => {
  switch(action.type) {
  case GET_LOCATION:
    return action.payload;
  default:
    return state
  }
}

const rootReducer = combineReducers ({
  location: LocationReducer
});

/* simplified React Promise Middleware */
function promiseMiddleware({dispatch}) {
  function isPromise(val) {
    return val && typeof val.then === 'function';
  }

  return next => action => {
    return isPromise(action.payload)
      ? action.payload.then(
          result => dispatch({...action, payload: result}),
          error => dispatch({...action, payload: error, error: true })
        )
      : next(action);
  };
}

const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore);

render(
  <Provider store={createStoreWithMiddleware(rootReducer)}>
    <App />
  </Provider>
  , document.querySelector('#app')
);

===
params: {
	client_id: 'PHQ4BAMKWAOOL3Z43BWDQL0MHJG4QUCV4OEEZAELEKNTO4K1',
	client_secret: 'T4JTOW5HBIOPC3L3J14TBQNDPOMS25OHPF5WH5M2XLJNXJXM',
	near: this.state.search.zipCode || '',
	query: this.state.search.title || '',
	v: '20180105',
	venuePhotos: "1"
}

===

import React, {Component} from 'react';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from "react-google-maps";
import {connect} from 'react-redux';

class VenuesMap extends Component {

	constructor(props){
		super(props);

		this.state = {
			zoom: 11
		}

	}

	componentWillReceiveProps(){
		this.setState({
			zoom: 15
		});
	}


  render() {

		const venues = this.props.venues;
		const lngCurrentLocation = this.props.geoLocation.lng || null;
		const latCurrentLocation = this.props.geoLocation.lat || null;

		let markers;
		let userMarkers =  <Marker position={{lat:Number(latCurrentLocation), lng: Number(lngCurrentLocation) }} />
		if (venues !== null) {

			markers = venues.map((location, i) => {

				const lat = location.venue.location.lat
				const lng = location.venue.location.lng
				const index = i + 1 ;
				return (
					<Marker
						key={i}
						position={{ lat: lat, lng: lng}}
						label={index.toString()}
					/>
				)
			})
		} else {
			console.log('true');
			markers = <Marker position={{ lat: Number(latCurrentLocation), lng: Number(lngCurrentLocation)}}/>
		}

	const MapWithAMarker = withGoogleMap(props =>
  <GoogleMap
    defaultZoom={this.state.zoom}
    defaultCenter={{ lat:Number(latCurrentLocation) || 40.7128, lng: Number(lngCurrentLocation) || -74.0060}}

  >
		{markers}
		{userMarkers}
  </GoogleMap>
);

		const googleMap = 	<MapWithAMarker
			containerElement={<div style={{ height: this.props.containerElement }} />}
			mapElement={<div style={{ height: this.props.mapElement}} />}
		/>

    return (
			<div>
				{googleMap}
			</div>
		)
  }
}

const stateToProps = (state) => {
  return {
		venues: state.venue.venues,
		geoLocation: state.geoLocation.currentLocation
	}
}

export default connect(stateToProps)(VenuesMap)



<Marker
	key={i}
	position={{ lat: lat, lng: lng}}
	label={index.toString()}
	onClick={() => this.handleToggleOpen()}
>

<InfoWindowMap
		handleCloseCall={this.handleToggleClose}
		handleInfoWindow={this.state.isOpen}
		/>


</Marker>


=====

// ES6 Imports
import * as Scroll from 'react-scroll';
import { Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


// Or Access Link,Element,etc as follows
let Link       = Scroll.Link;
let Element    = Scroll.Element;
let Events     = Scroll.Events;
let scroll     = Scroll.animateScroll;
let scrollSpy  = Scroll.scrollSpy;

// ES5
var React   = require('react');
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;


var Section = React.createClass({
  componentDidMount: function() {

    Events.scrollEvent.register('begin', function(to, element) {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register('end', function(to, element) {
      console.log("end", arguments);
    });

    scrollSpy.update();

  },
  componentWillUnmount: function() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  },
  scrollToTop: function() {
    scroll.scrollToTop();
  },
  scrollToBottom: function() {
    scroll.scrollToBottom();
  },
  scrollTo: function() {
    scroll.scrollTo(100);
  },
  scrollMore: function() {
    scroll.scrollMore(100);
  },
  handleSetActive: function(to) {
    console.log(to);
  },
  render: function () {
  	return (
      <div>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} onSetActive={this.handleSetActive}>
          Test 1
        </Link>
        <Link activeClass="active" to="test1" spy={true} smooth={true} offset={50} duration={500} delay={1000}>
          Test 2 (delay)
        </Link>
        <Link className="test6" to="anchor" spy={true} smooth={true} duration={500}>
          Test 6 (anchor)
        </Link>
        <Button activeClass="active" className="btn" type="submit" value="Test 2" to="test2" spy={true} smooth={true} offset={50} duration={500} >
          Test 2
        </Button>

        <Element name="test1" className="element">
          test 1
        </Element>

        <Element name="test2" className="element">
          test 2
        </Element>

        <div id="anchor" className="element">
          test 6 (anchor)
        </div>


        <Link to="firstInsideContainer" containerId="containerElement">
          Go to first element inside container
        </Link>

        <Link to="secondInsideContainer" containerId="containerElement">
          Go to second element inside container
        </Link>
        <div className="element" id="containerElement">
          <Element name="firstInsideContainer">
            first element inside container
          </Element>

          <Element name="secondInsideContainer">
            second element inside container
          </Element>
        </div>

        <a onClick={this.scrollToTop}>To the top!</a>
        <br/>
        <a onClick={this.scrollToBottom}>To the bottom!</a>
        <br/>
        <a onClick={this.scrollTo}>Scroll to 100px from the top</a>
        <br/>
        <a onClick={this.scrollMore}>Scroll 100px more from the current position!</a>
      </div>
    );
  }
});

React.render(
  <Section />,
  document.getElementById('example')
);


====
<div className='row' style={{width: 100 + '%'}}>
			<div className='col-md-4 col-md-offset-8' style={{overflowY: 'scroll', height: 100 +'vh'}} name='venueList'>
				<VenueView venues={venues} handleClicks={this.handleClicks}/>
			</div>
			<div className='col-md-8' style={{height: 100 +'vh', width: 100 + 'vh'}}>
				<VenuesMap containerElement='100vh' mapElement='100vh' />
			</div>
				{modal}
		</div>

====
<VenuesMap containerElement='80vh' mapElement='100%'/>
