import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class _CreateContentsHead extends Component {
  componentDidMount() {
    // this.props.fetchPlayList(null);
  }

  render() {
    return (
      <Fragment>
        <div className="table-box__head">
          <div className="table-box__title">Create content</div>
          <span className="btn-small btn-small_pink">Cancel all</span>
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
});

export const CreateContentsHead = connect(null, mapDispatchToProps)(_CreateContentsHead);
