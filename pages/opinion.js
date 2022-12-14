import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Opinion() {
  return (
    <Container className="my-3">
      <h1>Opinion</h1>
      <Row>
        <Col>
          <h2>Patient Info</h2>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
            <Form.Control
              placeholder="First Name"
              aria-label="Last Name"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">Last Name</InputGroup.Text>
            <Form.Control
              placeholder="Last Name"
              aria-label="Last Name"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">Date of Birth</InputGroup.Text>
            <Form.Control
              placeholder="DD-MM-YYYY"
              aria-label="Date of Birth"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">OHIP</InputGroup.Text>
            <Form.Control
              placeholder="799999999"
              aria-label="OHIP"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
        <Col>
          <h2>Prescriber Info</h2>
          <InputGroup>
            <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
            <Form.Control
              placeholder="First Name"
              aria-label="Last Name"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">CPSO#</InputGroup.Text>
            <Form.Control
              placeholder="Last Name"
              aria-label="Last Name"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">Phone#</InputGroup.Text>
            <Form.Control
              placeholder="DD-MM-YYYY"
              aria-label="Date of Birth"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">Fax#</InputGroup.Text>
            <Form.Control
              placeholder="799999999"
              aria-label="OHIP"
              aria-describedby="basic-addon1"
            />
            <InputGroup.Text id="basic-addon1">
              Date of Transmission
            </InputGroup.Text>
            <Form.Control
              placeholder="DD-MM-YYYY"
              aria-label="Date of Birth"
              aria-describedby="basic-addon1"
            />
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2>Category of Drug Related Problem</h2>
          <p>Please check one of the following</p>
          <Form.Check
            type="checkbox"
            label="Therapeutic duplication drug may not be necessary"
          />
          <Form.Check
            type="checkbox"
            label="Patient needs additional drug therapy"
          />
          <Form.Check
            type="checkbox"
            label="Drug is not working as well as needed (sub-optimal response)"
          />
          <Form.Check type="checkbox" label="Dose is too low" />
          <Form.Check
            type="checkbox"
            label="Adverse drug reaction due to allergy or conflict with another medication or food"
          />
          <Form.Check
            type="checkbox"
            label="Dangerously high dose prescribed or patient taking too much medication (either accidentally or deliberately"
          />
          <Form.Check
            type="checkbox"
            label="Non-compliance (refusing drug or not taking it properly"
          />
          <Form.Check
            type="checkbox"
            label="False or altered prescription has been confirmed"
          />
        </Col>
        <Col>
          <Form.Label htmlFor="inputPassword5">
            Please provide comment on DRP if appropriate
          </Form.Label>
          <Form.Control type="text" />
        </Col>
      </Row>

      <Form.Label htmlFor="inputPassword5">
        Pharmacist's Recommendation on Current DRP
      </Form.Label>
      <Form.Control type="text" />

      <Form.Label htmlFor="inputPassword5">
        Prescriber Review and Comments
      </Form.Label>
      <Form.Control type="text" />

      <Form.Label htmlFor="inputPassword5">
        Pharmacist Action Plan + Discussion with Patient + Comments
      </Form.Label>
      <Form.Control type="text" />

      <Form.Check type="checkbox" label="Check if verbal authorization" />

      <InputGroup>
        <InputGroup.Text id="basic-addon1">
          Pharmacist Signature
        </InputGroup.Text>
        <Form.Control
          placeholder="First Name"
          aria-label="Last Name"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">OCP#</InputGroup.Text>
        <Form.Control
          placeholder="623266"
          aria-label="OCP#"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">Tx Date</InputGroup.Text>
        <Form.Control
          placeholder="DD-MM-YYYY"
          aria-label="Date of Birth"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <h2>Copy of Original Rx</h2>
      <p>Outcome</p>
      <Form.Check
        type="checkbox"
        label="Rx not filled as prescribed (due to clinical issue or confirmed falsified) Rx – PIN 93899991"
      />
      <Form.Check
        type="checkbox"
        label="No change to Rx; Rx filled as prescribed – PIN 93899992"
      />
      <Form.Check type="checkbox" label="Change to Rx – PIN 93899993" />
      <Button className="mx-3 my-3">Print</Button>
    </Container>
  );
}
