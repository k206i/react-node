import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import * as actions from '../../actions';

class RenderField extends Component {
  render() {
    const {
      className,
      input,
      label,
      type,
      meta: { touched, error }
    } = this.props;

    return (
      <div>
        <label>
          {label}
        </label>
        <div>
          <input
            {...input}
            className={className}
            placeholder={label}
            type={type}
          />
          {touched && error &&
            <div className='error'>{error}</div>}
        </div>
      </div>
    )
  }
}

const renderField = (
  {
    className,
    input,
    label,
    type,
    meta: { touched, error }
  }
) => {
  return (
    <div>
      <label>
        {label}
      </label>
      <div>
        <input
          {...input}
          className={className}
          placeholder={label}
          type={type}
        />
        {touched && error &&
        <div className='error'>{error}</div>}
      </div>
    </div>
  )
};

export class Signup extends Component {

  handleFormSubmit = (formProps) => {
    // action sign up user
    this.props.signupUser(formProps);
  };

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className='alert alert-danger'>
          <strong>Ох-хохо</strong> {this.props.errorMessage}
        </div>
      )
    }
  }

  render() {

    const {
      handleSubmit,
    } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <fieldset className='form-group'>
          <Field
            className='form-control'
            label='Email:'
            name='email'
            component={renderField}
            type='text'
          />
        </fieldset>
        <fieldset className='form-group'>
          <Field
            className='form-control'
            label='Password:'
            name='password'
            component={renderField}
            type='password'
          />
        </fieldset>
        <fieldset className='form-group'>
          <Field
            className='form-control'
            label='Confirm password:'
            name='passwordConfirm'
            component={renderField}
            type='password'
          />
        </fieldset>

        {this.renderAlert()}

        <button
          type='submit'
          className='btn btn-primary'>
          Sign up!
        </button>
      </form>
    );
  }
}

const validate = (formProps) => {
  const {
    email,
    password,
    passwordConfirm,
  } = formProps;

  const errors = {};

  if (!email) {
    errors.email = 'enter email';
  }
  if (!password) {
    errors.password = 'enter password';
  }
  if (!passwordConfirm) {
    errors.passwordConfirm = 'enter password confirm';
  }
  if (password !== passwordConfirm) {
    errors.password = 'Пароли должны совпадать';
  }

  return errors;
};

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.error,
  };
}

Signup = connect(mapStateToProps, actions)(Signup);

export default reduxForm({
  form: 'signup',
  validate,
})(Signup);