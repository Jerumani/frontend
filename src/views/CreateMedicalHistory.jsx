import React from "react";
import {
  CreateMedicalHistory,
  createMedicalHistory
} from "../requests/requests";
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

class CreateMedicalHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      treatment: "",
      doctorId: 0,
      patientId: 0
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
                      Treatment information
                    </h6>
                    <div className="pl-lg-4">
                      <Row>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label">
                              Treatment
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.firstName}
                              name="firstName"
                              placeholder="First Name"
                              type="text"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label">
                              Doctor ID
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.firstName}
                              name="firstName"
                              placeholder="First Name"
                              type="number"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                        <Col lg="12">
                          <FormGroup>
                            <label className="form-control-label">
                              Patient ID
                            </label>
                            <Input
                              className="form-control-alternative"
                              value={this.state.firstName}
                              name="patientId"
                              placeholder="Patient Id"
                              type="number"
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </div>
                    <div className="text-center">
                      <Button
                        className="mt-4"
                        color="primary"
                        type="button"
                        onClick={() =>
                          createMedicalHistory(
                            this.state.treatment,
                            Date.now(),
                            this.state.doctorId,
                            this.state.patientId
                          )
                        }
                      >
                        Submit Medical History
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

export default CreateMedicalHistory;
