import React, { Component } from "react";
import axios from "axios";

const gm = window.gm;
const google = window.google; // error with google undefined when reloading NGI emulator

class App extends Component {
  state = {
    vin: "pending...",
    merchants: []
  };

  containerRef = React.createRef(); // creates the empty box that React will fill with an element

  processVehicleData = data => {
    const { parkingData } = this.state;
    const position = parkingData.map(item => ({
      lat: item.Latitude,
      lng: item.Longitude
    }));
    console.log(position);
    this.setState({ position: position.map(item => item) });

    console.log("Data", data);

    if (this.state.useKMH) {
      var average_speed = data.average_speed;
    } else {
      var average_speed = Math.round(data.average_speed * 0.621); // convert from kmh to mph
    }

    gm.info.getCurrentPosition(pos => {
      var latLng = { lat: pos.coords.latitude, lng: pos.coords.longitude };
      this.initMap(latLng);
    }, true);

    this.setState({
      average_speed: average_speed
    });
  };

  directionMap = () => {
    const LatLng = this.state.position;
    const latLng = this.state.latLng;
    const parkingData = this.state.parkingData;
    console.log(LatLng);
    var map = new window.google.maps.Map(this.containerRef.current, {
      zoom: 14,
      center: latLng
    });
    const city = parkingData.filter(data => {
      return data.CostDescription == "Free";
    });
    LatLng.map(item => {
      var marker = new window.google.maps.Marker({
        position: item,
        map: map,
        animation: window.google.maps.Animation.DROP
      });
    });
  };

  initMap = latLng => {
    // this function creates a map with marker using the coordinates passed in
    this.setState({ latLng: latLng });
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
    axios
      .get(
        "https://api.go511.com/api/parkandridelots?key=93a61394a8eeae835f7d4b7a0d3597cd&format=json"
      )
      .then(res => {
        console.log(res);
        this.setState({ parkingData: res.data });
        const vehicleData = gm.info.watchVehicleData(this.processVehicleData, [
          "average_speed",
          "gps_long",
          "gps_lat",
          "gear_automatic"
        ]);
      });
  }

  handleClose = () => {
    gm.system.closeApp();
  };

  render() {
    return (
      <div>
        <button
          onClick={() => this.directionMap()}
          className="btn btn-default ml-2"
        >
          Click
        </button>
        <div
          style={{ width: "100%", height: "100vh" }}
          ref={this.containerRef}
        />
      </div>
    );
  }
}

export default App;
