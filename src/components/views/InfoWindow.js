import React, {Component} from 'react';
import {Marker, InfoWindow} from "react-google-maps";
import actions from '../../actions';
import {
  DirectLink,
  Element,
  Link,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll'
import {connect} from 'react-redux';

class InfoWindowMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

  }


	componentDidMount () {

	 Events.scrollEvent.register('begin', function(to, element) {
		 console.log("begin", arguments, to, element);
	 });

	 Events.scrollEvent.register('end', function(to, element) {
		 console.log("end", arguments, to, element);
	 });

	 scrollSpy.update();

 }

 componentWillUnmount () {
	 Events.scrollEvent.remove('begin');
	 Events.scrollEvent.remove('end');
 }

  handleToggleOpen = () => {

    this.setState({isOpen: true});
  }

  handleClicks = (id) => {
    //console.log(id);
    this.handleToggleOpen();

    this.props.scrollToList(id);
  }

	handleSetActive = (to) => {
		//console.log(to);
	}

  render() {

    const photo = this.props.location.venue.photos;
    const number = this.props.location.venue.contact.phone;
    let venuePhoto;

    if (photo.count === 0) {
      venuePhoto = '/images/No-image-found.jpg';
    } else {
      let venuePhotoPrefix = photo.groups[0].items[0].prefix;
      let venuePhotoSuffix = photo.groups[0].items[0].suffix;

      venuePhoto = venuePhotoPrefix + '50x50' + venuePhotoSuffix;
    }

    return (

	      <Marker key={this.props.index} position={{
	          lat: this.props.lat,
	          lng: this.props.lng
	        }} label={this.props.index.toString()} onClick={() => this.handleClicks(this.props.indexValue)}>

	        {
	          this.state.isOpen &&
						<Link activeclass="active" spy={true} smooth={true} offset={50} duration={500} to='venueElements' containerId={`${this.props.indexValue}`} onSetActive={this.handleSetActive(this.props.indexValue)}>

						<InfoWindow onCloseClick={() => this.setState({isOpen: false})}>
	              <div>
	                <h4>{this.props.location.venue.name}</h4>
	                <img src={`${venuePhoto}`}/>
	                <span>{number}</span>
	              </div>
	            </InfoWindow>
									 </Link>
	        }

	      </Marker>


	)
  }
}

const dispatchToProps = (dispatch) => {
  return {
    scrollToList: (id) => dispatch(actions.scrollToList(id))
  }
}

export default connect(null, dispatchToProps)(InfoWindowMap);
