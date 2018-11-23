import React, { Component } from "react";
import styles from "./App.module.css";
import axios from "axios";

import Input from "./Input";

const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending..."
  };

  foo = () => {
    console.log("Hi from foo function");
  };

  showSpeed = data => {
    console.log("Data", data);
    let average_speed = data.average_speed;
    this.setState({ average_speed });
  };

  componentDidMount() {
    const vin = gm.info.getVIN();
    const vehicleData = gm.info.watchVehicleData(this.showSpeed, [
      "average_speed"
    ]);

    this.setState({ vin });

    console.log("inside componenentDidMount");
    // RIITS maps: see powerpoint page 28
    // axios
    //   .get("https://egis3.lacounty.gov/dataportal/lariac")
    //   .then(response => {
    //     console.log("RESPONSE", response);
    //   })
    //   .catch(error => {
    //     console.log("There was an error!");
    //   });
    // axios
    //   .get("http://localhost:8080/api/test/3")
    //   .then(response => {
    //     console.log("RESPONSE", response);
    //   })
    //   .catch(error => {
    //     console.log("There was an error!");
    //   });
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    console.log("gm", gm);
    // console.log("gm", gm.info.getVehicleData

    return (
      <div className={styles.root}>
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div>VIN: {this.state.vin}</div>
              <div>speed</div>
              <div>Avg Speed: {this.state.average_speed}</div>
              <button className="btn btn-primary" onClick={this.handleClose}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
