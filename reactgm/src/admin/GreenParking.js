import React from "react";
import {
  Card,
  CardBody,
  Collapse,
  modal,
  CardText,
  Button,
  Col,
  FormGroup,
  Form,
  Row
} from "reactstrap";
import PaymentModal from "./PaymentModal";

class GreenParking extends React.Component {
  state = {
    distance: "",
    address: "",
    city: "",
    lat: "",
    long: "",
    space: "",
    spacesAvailable: "",
    cost: "",
    isOpen: false,
    collapse: false,

    toggle: this.toggle.bind(this)
  };

  toggle() {
    this.setState({ collapse: !this.state.collapse });
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  handleDelete(e) {
    alert("Are you certain you want to navigate away from this page? ");
    // e.preventDefault();
  }

  render() {
    console.log("rendering");

    let style = {
      color: "#28D094",
      fontSize: 20
    };

    let styleTitle = {
      color: "#28D094",
      fontSize: 28
    };

    return (
      <div>
        <Button
          color="success"
          onClick={() => this.toggle()}
          style={{ marginBottom: "1rem" }}
        >
          Available Parking
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <CardBody style={{ borderColor: "#28D094" }}>
            <Form>
              <FormGroup color="success">
                <br />
                <br />
                <Card>
                  <Row>
                    <Col xs="">
                      <CardText style={styleTitle}>Available Options </CardText>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <label>Distance</label>
                      <input
                        type="text"
                        defaultValue={this.state.distance}
                        className=" form-control"
                        style={{ borderColor: "#28D094" }}
                        required
                      />
                    </Col>
                    <Col>
                      <label>Address</label>
                      <input
                        type="text"
                        defaultValue={this.state.address}
                        className=" form-control"
                        style={{ borderColor: "#28D094" }}
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
                        style={{ borderColor: "#28D094" }}
                        required
                      />
                    </Col>
                    <Col>
                      <label># of Spaces Available</label>
                      <input
                        type="text"
                        defaultValue={this.state.spacesAvailable}
                        className=" form-control"
                        required
                        style={{ borderColor: "#28D094" }}
                      />
                    </Col>
                  </Row>

                  <Row>
                    <Col xs="">
                      <label>Rate</label>
                      <input
                        type="text"
                        defaultValue={this.state.cost}
                        className=" form-control"
                        required
                        style={{ borderColor: "#28D094" }}
                        statesDropdown
                      />
                    </Col>
                    <Col>
                      <label>Space #</label>
                      <input
                        type="text"
                        defaultValue={this.state.space}
                        className=" form-control"
                        required
                        style={{ borderColor: "#28D094" }}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <br />
                      <div className="GreenParking">
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

export default GreenParking;
