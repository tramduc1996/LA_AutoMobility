/*
  RESOURCES:

  http://www.globalnerdy.com/2017/02/27/build-your-first-app-for-gms-next-generation-infotainment-ngi-in-car-platform/

*/

import React, { Component } from "react";
import styles from "./App.module.css";
import axios from "axios";

import Input from "./Input";

const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending...",
    useKMH: true,
    useMPH: false
  };

  showSpeed = data => {
    console.log("Data", data);

    if (this.state.useKMH) {
      var average_speed = data.average_speed;
    } else {
      var average_speed = Math.round(data.average_speed * 0.621);
    }
    this.setState({ average_speed: average_speed });
  };

  vehicle = val => {
    console.log("VAL", val);
  };

  componentDidMount() {
    const vin = gm.info.getVIN();
    const speed = gm.vehicle.getSpeed();
    // const vehicleData = gm.vehicle.getVehicleData();

    console.log("SPEED", speed);
    // console.log("VEH DATA", vehicleData);

    //  do a continuous query of the car’s systems; think of it like a listener for signal values
    const vehicleData = gm.info.watchVehicleData(this.showSpeed, [
      "average_speed"
    ]);
    console.log("vehicleData", vehicleData);

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

  handleChange = evt => {
    console.log("handleChange", evt, evt.target.name);
    const name = evt.target.name;

    gm.info.getVehicleData(this.showSpeed, ["average_speed"]); //  do a one-time query of the car’s systems

    this.setState({
      // code to toggle state
      useKMH: !this.state.useKMH,
      useMPH: !this.state.useMPH
    });
  };

  render() {
    console.log("gm", gm);
    // console.log("gm", gm.info.getVehicleData

    return (
      <div className={styles.root}>
        <div className="container">
          <div className="row">
            <div className="col-sm text-center">
              <h1>speed</h1>
              <h1 className={styles.speed}>{this.state.average_speed}</h1>
              <input
                onChange={this.handleChange}
                type="checkbox"
                name="mph"
                value="Bike"
                checked={this.state.useMPH}
              />
              MPH
              <input
                onChange={this.handleChange}
                type="checkbox"
                name="kmh"
                value="Bike"
                checked={this.state.useKMH}
              />
              KPH
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
