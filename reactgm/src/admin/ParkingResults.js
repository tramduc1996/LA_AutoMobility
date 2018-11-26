import React from "react";
import { Nav, NavLink, Card, CardTitle } from "reactstrap";
import GreenParking from "./GreenParking";
import YellowParking from "./YellowParking";
import RedParking from "./RedParking";

class ParkingResults extends React.Component {
  render() {
    console.log("rendering");

    let styleParking = {
      color: "#595454",
      fontSize: 28
    };
    return (
      <div>
        <Card body style={{ borderColor: "#28D094" }}>
          <CardTitle>
            <span style={styleParking}>Parking Options</span>
          </CardTitle>
          <br />
          <br />
          <div>
            <GreenParking />
          </div>
          <br />
          <br />
          <div>
            <YellowParking />
          </div>
          <br />
          <br />
          <div>
            <RedParking />
            <br />
            <br />
            <br />
          </div>
        </Card>
      </div>
    );
  }
}
export default ParkingResults;
