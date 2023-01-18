import Form from "react-bootstrap/Form";
const formStatus = new Array(13).fill(false);

export default function Redflags({ setButtonDisabled, redflags }) {
  const checkedHandler = (e) => {
    formStatus[e.target.id] = e.target.checked;
    if (formStatus.some((el) => el === true)) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  };

  return (
    <>
      <h2>Reasons to Refer (Red Flags)</h2>
      {redflags.map((name, index) => (
        <Form.Check id={index} type={"checkbox"} label={name} onChange={(e) => checkedHandler(e)}/>
      ))}
    </>
  );
}
