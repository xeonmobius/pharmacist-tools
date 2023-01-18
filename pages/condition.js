import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import PatientInfo from "./components/patientInfo";
import PrescriberInfo from "./components/prescriberInfo";
import Symptoms from "./components/symptoms";
import TreatmentGoals from "./components/treatmentGoals";
import Redflags from "./components/redflags";
import TreatmentTable from "./components/treatmentTable";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MyDocument from "./conditionPdf";
import { PDFDownloadLink } from "@react-pdf/renderer";

export default function Condition() {
  const router = useRouter();
  const query = router.query;
  const name = query.name;
  const [buttonDisabled, setButtonDisabled] = useState(false);

  const symptoms = [
    "Dysuria",
    "Frequency/Urgency",
    "Suprapubic discomfort",
    "No Vaginal Discharge",
  ];

  const redflags = [
    "No Previous diagnosis of UTI",
    "Age <= 12",
    "Pregnant",
    "Breastfeeding",
    "Previous UTI within a Month",
    "Male",
    "Fever, chills, malaise",
    "Flank or Blank pain",
    "Hematuria",
    "Immunocompromised",
    "poorly controlled diabetes",
    "anatomical or functional abnormality of urinary tract (such as catheter)",
    "renal impairment",
  ];

  const treatmentGoals = [
    "Relieve Symptoms",
    "Prevent Complications",
    "Prevent Recurrence",
  ];

  const drugTreatments = [
    "Nitrofurantoin (MacroBID) 100mg PO BID x 5 Days",
    "Sulfamethoxazole/trimethoprim (SMX/TMP) 800mg/160mg BID x 3 Days",
    "Trimethoprim 100mg BID x 3 Days",
    "Fosfomycin 3g dissolbed in 1/2 cup of cold water once a day x 1 day",
  ];

  return (
    <Container className="my-3">
      <h1>{name}</h1>
      <PatientInfo></PatientInfo>
      <PrescriberInfo></PrescriberInfo>
      <Symptoms symptoms={symptoms}></Symptoms>
      <Redflags
        setButtonDisabled={setButtonDisabled}
        redflags={redflags}
      ></Redflags>
      <TreatmentGoals treatmentGoals={treatmentGoals}></TreatmentGoals>
      <TreatmentTable drugTreatments={drugTreatments}></TreatmentTable>
      <Button className="mx-3 my-3" disabled={buttonDisabled}>
        Print Prescription
      </Button>
      <Button className="mx-3 my-3">Create Pharmaceutical Opinion</Button>
    </Container>
  );
}
