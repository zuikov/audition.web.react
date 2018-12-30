import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { routes } from '../../utils/routes';
import { loginAction, processGoogleAuth } from '../../redux/actions/auth-actions';

import './login.scss';

const _Login = props => {
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
      <div className="login">
        <div className="form">
          <div className="form-title">Login to account</div>
          <div className="form-desc">Don’t have an account yet?
            <Link to={routes.signup} className="link"> Sign up</Link>
          </div>
          <form onSubmit={handleSubmit}>
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
            <div className="form-group form_buttons">
              <GoogleLogin
                clientId=".....apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={props.processGoogleAuth}
                onFailure={props.processGoogleAuth}
                className="google-auth"
              />
              <div className="form-btn_box">
                <Button className="form-btn btn_login" type="submit">
                  login
                </Button>
              </div>
            </div>
          </form>
          <div className="form-group">
            <div className="form-checkbox_box align_center">
              <FormControlLabel
                control={
                  <Checkbox
                    className="form-checkbox"
                    icon={<CheckBoxOutlineBlankIcon className="icon_check"/>}
                    checkedIcon={<CheckBoxIcon className="icon_check"/>}
                    value="checkedI"
                  />
                }
                className="form-checkbox__label"
                label="Remember me"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const _LoginForm = withFormik({
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
    bag.props.loginAction(values);
    console.log('bag', bag);
    console.log('values', values);
  },
  displayName: 'LoginForm'
})(_Login);
console.log('loginAction 1');
const mapDispatchToProps = dispatch => ({
  processGoogleAuth: bindActionCreators(processGoogleAuth, dispatch),
  loginAction: bindActionCreators(loginAction, dispatch)
});

export const Login = connect(null, mapDispatchToProps)(_LoginForm);
