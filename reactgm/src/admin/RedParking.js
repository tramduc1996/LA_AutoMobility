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
import { withRouter } from "react-router-dom";
import GreenParking from "./GreenParking";

class RedParking extends React.Component {
  state = {
    address: "",
    city: "",
    lat: "",
    long: "",
    space: "",
    cost: "",
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
      color: "#f50a58",
      fontSize: 20
    };

    let styleRfq = {
      color: "#595454",
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
          <Card>
            <CardBody style={{ borderColor: "#555555" }}>
              <Form>
                <FormGroup color="success">
                  <Row>
                    <Col xs="">
                      <CardText style={style}>Currently Unavailable </CardText>
                    </Col>
                  </Row>

                  <Row>
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
                      <label>Space</label>
                      <input
                        type="text"
                        defaultValue={this.state.space}
                        onChange={this.handleSuiteChange}
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
                  </Row>

                  <Col>
                    <br />
                    <div className="RedParking">
                      <button
                        type="button"
                        className="btn btn-success  text-uppercase white font-small-2 box-shadow-2 border-0 btn-xs"
                        onClick={() =>
                          this.props.history.push("/admin/GreenParking/")
                        }
                        style={{ margin: 10 }}
                      >
                        {/* <i className="fa fa-eye mr-2" aria-hidden="true" /> */}
                        To Available Parking
                      </button>
                    </div>
                  </Col>
                  <Col>
                    <br />
                    <button
                      type="button"
                      className="login btn btn-danger px-4 py-2 text-uppercase white font-small-4 box-shadow-2 border-0 btn btn-secondary"
                      onClick={this.handleDelete}
                      style={{ margin: 10 }}
                    >
                      <i className="icon-trash mr-2" />
                      Cancel
                    </button>
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

export default withRouter(RedParking);
