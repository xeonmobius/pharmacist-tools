import Form from "react-bootstrap/Form";

export default function Symptoms() {
  return (
    <>
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
    </>
  );
}
