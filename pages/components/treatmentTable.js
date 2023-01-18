import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React, { useState } from "react";

export default function TreatmentTable({drugTreatments}) {
  const [checked, setChecked] = useState([false, false, false, false]);

  const onClickedCheckbox = (id) => {
    // sets the other radio button to disabled once 1 of them is clicked
    const newChecked = [false, false, false, false];
    newChecked[id] = true;
    setChecked(newChecked);
  };
  return (
    <>
      <h2>Treatment</h2>
      {drugTreatments.map((name, index) => (
        <Form.Check
          id={index}
          type={"checkbox"}
          /*checked={checked[index]}
          onChange={(e) => onClickedCheckbox(e.target.id)*/
          label={name}
        />
      ))}
    </>
  );
}
