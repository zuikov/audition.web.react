import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { withFormik } from 'formik';
import * as Yup from 'yup';

import { setListItem } from '../../../redux/actions/content-actions';

const _CreateContentsBody = props => {
  const {
    values,
    touched,
    errors,
    // dirty,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;
  return (
    <Fragment>
      <div className="auth">
        <div className="login">
          <div className="form">
            <div className="form-title">Create new playlist item</div>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <TextField
                  id='sectionNumber'
                  placeholder="Number of section"
                  type="number"
                  value={values.sectionNumber || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.sectionNumber && touched.sectionNumber ? 'form-field error' : 'form-field'}
                />
                {errors.sectionNumber && touched.sectionNumber && <div className="input-feedback">{errors.sectionNumber}</div>}
              </div>
              <div className="form-group">
                <TextField
                  id='sectionName'
                  placeholder="Name of section"
                  type="text"
                  value={values.sectionName || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.sectionName && touched.sectionName ? 'form-field error' : 'form-field'}
                />
                {errors.sectionName && touched.sectionName && <div className="input-feedback">{errors.sectionName}</div>}
              </div>
              <div className="form-group">
                <TextField
                  id='title'
                  placeholder="Title"
                  type="text"
                  value={values.title || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.title && touched.title ? 'form-field error' : 'form-field'}
                />
                {errors.title && touched.title && <div className="input-feedback">{errors.title}</div>}
              </div>
              <div className="form-group">
                <TextField
                  id='description'
                  placeholder="Description of video"
                  type="text"
                  value={values.description || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.description && touched.description ? 'form-field error' : 'form-field'}
                />
                {errors.description && touched.description && <div className="input-feedback">{errors.description}</div>}
              </div>
              <div className="form-group">
                <TextField
                  id='link'
                  placeholder="Link"
                  type="text"
                  value={values.link || ''}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.link && touched.link ? 'form-field error' : 'form-field'}
                />
                {errors.link && touched.link && <div className="input-feedback">{errors.link}</div>}
              </div>

              <div className="form-group form_buttons">
                <div className="form-btn_box">
                  <Button className="form-btn btn_login" type="submit" onClick={handleReset} disabled={!isSubmitting}>
                    Reset
                  </Button>
                </div>
              </div>

              <div className="form-group form_buttons">
                <div className="form-btn_box">
                  <Button className="form-btn btn_login" type="submit">
                    Create
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
                  label="Check number of section"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const _CreateContentsBodyForm = withFormik({
  mapPropsToValues: () => ({sectionNumber: '', sectionName: '', title: '', description: '', link: ''}),
  validationSchema: Yup.object().shape({
    sectionNumber: Yup.string()
      .required('Number is required!'),
    sectionName: Yup.string()
      .required('SectionName is required!'),
    title: Yup.string()
      .required('Title is required!'),
    description: Yup.string()
      .required('Description is required!'),
    link: Yup.string()
      .required('Link is required!')
  }),
  handleSubmit: (values, bag) => {
    bag.props.setListItem(values);
  },
  displayName: 'CreateContentForm'
})(_CreateContentsBody);

const mapDispatchToProps = dispatch => ({
  setListItem: bindActionCreators(setListItem, dispatch)
});

export const CreateContentsBody = connect(null, mapDispatchToProps)(_CreateContentsBodyForm);
