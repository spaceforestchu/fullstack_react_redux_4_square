import React, {Component} from 'react';
import {Link, DirectLink, Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import { connect } from 'react-redux';
import $ from 'jquery';

class VenueView extends Component {

	constructor(props){
		super(props);
	}


  render() {

    return (

			<ol >

				{
					this.props.venues.map( (location, index) => {

						const venue = location.venue;
						const photo = venue.photos
						let venuePhoto;

						if (photo.count === 0) {

							venuePhoto = '/images/No-image-found.jpg';
						} else {
							let venuePhotoPrefix = photo.groups[0].items[0].prefix;
							let venuePhotoSuffix = photo.groups[0].items[0].suffix;

							venuePhoto = venuePhotoPrefix + '128x128' + venuePhotoSuffix;
						}

						const title = venue.name;
						const venueRating = venue.rating;
						const boroughsAndCity = venue.location.formattedAddress[1].slice(0,13);
						const venueIndex = index + 1;
						const venueAddress = venue.location.address;
						const formattedPhone = (venue.contact.formattedPhone ? venue.contact.formattedPhone : '')
						const url = venue.url;
						const id = venue.id;
						return (

								<li containerid={`${venueIndex}`} style={{listStyleType: 'none'}} key={index} id={`venueItem_${id}`}>
									<div style={{padding:1, marginBottom: 12, backgroundColor: '#f9f9f9'}}>
										<div className='container' style={{padding: 0}}>
												<div className='row'>
													<div className='col-sm-4'>
														<img style={{padding: 5}} src={`${venuePhoto}`}/>
													</div>
													<div className='col-sm-8'>
														<span style={{ marginRight: 10, color: '#aeb4b6'}}>{venueIndex}.</span>
														<Link
															to='/'
															onClick={ () => this.props.handleClicks(venue.id)}

															>
															<h5 style={{paddingTop: 2, display: 'inline-block', wordWrap: "break-word"}}>{title}</h5>

															</Link>

														<div>
															<h5 style={{height: 15}}>{venueAddress}</h5>
															<span>{boroughsAndCity}</span>
															<br />
															<a href={`tel:${formattedPhone}`}><span>{formattedPhone}</span></a>
																<div style={{backgroundColor: '#00B551', borderRadius: 10, textAlign: "center", float: 'right', marginRight: 5, padding: 6, marginTop: 10}}>
																	<span style={{color: 'white',  fontSize: 15}}>{venueRating}</span>
																</div>
															<br />
															<a style={{wordWrap: "break-word", fontSize: 11}} href={url}>{url}</a>
														</div>
													</div>
												</div>
										</div>
									</div>
								</li>

						)
					})
			}

			</ol>
		)
  }
}

const stateToProps = (state) => {
	return {
		scrollToId: state.scrollToView.id,

	}
}



export default connect(stateToProps, null )(VenueView);
