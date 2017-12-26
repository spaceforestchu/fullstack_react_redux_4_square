import React, {Component} from 'react';
import ErrorForms from './ErrorForms';

class NavLogInAndSignUp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			input: {
				email: "",
				password: ""
			},
			emailValid: null,
			passwordValid: false,
			formValid: false
		}
	}

	handleInput = (event) => {

		const name = event.target.name;
		const value = event.target.value;

		let newObject = Object.assign(this.state.input, {});

		newObject[name] = value;

		this.setState({
			input: newObject
		}, () => {
			this.handleInputValidator(name, value)
		});

	}

	handleInputValidator = (fieldName, value) => {
		let emailValid = this.state.emailValid
		switch(fieldName) {
			case 'email':
				console.log('email', value);
				 emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);


				 emailValid === null ? this.setState({ emailValid: false}) :  this.setState({ emailValid: true });

				 // if (emailValid === null ) {
					//  this.setState({
					// 	 emailValid: false
					//  });
				 // }
         //
				 // if (emailValid !== null) {
					//  this.setState({
					// 	 emailValid: true
					//  });
				 // }

				break;
		}

	}


  render() {

		const emailValidChecker = this.state.emailValid;
		let errors = '';
		if(emailValidChecker === null) {
			errors = '';
		} else if (emailValidChecker === false) {
			const spanStyle = {
				fontSize: 11 + 'px',
				color: "red"
			}
			errors = <span style={spanStyle}>Enter a valid email</span>
		}

    return (
				<form>
		      <div className="form-group">
		        <label htmlFor="recipient-name" className="col-form-label">Email:</label>
		        <input type="text" className="form-control" id="email" name='email'  onChange={this.handleInput}/>
						{errors}
		      </div>
		      <div className="form-group">
		        <label htmlFor="message-text" className="col-form-label">Password:</label>
		        <input type="text" className="form-control" id="password" name='password' onChange={this.handleInput}/>
		      </div>
		      <div className="modal-footer">
		        <button type="button" className="btn btn-outline-secondary" data-dismiss="modal">Close</button>
		        <button type="button" className="btn btn-outline-primary">Submit</button>
		      </div>
	    </form>
		)
  }
}

class NavigationBar extends Component {

  render() {

    return (
				<div>
		      <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
		        <a className="navbar-brand" href="#">4 Square</a>
		        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
		          <span className="navbar-toggler-icon"></span>
		        </button>

		        <div className="collapse navbar-collapse" id="navbarsExampleDefault">
		          <ul className="navbar-nav mr-auto">
		            <li className="nav-item active">
		              <a className="nav-link" data-toggle='modal' data-target="#loginOrSignUp" href="#">Log In / Sign In
		                <span className="sr-only">(current)</span>
		              </a>
		            </li>
		          </ul>
		          <form className="form-inline my-2 my-lg-0">
		            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
		            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
		          </form>
		        </div>
		      </nav>

		      <div className="modal fade" id="loginOrSignUp" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		        <div className="modal-dialog" role="document">
		          <div className="modal-content">
		            <div className="modal-header">
		              <h5 className="modal-title" id="exampleModalLabel">Log In / Sign Up</h5>
		              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
		                <span aria-hidden="true">&times;</span>
		              </button>
		            </div>
		            <div className="modal-body">
		              <ul className="nav nav-tabs" role="tablist">
		                <li className="nav-item">
		                  <a className="nav-link active" data-toggle="tab" href="#home" role="tab">Sign In</a>
		                </li>
		                <li className="nav-item">
		                  <a className="nav-link" data-toggle="tab" href="#profile" role="tab">Sign Up</a>
		                </li>
		              </ul>
		              <div className="tab-content">
		                <div className="tab-pane active" id="home" role="tabpanel">
		                  <NavLogInAndSignUp

												/>
		                </div>
		                <div className="tab-pane" id="profile" role="tabpanel">
		                  <NavLogInAndSignUp />
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		      </div>
	    </div>
		)
  }

}

export default NavigationBar;
