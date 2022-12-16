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

  return (
    <Container className="my-3">
      <h1>{name}</h1>
      <PatientInfo></PatientInfo>
      <PrescriberInfo></PrescriberInfo>
      <Symptoms></Symptoms>
      <Redflags setButtonDisabled={setButtonDisabled}></Redflags>
      <TreatmentGoals></TreatmentGoals>
      <TreatmentTable></TreatmentTable>
      <Button className="mx-3 my-3" disabled={buttonDisabled}>
        <div className="App">
          <PDFDownloadLink document={<MyDocument />} fileName="somename.pdf">
            {({ blob, url, loading, error }) =>
              loading ? "Loading document..." : "Download now!"
            }
            Print Prescription
          </PDFDownloadLink>
        </div>
      </Button>
      <Button className="mx-3 my-3">Create Pharmaceutical Opinion</Button>
    </Container>
  );
}
