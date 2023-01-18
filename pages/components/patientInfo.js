import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function PatientInfo() {
  return (
    <>
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
      <InputGroup size="sm" className="mt-2">
        <InputGroup.Text id="basic-addon1">Phone No.</InputGroup.Text>
        <Form.Control
          placeholder="000-000-0000"
          aria-label="Phone Number"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">Address</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">HC#</InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
}
