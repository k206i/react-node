import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';


class Signin extends Component {

  handleFormSubmit = ({ email, password }) => {
    this.props.signinUser({
      email,
      password,
    })
  };

  renderAlert = () => {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>
            Error
          </strong>
          {this.props.errorMessage}
        </div>
      )
    }
  };

  render() {
    const {
      handleSubmit,
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <label>
            Email:
          </label>
          <Field
            className='form-control'
            name='email'
            component='input'
            type='email'/>
        </fieldset>
        <fieldset className='form-group'>
          <label>
            Password:
          </label>
          <Field
            className='form-control'
            name='password'
            component='input'
            type='password'/>
        </fieldset>

        {this.renderAlert()}

        <button
          type='submit'
          className='btn btn-primary'>
          Sign in
        </button>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  }
}

Signin = connect(mapStateToProps, actions)(Signin);

export default reduxForm({
  form: 'signin',
})(Signin);
