import React, { Component } from "react";
import Map from "./admin/map/Map";
import Parking from "./admin/parking/Parking";
import ParkingResults from "./admin/ParkingResults";
import Checkout from "./admin/checkout/Checkout";
import axios from "axios";
import VehicleAverageSpeed from "./admin/vehicleAverageSpeed/VehicleAverageSpeed";
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
    console.log("SPEED", speed);

    //  do a continuous query of the car’s systems; think of it like a listener for signal values
    const vehicleData = gm.info.watchVehicleData(this.showSpeed, [
      "average_speed"
    ]);
    console.log("vehicleData", vehicleData);
    this.setState({ vin });
    axios
      .post("http://localhost:8080/api/vqi/")
      .then(response => {
        console.log("MERCHANTS", response);
        this.setState({
          merchants: response.data.item.responseData.merchantList
        });
      })
      .catch(error => {
        console.log("Error access Visa Quest Insights", error);
      });
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

  render() {
    console.log(gm);
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-lg-6">
            <h4> VIN: {this.state.vin}</h4>
          </div>
          <div className="col-lg-6">
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
          </div>
        </div>
        {this.state.openMap ? (
          <div className="row">
            <div
              className="col-lg-8 col-md-8 col-xs-8 px-0"
              style={{ width: "100%", height: "100%" }}
            >
              <Map />
            </div>
            <div className="col-lg-4 col-md-4 col-xs-4 px-0">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <ParkingResults />
                </div>
                <div className="col-lg-12 col-md-12">
                  <VehicleAverageSpeed />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
