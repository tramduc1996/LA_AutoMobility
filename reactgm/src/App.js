/*
  RESOURCES:

  http://www.globalnerdy.com/2017/02/27/build-your-first-app-for-gms-next-generation-infotainment-ngi-in-car-platform/

*/

import React, { Component } from "react";
import Map from "./admin/map/Map";
import VisaPayment from "./admin/visaPayment/VisaPayment";
import Parking from "./admin/parking/Parking";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending...",
    openMap: false,
    openVisa: false
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
    axios
      .get(
        "https://api.go511.com/api/parkandridelots?key=93a61394a8eeae835f7d4b7a0d3597cd&format=json"
      )
      .then(parkingData => this.setState({ parkingData }));
    // axios
    //   .get("http://localhost:8080/api/test/4")
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => console.log(err));
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  handleOpenMap = () => {
    this.setState({ openMap: true, openVisa: false });
    console.log("This is Map");
  };

  handleOpenVisaPayment = () => {
    this.setState({ openVisa: true, openMap: false });

    console.log("This is Visa Payment");
  };

  handleSubmit = () => {
    alert("Your Payment is Confirmed!!!");
  };

  render() {
    console.log(gm);
    const { parkingData } = this.state;
    if (!parkingData) return null;
    console.log(parkingData);
    const parkingStructure = parkingData.data.map(item => (
      <div key={item.ID}>
        City: {item.CityName} , Lat:{item.Latitude}, Long: {item.Longitude},
        Space: {item.Spaces}, Cost: {item.CostDescription}, Address:
        {item.Location}
      </div>
    ));
    return (
      <React.Fragment>
        <div>VIN: {this.state.vin}</div>
        <button className="btn btn-default" onClick={this.handleClose}>
          Close
        </button>
        <button className="btn btn-primary" onClick={this.handleOpenMap}>
          Open Map
        </button>
        <button
          className="btn btn-success"
          onClick={this.handleOpenVisaPayment}
        >
          Open Visa Payment
        </button>
        <div>{parkingStructure}</div>
        <div className="row">
          {this.state.openMap ? (
            <div
              className="col-lg-12 col-md-12 col-xs-12"
              style={{ width: "100%", height: "100%" }}
            >
              <Map />
            </div>
          ) : null}
          {this.state.openVisa ? (
            <div
              className="col-lg-5 col-md-5 col-xs-5"
              style={{ margin: "0 auto" }}
            >
              <VisaPayment handleSubmit={this.handleSubmit} />
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
