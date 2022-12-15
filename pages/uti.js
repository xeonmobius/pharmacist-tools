import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function UTI() {
  return (
    <Container className="my-3">
      <h1>UTI</h1>
      <h2>Patient Info</h2>
      <InputGroup size="sm">
        <InputGroup.Text id="basic-addon1">First Name</InputGroup.Text>
        <Form.Control
          placeholder="First Name"
          aria-label="First Name"
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
      </InputGroup>
      <h2>Prescriber Info</h2>
      <InputGroup size="sm">
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
      <h2>Symptoms</h2>
      <Form.Check type={"checkbox"} label={`Dysuria`} />
      <Form.Check type={"checkbox"} label={`Increase in urinary frequency`} />
      <Form.Check type={"checkbox"} label={"Urinary urgency"} />
      <Form.Check type={"checkbox"} label={"Suprapubic discomfort"} />
      <Form.Check
        type={"checkbox"}
        label={"Hematuria (blood in urine) may be present"}
      />
      <Form.Check
        type={"checkbox"}
        label={"Malodorous, cloudy, or turbid urine may be present"}
      />
      <h2>Reasons to Refer (Red Flags)</h2>
      <Form.Check type={"checkbox"} label={"Fever"} />
      <Form.Check
        type={"checkbox"}
        label={"Flank pain (pyelonephritis or complicated UTI)"}
      />
      <Form.Check
        type={"checkbox"}
        label={
          "Vaginal discharge along with itching and burning, painful intercourse but not frequency or urgency (vaginitis)"
        }
      />
      <Form.Check
        type={"checkbox"}
        label={
          "≥2 uncomplicated UTIs in past 6 mos. or ≥ 3 +ve cultures within past 12 mos."
        }
      />
      <Form.Check
        type={"checkbox"}
        label={"antibiotic use within past three months"}
      />
      <Form.Check
        type={"checkbox"}
        label={"increase in severity of symptoms"}
      />
      <Form.Check type={"checkbox"} label={"poorly controlled diabetes"} />
      <Form.Check type={"checkbox"} label={"male"} />
      <Form.Check
        type={"checkbox"}
        label={"patients appearing systemically unwell or septic"}
      />
      <Form.Check type={"checkbox"} label={"renal insufficiency"} />
      <Form.Check type={"checkbox"} label={"nephrolithiasis"} />
      <Form.Check
        type={"checkbox"}
        label={
          "anatomical or functional abnormality of urinary tract (such as catheter)"
        }
      />
      <Form.Check type={"checkbox"} label={"immunocompromised"} />
      <h2>Goal of Treatment</h2>
      <Form.Check type={"checkbox"} label={"Relieve Symptoms"} />
      <Form.Check type={"checkbox"} label={"Prevent Complications"} />
      <Form.Check type={"checkbox"} label={"Prevent Recurrence"} />
      <h2>Treatment</h2>
      <Row>
        <Col></Col>
        <Col>
          <h5>Generic Name</h5>
        </Col>
        <Col>
          <h5>Brand Name</h5>
        </Col>
        <Col>
          <h5>Strength</h5>
        </Col>
        <Col>
          <h5>SIG</h5>
        </Col>
        <Col>
          <h5>Duration</h5>
        </Col>
        <Col>
          <h5>Qty</h5>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Check inline type={"radio"} />
        </Col>
        <Col>Macrobid 100mg</Col>
        <Col>Macrobid 100mg</Col>
        <Col>100mg</Col>
        <Col>Take 1 Capsule Twice a Day</Col>
        <Col>5 Days</Col>
        <Col>10 Capsules</Col>
      </Row>
      <Row>
        <Col>
          <Form.Check inline type={"radio"} />
        </Col>
        <Col>Sulfatrim DS</Col>
        <Col>sulfamethixole/
        trimethoprim</Col>
        <Col>800mg/160mg</Col>
        <Col>Take 1 tablet Twice a Day</Col>
        <Col>3 Days</Col>
        <Col>6 tablets</Col>
      </Row>
      <Row>
        <Col>
          <Form.Check inline type={"radio"} />
        </Col>
        <Col>Trimethoprim</Col>
        <Col>Trimethoprim</Col>
        <Col>100mg</Col>
        <Col>Take 1 tablet every 12 hours</Col>
        <Col>3 Days</Col>
        <Col>6 tablets</Col>
      </Row>
      <Row>
        <Col>
          <Form.Check inline type={"radio"} />
        </Col>
        <Col>Fosfomycin</Col>
        <Col>Fosfomycin</Col>
        <Col>3g</Col>
        <Col>Take 3g as a single dose</Col>
        <Col>1</Col>
        <Col>1 Sachet</Col>
      </Row>
      <Button className="mx-3 my-3">Print Prescription</Button>
      <Button className="mx-3 my-3">Create Pharmaceutical Opinion</Button>
    </Container>
  );
}
