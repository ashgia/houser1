import React, { Component } from "react";
import { connect } from "react-redux";
import {
  updatePropertyName,
  updateAddress,
  updateCity,
  updateState,
  updateZip
} from "../ducks/reducer";

class WizardOne extends Component {
  render() {
    return (
      <div />
      // div className="forms">
      // <form onSubmit=;
    );
  }
}

function mapStateToProps(state) {
  return {
    propertyName: state.propertyName,
    address: state.address,
    city: state.city,
    state: state.state,
    zip: state.zip
  };
}

// const mapDispatchToProps = dispatch => ({
//   onClick: event => {
//     event.preventDefault();
//     dispatch(update());
//   }
// });

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  {
    updatePropertyName,
    updateAddress,
    updateCity,
    updateState,
    updateZip
  }
)(WizardOne);
