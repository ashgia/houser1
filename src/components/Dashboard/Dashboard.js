import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      houses: []
    };
  }

  render() {
    return (
      <div>
        <House />
        <Link to="/wizard">
          <button className="addPropButton"> Add New Property</button>
        </Link>
      </div>
    );
  }
}

export default Dashboard;
