import React, { Component } from "react";
import Map from "./admin/map/Map";
import Checkout from "./admin/checkout/Checkout";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
const gm = window.gm;

class App extends Component {
  state = {
    vin: "pending...",
    openMap: false,
    openVisa: false,
    openListLocation: false
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
    this.setState({ openVisa: true, openMap: false, openListLocation: false });

    console.log("This is Visa Payment");
  };

  handleListLocation = () => {
    this.setState({ openListLocation: true });
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
          </div>
        </div>
        {this.state.openMap ? (
          <div className="row">
            <div
              className="col-lg-8 col-md-8 col-xs-8 px-0"
              style={{ width: "100%", height: "100%" }}
            >
              <Map handleListLocation={this.handleListLocation} />
            </div>
            {this.state.openListLocation ? (
              <div
                className="col-lg-4 col-md-4 col-xs-4"
                style={{ paddingLeft: "0px", marginTop: "30px" }}
              >
                <div class="card-block">
                  <ul
                    class="list-group"
                    style={{ height: "50%", fontSize: "1.5em" }}
                  >
                    <li
                      onClick={this.handleOpenVisaPayment}
                      class="list-group-item"
                      style={{ padding: "40px 5px" }}
                    >
                      <span class="badge badge-success p-3 mr-2">3</span>
                      <ul>
                        <li>Location: 243 W 1st St, Los Angeles, CA 90012.</li>
                        <li>Cost Description: $5.</li>
                        <li>Spaces: Already Full.</li>
                        <li>County Name: Los Angeles.</li>
                      </ul>
                    </li>

                    <li
                      onClick={this.handleOpenVisaPayment}
                      class="list-group-item"
                      style={{ padding: "40px 5px" }}
                    >
                      <span class="badge badge-warning p-3 mr-2">2</span>{" "}
                      <ul>
                        <li>
                          Location: 800 N Alameda St, Los Angeles, CA 90012.{" "}
                        </li>
                        <li>Cost Description: $8 .</li>
                        <li>Spaces: 5-10 mins waiting times.</li>
                        <li>County Name: Los Angeles.</li>
                      </ul>
                    </li>
                    <li
                      onClick={this.handleOpenVisaPayment}
                      class="list-group-item"
                      style={{ padding: "40px 5px" }}
                    >
                      <span class="badge badge-danger p-3 mr-2">1</span>
                      <ul>
                        <li>Location: Union Station East. </li>
                        <li>Cost Description: Metro Link Rider Only. Free.</li>
                        <li>Spaces: 50 slots. </li>
                        <li>County Name: Los Angeles.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            ) : null}
          </div>
        ) : null}
        {this.state.openVisa ? (
          <div className="row">
            <div
              className="col-lg-12 col-md-12 col-xs-12 px-0"
              style={{ width: "100%", height: "100%" }}
            >
              <Checkout />
            </div>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

export default App;
