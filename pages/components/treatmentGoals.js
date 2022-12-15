import Form from "react-bootstrap/Form";

export default function TreatmentGoals() {
  return (
    <>
      <h2>Goal of Treatment</h2>
      <Form.Check type={"checkbox"} label={"Relieve Symptoms"} />
      <Form.Check type={"checkbox"} label={"Prevent Complications"} />
      <Form.Check type={"checkbox"} label={"Prevent Recurrence"} />
    </>
  );
}
