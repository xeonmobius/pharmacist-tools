import Form from "react-bootstrap/Form";
const formStatus = new Array(13).fill(false);

export default function Redflags({ setButtonDisabled }) {

  const checkedHandler = (e) => {
    formStatus[e.target.id] = e.target.checked
    if (formStatus.some((el) => el === true)) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
    console.log(formStatus);
  };

  return (
    <>
      <h2>Reasons to Refer (Red Flags)</h2>
      <Form.Check id="0" type={"checkbox"} label={"Fever"} />
      <Form.Check
        id="1"
        type={"checkbox"}
        label={"Flank pain (pyelonephritis or complicated UTI)"}
        onChange={(e) => checkedHandler(e)}
      />
      <Form.Check
        id="2"
        type={"checkbox"}
        label={
          "Vaginal discharge along with itching and burning, painful intercourse but not frequency or urgency (vaginitis)"
        }
        onChange={(e) => checkedHandler(e)}
      />
      <Form.Check
        id="3"
        type={"checkbox"}
        label={
          "≥2 uncomplicated UTIs in past 6 mos. or ≥ 3 +ve cultures within past 12 mos."
        }
        onChange={(e) => checkedHandler(e)}
      />
      <Form.Check
        id="4"
        type={"checkbox"}
        label={"antibiotic use within past three months"}
        onChange={(e) => checkedHandler(e)}
      />
      <Form.Check
        id="5"
        type={"checkbox"}
        label={"increase in severity of symptoms"}
        onChange={(e) => checkedHandler(e)}
      />
      <Form.Check
        id="6"
        type={"checkbox"}
        label={"poorly controlled diabetes"}
        onChange={(e) => checkedHandler(e)}
      />
      <Form.Check id="7" type={"checkbox"} label={"male"} />
      <Form.Check
        id="8"
        type={"checkbox"}
        label={"patients appearing systemically unwell or septic"}
        onChange={(e) => checkedHandler(e)}
      />
      <Form.Check
        id="9"
        type={"checkbox"}
        label={"renal insufficiency"}
        onChange={(e) => checkedHandler(e)}
      />
      <Form.Check
        id="10"
        type={"checkbox"}
        label={"nephrolithiasis"}
        onChange={(e) => checkedHandler(e)}
      />
      <Form.Check
        id="11"
        type={"checkbox"}
        label={
          "anatomical or functional abnormality of urinary tract (such as catheter)"
        }
        onChange={(e) => checkedHandler(e)}
      />
      <Form.Check
        id="12"
        type={"checkbox"}
        label={"immunocompromised"}
        onClick={(e) => checkedHandler(e)}
      />
    </>
  );
}
