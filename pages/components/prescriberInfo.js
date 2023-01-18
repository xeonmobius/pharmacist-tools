import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

export default function PrescriberInfo() {
  return (
    <>
      <h2>Prescriber Info</h2>
      <InputGroup size="sm">
        <InputGroup.Text id="basic-addon1">Name</InputGroup.Text>
        <Form.Control
          placeholder="Name"
          aria-label="Name"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">CPSO#</InputGroup.Text>
        <Form.Control
          placeholder="CPSO#"
          aria-label="CPSO#"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
      <InputGroup size="sm" className="mt-2">
        <InputGroup.Text id="basic-addon1">Phone#</InputGroup.Text>
        <Form.Control
          placeholder="000-000-0000"
          aria-label="phone"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">Fax#</InputGroup.Text>
        <Form.Control
          placeholder="000-000-0000"
          aria-label="Fax#"
          aria-describedby="basic-addon1"
        />
        <InputGroup.Text id="basic-addon1">
          Address
        </InputGroup.Text>
        <Form.Control
          placeholder=""
          aria-label=""
          aria-describedby="basic-addon1"
        />
      </InputGroup>
    </>
  );
}
