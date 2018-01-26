import React, {Component} from 'react';
import {Marker, InfoWindow} from "react-google-maps";
import actions from '../../actions';
import {connect} from 'react-redux';

class InfoWindowMap extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    }

  }

  handleToggleOpen = () => {

    this.setState({isOpen: true});
  }

  handleClicks = (id) => {
    //console.log(id);
    this.handleToggleOpen();

    this.props.scrollToList(id);
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
	        }} label={this.props.index.toString()}
					onClick={() => this.handleClicks(this.props.venueID)}
					>

	        {
	          this.state.isOpen &&

						<InfoWindow onCloseClick={() => this.setState({isOpen: false})}>
	              <div>
	                <h4>{this.props.location.venue.name}</h4>
	                <img src={`${venuePhoto}`}/>
	                <span>{number}</span>
	              </div>
	            </InfoWindow>

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
