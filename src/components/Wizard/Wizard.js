import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";
// import WizardOne from "./WizardOne/WizardOne";

class Wizard extends Component {
  render() {
    return (
      <div>
        WIZARD
        <Link to="/">
          <button className="cancelButton">Cancel</button>
        </Link>
        {/* <Link to="/wizard/step1">
          <button className="Step 1">Next Step</button>
        </Link> */}
      </div>
    );
  }
}

export default Wizard;
