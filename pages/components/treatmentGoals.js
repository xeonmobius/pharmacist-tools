import Form from "react-bootstrap/Form";

export default function TreatmentGoals({ treatmentGoals }) {
  return (
    <>
      <h2>Goal of Treatment</h2>
      {treatmentGoals.map((name, index) => (
        <Form.Check id={index} type={"checkbox"} label={name} />
      ))}
    </>
  );
}
