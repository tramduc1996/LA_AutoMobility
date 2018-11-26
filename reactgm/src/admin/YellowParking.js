import React from "react";
import {
  Card,
  CardText,
  Col,
  Button,
  CardBody,
  Collapse,
  FormGroup,
  Form,
  Row
} from "reactstrap";
import GreenParking from "./GreenParking";
import PaymentModal from "./PaymentModal";

class YellowParking extends React.Component {
  state = {
    address: "",
    city: "",
    lat: "",
    long: "",
    distance: "",
    space: "",
    cost: "",
    openMap: false,
    openVisa: false,
    collapse: false
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
      color: "#f6c007",
      fontSize: 20
    };

    let styleTitle = {
      color: "#f6c007",
      fontSize: 28
    };

    return (
      <div>
        <Button
          color="warning"
          onClick={() => this.toggle()}
          style={{ marginBottom: "1rem" }}
        >
          Possible parking
        </Button>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody style={{ borderColor: "#f6c007" }}>
              <Form>
                <FormGroup color="warning">
                  <Card>
                    <Row>
                      <Col xs="">
                        <CardText style={styleTitle}>
                          Possible Parking Options{" "}
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
                          style={{ borderColor: "#f6c007" }}
                          required
                        />
                      </Col>
                      <Col>
                        <label>Address</label>
                        <input
                          type="text"
                          defaultValue={this.state.address}
                          className=" form-control"
                          style={{ borderColor: "#f6c007" }}
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
                          style={{ borderColor: "#f6c007" }}
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
                          style={{ borderColor: "#f6c007" }}
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
                          style={{ borderColor: "#f6c007" }}
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
                          style={{ borderColor: "#f6c007" }}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <Col>
                        <br />
                        <div className="YellowParking">
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
          </Card>
        </Collapse>
      </div>
    );
  }
}
export default YellowParking;
