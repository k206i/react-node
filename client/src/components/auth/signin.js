import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';


class Signin extends Component {

  handleFormSubmit = values => {
    console.log(values);
  }

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
            type='text'/>
        </fieldset>
        <fieldset className='form-group'>
          <label>
            Password:
          </label>
          <Field
            className='form-control'
            name='password'
            component='input'
            type='text'/>
        </fieldset>
        <button
          type='submit'
          className='btn btn-primary'>
          Sign in
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signin',
})(Signin);
