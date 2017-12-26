import React, {Component} from 'react';

const ErrorForms = (props) => {

	return (
		<label className='label label-danger'>{props.message}</label>
	)

}

export default ErrorForms;
