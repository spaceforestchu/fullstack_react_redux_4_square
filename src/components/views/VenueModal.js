import React, {Component} from 'react';
import Modal from 'react-modal';
import VenuesMap from './VenuesMap';
import { connect } from 'react-redux';

Modal.setAppElement('#app');

const customStyles = {
  content: {
		margin: 'auto',
		width: '85%',
		marginTop: '50px',
		overflow: 'none',
		padding: '0px',
		border: 'none'
  }
};

class VenueModal extends Component {

	constructor(props){
		super(props);


	}

  render() {
    return (
			<Modal
				isOpen={this.props.isOpen}
				style={customStyles}
				contentLabel="Modal"
				shouldCloseOnOverlayClick={true}
				onRequestClose={() => this.props.closeModal()}
				>
				<div className='row'>
					<div className='col-md-12' style={{padding: 'auto', margin: 'auto'}}>
						<span onClick={() => this.props.closeModal()} className="oi oi-x" style={{marginTop: 5}}></span>
						<VenuesMap containerElement='80vh' mapElement='100%'/>
					</div>
				</div>
    </Modal>)
  }
}

const stateToProps = (state) => {
	return {
		venue: state.venue.venue
	}
}

export default connect(stateToProps)(VenueModal);
