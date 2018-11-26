import React from "react";
import { Card, CardTitle } from "reactstrap";
import { withRouter } from "react-router-dom";

class ParkingResults extends React.Component {
  render() {
    console.log("rendering");

    const { parking } = this.state;
    let style = {
      color: "#f50a58",
      fontSize: 20
    };

    let styleParking = {
      color: "#595454",
      fontSize: 28
    };
    return (
      <div>
        <Card body style={{ borderColor: "#28D094" }}>
          <CardTitle className={style.header}>
            <span style={styleParking}>Parking Options</span>
          </CardTitle>
          <br />
          <br />
        </Card>
      </div>
    );
  }
}
export default withRouter(ParkingResults);
