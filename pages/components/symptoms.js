import Form from "react-bootstrap/Form";

export default function Symptoms({ symptoms }) {
  return (
    <>
      <h2>Symptoms</h2>
      {symptoms.map((name) => (
        <Form.Check type={"checkbox"} label={name} />
      ))}
    </>
  );
}
