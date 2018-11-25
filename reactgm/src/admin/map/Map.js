import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div
    style={{
      color: "white",
      background: "grey",
      padding: "15px 10px",
      display: "inline-flex",
      textAlign: "center",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: "100%",
      transform: "translate(-50%, -50%)"
    }}
  >
    {text}
  </div>
);

class Map extends React.Component {
  static defaultProps = {
    center: { lat: 33.93, lng: -118.35 },
    zoom: 11
  };
  render() {
    return (
      <div style={{ width: "100%", height: "800px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyAaqxl4Rve6wjojceW0oC6mXRoDjObVNE0" }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={33.9307936}
            lng={-118.3587776}
            text={"Your Car Location"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Map;
