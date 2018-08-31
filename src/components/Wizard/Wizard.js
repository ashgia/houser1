import React, { Component } from "react";
import { Link } from "react-router-dom";

class Wizard extends Component {
  constuctor() {
    super();
    this.state = {
      name: "",
      address: "",
      city: "",
      state: "",
      zipcode: ""
    };
  }
  render() {
    return (
      <div>
        {" "}
        WIZARD
        <Link to="/">
          <button className="cancelButton">Cancel</button>
        </Link>
      </div>
    );
  }
}

export default Wizard;
