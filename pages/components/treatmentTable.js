import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function TreatmentTable() {
  return (
    <>
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
    </>
  );
}
