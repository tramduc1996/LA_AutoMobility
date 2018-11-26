import React from "react";
import {
  Card,
  CardTitle,
  CardBody,
  CardText,
  Col,
  Label,
  Collapse,
  Button,
  Input,
  FormGroup,
  Form,
  Row
} from "reactstrap";
import GreenParking from "./GreenParking";

class RedParking extends React.Component {
  state = {
    distance: "",
    address: "",
    city: "",
    lat: "",
    long: "",
    spacesWillOpen: "",
    timeSpacesWillOpen: "",
    space: "",
    cost: "",
    openMap: false,
    openVisa: false,
    collapse: false
  };
  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  handleDelete(e) {
    alert("Are you certain you want to delete this record? ");
    // e.preventDefault();
  }

  render() {
    console.log("rendering");

    let style = {
      color: "#F47373",
      fontSize: 20
    };

    let styleTitle = {
      color: "#F47373",
      fontSize: 28
    };

    return (
      <div>
        <Button
          color="danger"
          onClick={() => this.toggle()}
          style={{ marginBottom: "1rem" }}
        >
          Unavailable Parking
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <CardBody style={{ borderColor: "#F47373" }}>
            <Form>
              <FormGroup color="danger">
                <Card>
                  <Row>
                    <Col xs="">
                      <CardText style={styleTitle}>
                        Currently Unavailable{" "}
                      </CardText>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <label>Distance</label>
                      <input
                        type="text"
                        defaultValue={this.state.distance}
                        className=" form-control"
                        style={{ borderColor: "#F47373" }}
                        required
                      />
                    </Col>
                    <Col>
                      <label>Address</label>
                      <input
                        type="text"
                        defaultValue={this.state.address}
                        className=" form-control"
                        style={{ borderColor: "#F47373" }}
                        required
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <label>City</label>
                      <input
                        type="text"
                        defaultValue={this.state.city}
                        className=" form-control"
                        style={{ borderColor: "#F47373" }}
                        required
                      />
                    </Col>
                    <Col>
                      <label>Rate</label>
                      <input
                        type="text"
                        defaultValue={this.state.cost}
                        className=" form-control"
                        required
                        style={{ borderColor: "#F47373" }}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="">
                      <label>Spaces expected to Open</label>
                      <input
                        type="text"
                        defaultValue={this.state.spacesWillOpen}
                        className=" form-control"
                        required
                        style={{ borderColor: "#F47373" }}
                        statesDropdown
                      />
                    </Col>
                    <Col xs="">
                      <label>Time Spaces Will to Open</label>
                      <input
                        type="text"
                        defaultValue={this.state.timeSpacesWillOpen}
                        className=" form-control"
                        required
                        style={{ borderColor: "#F47373" }}
                        statesDropdown
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <br />
                      <div className="RedParking">
                        <button
                          type="button"
                          className="btn btn-primary  text-uppercase white font-small-2 box-shadow-2 border-0 btn-xs"
                          onClick={this.toggleModal}
                          style={{ margin: 10 }}
                        >
                          {/* <i className="fa fa-eye mr-2" aria-hidden="true" /> */}
                          Pay Now
                        </button>
                      </div>
                    </Col>
                    <br />
                    <br />
                    <br />
                    <Col>
                      <br />
                      <button
                        type="button"
                        className="login btn btn-danger px-4 py-2 text-uppercase white font-small-4 box-shadow-2 border-0 btn btn-secondary"
                        onClick={this.handleDelete}
                        style={{ margin: 10 }}
                      >
                        X
                      </button>
                    </Col>
                  </Row>
                </Card>
                <br />
                <br />
                <Col>
                  <div>
                    <modal
                      PaymentModal
                      show={this.state.isOpen}
                      onClose={this.toggleModal}
                    />
                  </div>
                </Col>
              </FormGroup>
            </Form>
          </CardBody>
        </Collapse>
      </div>
    );
  }
}

export default RedParking;
