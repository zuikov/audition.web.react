import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../../utils/routes';
import { GoogleLogin } from 'react-google-login';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { signUpAction, processGoogleAuth } from '../../redux/actions/auth-actions';

import './signup.scss';

const _SignUp = props => {
  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit
  } = props;
  return (
    <div className="auth">
      <div className="signup">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-title">Create account</div>
          <div className="form-desc">Already have an account?
            <Link to={routes.login} className="link"> Login</Link>
          </div>
          <div className="form-group">
            <TextField
              id='username'
              placeholder="First name"
              type="text"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.username && touched.username ? 'form-field error' : 'form-field'}
            />
            {errors.username && touched.username && <div className="input-feedback">{errors.username}</div>}
          </div>
          <div className="form-group">
            <TextField
              id='email'
              placeholder="Email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? 'form-field error' : 'form-field'}
            />
            {errors.email && touched.email && <div className="input-feedback">{errors.email}</div>}
          </div>
          <div className="form-group">
            <TextField
              id='password'
              placeholder="Password"
              type="password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.password && touched.password ? 'form-field error' : 'form-field'}
            />
            {errors.password && touched.password && <div className="input-feedback">{errors.password}</div>}
          </div>

          <div className="form-forgot">
            <a href="/landing/:market" className="link link_forgot">Forgot your password?</a>
          </div>
          <div className="form-info">
            Search Signin Up, you agree to the
            <a href="/landing/:market" className="link link_underline">User Agreement</a> and
            <a href="/landing/:market" className="link link_underline">Privacy Policy</a>
          </div>
          <div className="form-group form_buttons">
            <GoogleLogin
              clientId="....apps.googleusercontent.com"
              buttonText="Sign in with Google"
              onSuccess={props.processGoogleAuth}
              onFailure={props.processGoogleAuth}
              className="google-auth"
            />
            <div className="form-btn_box">
              <Button variant="contained" className="form-btn btn_login" type="submit">
                create account
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

const _SignUpForm = withFormik({
  mapPropsToValues: () => ({username: '', email: '', password: ''}),
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .required('Name is required!'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required!')
  }),
  handleSubmit: (values, bag) => {
    bag.props.signUpAction(values);
    console.log('bag', bag);
    console.log('values', values);
  },
  displayName: 'LoginForm'
})(_SignUp);

const mapDispatchToProps = dispatch => ({
  processGoogleAuth: bindActionCreators(processGoogleAuth, dispatch),
  signUpAction: bindActionCreators(signUpAction, dispatch)
});

export const SignUp = connect(null, mapDispatchToProps)(_SignUpForm);
