import React from "react";
import { handleRegistration } from "../requests/authRequests";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";
// core components
import Header from "components/Headers/Header.jsx";

class CreateUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      middleName: "",
      lastName: "",
      phoneNumber: "",
      emailAddress: "",
      password: "",
      emailVerification: "",
      isVerified: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }
  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "radio" ? target.value : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="9">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Create User</h3>
                    </Col>
                  </Row>
                </CardHeader>
                <CardBody>
                  <Form>
                    <h6 className="heading-small text-muted mb-4">
                      Patient information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              First Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.firstName}
                              name="firstName"
                              placeholder="First Name"
                              type="text"
                              onChange={this.handleInputChange}
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Middle Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="middleName"
                              value={this.state.middleName}
                              placeholder="Middle Name"
                              type="text"
                              onChange={this.handleInputChange}
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Last Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.lastName}
                              name="lastName"
                              placeholder="Last Name"
                              type="text"
                              onChange={this.handleInputChange}
                              required
                            />
                          </FormGroup>
                        </Col>

                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Phone Number
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.phoneNumber}
                              name="phoneNumber"
                              placeholder="Phone Number"
                              type="number"
                              onChange={this.handleInputChange}
                              required
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Email Address
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.emailAddress}
                              name="emailAddress"
                              placeholder="Email Address"
                              type="email"
                              onChange={this.handleInputChange}
                              required
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="text-center">
                  <Button className="mt-4" color="primary" type="button" onClick={() =>
                      handleRegistration(
                        this.state.firstName,
                        this.state.middleName,
                        this.state.lastName,
                        this.state.emailAddress,
                        this.state.phoneNumber,
                        this.state.password
                      )
                    }>
                    Create User
                  </Button>
                </div>
                  </Form>
                  
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default CreateUser;
