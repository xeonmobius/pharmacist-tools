import Form from "react-bootstrap/Form";

export default function Redflags({setButtonDisabled}) {
  
  return (
    <>
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
    </>
  );
}
