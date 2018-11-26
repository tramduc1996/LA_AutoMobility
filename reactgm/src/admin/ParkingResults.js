import React from "react";
import { Nav, NavLink, Card, CardTitle } from "reactstrap";
import GreenParking from "./GreenParking";
import YellowParking from "./YellowParking";
import RedParking from "./RedParking";

class ParkingResults extends React.Component {
  render() {
    console.log("rendering");
    return (
      <div style={{ marginTop: "26px" }}>
        <Card body style={{ borderColor: "lightGrey", height: "70vh" }}>
          <CardTitle>
            <h4 className="text-center">Parking Options</h4>
          </CardTitle>
          <br />
          <div>
            <GreenParking />
          </div>
          <br />
          <div>
            <YellowParking />
          </div>
          <br />
          <div>
            <RedParking />
            <br />
          </div>
        </Card>
      </div>
    );
  }
}
export default ParkingResults;
