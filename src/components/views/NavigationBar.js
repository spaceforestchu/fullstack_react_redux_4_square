import React, {Component} from 'react';
import {InputSearch} from '../containers';

class NavLogInAndSignUp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			input: {
				email: "",
				password: ""
			},
			emailValid: null,
			passwordValid: null,
			formValid: false,
			formStyle: "form-control",
			passwordStyle: "form-control"
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
		let emailValid = this.state.emailValid;
		let passwordValid = this.state.passwordValid;
		switch(fieldName) {
			case 'email':
				console.log('email', value);
				 emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
				 emailValid === null ? this.setState({ emailValid: false, formStyle: 'form-control is-invalid'}) :  this.setState({ emailValid: true, formStyle: 'form-control' });
				 break;
			case 'password':
				console.log('password', value);

				if (value.length !== 8) {
					this.setState(() => {
						return {
							passwordValid: false,
							formStyle: 'form-control is-invalid'
						}
					})
				}

				if (value.length > 8) {
					let strongRegex = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$");
					passwordValid = value.match(strongRegex);
					passwordValid === null ? this.setState({passwordValid: false, passwordStyle: 'form-control is-invalid'}) : this.setState({ passwordValid: true, formStyle: 'form-control' });
				}

				break;
			default:
				break;
		}

	}


  render() {

		const spanStyle = {
			fontSize: 10 + 'px',
			color: "red"
		}

		const emailValidChecker = this.state.emailValid;
		let emailErrors = '';
		if(emailValidChecker === null) {
			emailErrors = '';
		} else if (emailValidChecker === false) {
			emailErrors = <span style={spanStyle}>Enter a valid email</span>
		}

		const passwordValidChecker = this.state.passwordValid;
		let passwordErrors = '';
		if(passwordValidChecker === null) {
			passwordErrors = '';
		} else if (passwordValidChecker === false) {
			passwordErrors = <span style={spanStyle}>Password must have 8 characters. It has to contain 1 letter, 1 uppercase, and 1 special symbol</span>
		}


    return (
				<form>
		      <div className="form-group">
		        <label htmlFor="recipient-name" className="col-form-label">Email:</label>
		        <input type="text" className={this.state.formStyle} id="email" name='email'  onChange={this.handleInput}/>
						{emailErrors}
		      </div>
		      <div className="form-group">
		        <label htmlFor="message-text" className="col-form-label">Password:</label>
		        <input type="text" className={this.state.formStyle} id="password" name='password' onChange={this.handleInput}/>
						{passwordErrors}
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
		         <InputSearch />
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
