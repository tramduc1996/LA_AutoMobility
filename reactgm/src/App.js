import React, { Component } from "react";
import Map from "./admin/map/Map";
import VisaPayment from "./admin/visaPayment/VisaPayment";
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
    this.setState({ vin });

    axios
      .get("http://localhost:8080/api/test/4")
      .then(res => {
        console.log(res);
      })
      .catch(err => console.log(err));
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
              <VisaPayment />
            </div>
          ) : null}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
