import React, { Fragment, Component } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setHideCanceledCheckboxState } from '../../../redux/actions/content-actions';

class _HideCanceledFilter extends Component {
  state = {checked: false};

  handleCheckbox = e => {
    this.props.setHideCanceledCheckboxState(e.target.checked);
  };

  render() {
    return (
      <Fragment>
        <div className="filter-checkbox">
          <FormControlLabel
            control={
              <Checkbox
                className="checkbox-custom"
                icon={<CheckBoxOutlineBlankIcon className="icon_check"/>}
                checkedIcon={<CheckBoxIcon className="icon_check"/>}
                color="primary"
                onChange={e => this.handleCheckbox(e)}
                defaultChecked={false}
              />
            }
            label="Hide all canceled"
          />
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setHideCanceledCheckboxState: bindActionCreators(setHideCanceledCheckboxState, dispatch)
});

export const HideCanceledFilter = connect(null, mapDispatchToProps)(_HideCanceledFilter);
