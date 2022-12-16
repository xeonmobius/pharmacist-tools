import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

export default function TreatmentTable() {
  const [checked, setChecked] = useState([false, false, false, false]);

  const onClickedCheckbox = (id) => {
    // sets the other radio button to disabled once 1 of them is clicked
    const newChecked = [false, false, false, false];
    newChecked[id] = true;
    setChecked(newChecked)
  };
  return (
    <>
      <h2>Treatment</h2>
      <Row>
        <Col xs={1}></Col>
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
        <Col xs={1}>
          <Form.Check
            id="0"
            inline
            type={"radio"}
            checked={checked[0]}
            onClick={(e) => onClickedCheckbox(e.target.id)}
          />
        </Col>
        <Col>Macrobid 100mg</Col>
        <Col>Macrobid 100mg</Col>
        <Col>100mg</Col>
        <Col>Take 1 Capsule Twice a Day</Col>
        <Col>5 Days</Col>
        <Col>10 Capsules</Col>
      </Row>
      <Row>
        <Col xs={1}>
          <Form.Check
            id="1"
            inline
            type={"radio"}
            checked={checked[1]}
            onClick={(e) => onClickedCheckbox(e.target.id)}
          />
        </Col>
        <Col>Sulfatrim DS</Col>
        <Col>sulfamethixole/ trimethoprim</Col>
        <Col>800mg/160mg</Col>
        <Col>Take 1 tablet Twice a Day</Col>
        <Col>3 Days</Col>
        <Col>6 tablets</Col>
      </Row>
      <Row>
        <Col xs={1}>
          <Form.Check
            id="2"
            inline
            type={"radio"}
            checked={checked[2]}
            onClick={(e) => onClickedCheckbox(e.target.id)}
          />
        </Col>
        <Col>Trimethoprim</Col>
        <Col>Trimethoprim</Col>
        <Col>100mg</Col>
        <Col>Take 1 tablet every 12 hours</Col>
        <Col>3 Days</Col>
        <Col>6 tablets</Col>
      </Row>
      <Row>
        <Col xs={1}>
          <Form.Check
            id="3"
            inline
            type={"radio"}
            checked={checked[3]}
            onClick={(e) => onClickedCheckbox(e.target.id)}
          />
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
