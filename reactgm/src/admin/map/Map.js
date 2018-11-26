import axios from "axios";

/* RESOURCES: 

    https://loubodde.com/2017/06/19/infotainment-map-tut/
    https://ctejas.wordpress.com/2017/10/14/gm-vehicle-infotainment-app/

USER ID: XNGRTVZ9WDRB2EKLEXHR21bfvbxEYJQuzOAR0gRCVU9nuJsmQ

PW: ehUEinyd68B2BrpSHZHsJnx6ZBOYgTANMHVlQY
    You may use the Position Panel with the map. Select the "Move marker with map" to sync the panel settings with this map
*/
import React, { Component } from "react";

const gm = window.gm;
const google = window.google; // error with google undefined when reloading NGI emulator

class App extends Component {
  state = {
    vin: "pending...",
    merchants: []
  };

  containerRef = React.createRef(); // creates the empty box that React will fill with an element

  processVehicleData = data => {
    //
    console.log("Data", data);
    //var lat = data.gps_lat / 3600000; // convert milliarcseconds to degrees,LA:  122099999
    //var lng = data.gps_long / 3600000;  // convert milliarcseconds to degrees,LA: -425993877

    if (this.state.useKMH) {
      var average_speed = data.average_speed;
    } else {
      var average_speed = Math.round(data.average_speed * 0.621); // convert from kmh to mph
    }

    //  this.mapsLoaded();
    gm.info.getCurrentPosition(pos => {
      //  use the SDK to gather the vehicles current position
      console.log("POS", pos);
      var latLng = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      this.initMap(latLng);
    }, true);

    this.setState({
      average_speed: average_speed
    });
  };

  initMap = latLng => {
    // this function creates a map with marker using the coordinates passed in
    console.log("latLng", latLng);
    var map = new window.google.maps.Map(this.containerRef.current, {
      zoom: 10,
      center: latLng
    });
    var marker = new window.google.maps.Marker({
      position: latLng,
      map: map,
      animation: window.google.maps.Animation.DROP
    });
  };

  componentDidMount() {
    const vin = gm.info.getVIN();

    this.setState({ vin });

    //  do continuous query of the car’s systems; think of it like a listener for signal values
    const vehicleData = gm.info.watchVehicleData(this.processVehicleData, [
      "average_speed",
      "gps_long",
      "gps_lat",
      "gear_automatic"
    ]);
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    console.log("gm", gm);
    console.log("state", this.state);

    return (
      <div className="">
        <div
          style={{ width: "100%", height: "100vh" }}
          ref={this.containerRef}
        />
      </div>
    );
  }
}

export default App;
