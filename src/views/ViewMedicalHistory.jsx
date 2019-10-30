import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  Table,
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

class ViewMedicalHistory extends React.Component {
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
        <Row className="mt-5">
            <Col className="mb-5 mb-xl-0" xl="12">
              <Card className="shadow">
                <CardHeader className="border-0">
                  <Row className="align-items-center">
                    <div className="col">
                      <h3 className="mb-0">Appointments</h3>
                    </div>
                    <div className="col text-right">
                      <Button
                        color="primary"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                        size="sm"
                      >
                        See all
                      </Button>
                    </div>
                  </Row>
                </CardHeader>
                <Table className="align-items-center table-flush" responsive>
                  <thead className="thead-light">
                    <tr>
                      <th scope="col">Patient</th>
                      <th scope="col">Approver</th>
                      <th scope="col">Doctor</th>
                      <th scope="col">Approved</th> 
                      <th scope="col">Approval Date</th>
                   </tr>
                  </thead>
                  <tbody>
                    
                  </tbody>
                </Table>
              </Card>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default ViewMedicalHistory;
