/* import React, {Component} from 'react';

const NavigateBar = (props) => {

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
								<h5 className="modal-title" id="exampleModalLabel">New message</h5>
								<button type="button" className="close" data-dismiss="modal" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
							</div>
							<div className="modal-body">
								<form>
									<div className="form-group">
										<label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
										<input type="text" className="form-control" id="recipient-name"/>
									</div>
									<div className="form-group">
										<label htmlFor="message-text" className="col-form-label">Message:</label>
										<textarea className="form-control" id="message-text"></textarea>
									</div>
								</form>
							</div>
							<div className="modal-footer">
								<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
								<button type="button" className="btn btn-primary">Send message</button>
							</div>
						</div>
					</div>
				</div>

	  </div>
	)
}

class NavContainer extends Component {

  render() {
    return (<NavigateBar />)
  }
}

export default NavContainer;


<form>
	<div className="form-group">
		<label htmlFor="recipient-name" className="col-form-label">Recipient:</label>
		<input type="text" className="form-control" id="recipient-name"/>
	</div>
	<div className="form-group">
		<label htmlFor="message-text" className="col-form-label">Message:</label>
		<textarea className="form-control" id="message-text"></textarea>
	</div>
</form>
</div>
<div className="modal-footer">
<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
<button type="button" className="btn btn-primary">Send message</button>
</div>


*/
