import React from "react";

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
import UserHeader from "components/Headers/UserHeader.jsx";

class CreateUser extends React.Component {
  render() {
    return (
      <>
        <UserHeader />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <Col className="order-xl-1" xl="12">
              <Card className="bg-secondary shadow">
                <CardHeader className="bg-white border-0">
                  <Row className="align-items-center">
                    <Col xs="8">
                      <h3 className="mb-0">Create medical history</h3>
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
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label">
                              First Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              // value="First Name"
                              name="firstName"
                              placeholder="First Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label">
                              Middle Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="middleName"
                              // value="middle name"
                              placeholder="Middle Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="4">
                          <FormGroup>
                            <label className="form-control-label">
                              Last Name
                            </label>
                            <Input
                              className="form-control-alternative"
                              // value="lucky.jesse"
                              name="lastName"
                              placeholder="Last Name"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormGroup>
                            <label className="form-control-label">Gender</label>
                            <Input
                              className="form-control-alternative"
                              value=""
                              id="phoneNumber"
                              placeholder="Phone Number"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Phone Number
                            </label>
                            <Input
                              className="form-control-alternative"
                              value=""
                              id="phoneNumber"
                              placeholder="Phone Number"
                              type="number"
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
                              defaultValue="Jesse"
                              name="emailAddress"
                              placeholder="Email Address"
                              type="email"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <hr className="my-4" />
                    {/* Address */}
                    <h6 className="heading-small text-muted mb-4">
                      Appointment Details
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Preffered date of appointment
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-address"
                              placeholder="Home Address"
                              type="date"
                              value=""
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="6">
                          <FormGroup>
                            <label className="form-control-label">
                              Preffered time of appointment
                            </label>
                            <Input
                              className="form-control-alternative"
                              id="input-address"
                              placeholder="Home Address"
                              type="time"
                              value=""
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label">
                              Speciality
                            </label>
                            <Input
                              className="form-control-alternative"
                              // value="New York"
                              name="speciality"
                              type="text"
                            />
                          </FormGroup>
                        </Col>
                      </Row>
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
