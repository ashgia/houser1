import React, { Component } from "react";
import House from "../House/House";
import { Link } from "react-router-dom";
import axios from "axios";

class Dashboard extends Component {
  construcor() {
    super();
    this.state = {
      houses: []
    };
  }

  componentDidMount() {
    axios.get("/api/houses", getHouses).then(results => {
      this.setState({
        houses: results.data
      });
    });
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
