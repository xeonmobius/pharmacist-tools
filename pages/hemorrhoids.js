import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import InputGroup from 'react-bootstrap/InputGroup';


export default function Hemorrhoids() {
  return (
    <Container className="my-3">
      <h1>Hemorrhoids</h1>
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
      </InputGroup>
      <h2>Consent</h2>
      <Form.Check type={"checkbox"} label={`Patient gave consent?`} />
      <h2>Reasons to Refer (Red Flags)</h2>
      <p>Patient has the following symptoms</p>
      <Form.Check type={"checkbox"} label={`Dark Black Stool`} />
      <Form.Check type={"checkbox"} label={`Symptoms > 2 weeks`} />
      <Form.Check type={"checkbox"} label={"Fever"} />
      <h2>Symptoms</h2>
      <p>Patient has the following symptoms</p>
      <Form.Check type={"checkbox"} label={`Dark Black Stool`} />
      <Form.Check type={"checkbox"} label={`Symptoms > 2 weeks`} />
      <Form.Check type={"checkbox"} label={"Fever"} />
      <Button className="mx-3 my-3">Print Prescription</Button>
      <Button className="mx-3 my-3">Create Pharmaceutical Opinion</Button>
    </Container>
  );
}
