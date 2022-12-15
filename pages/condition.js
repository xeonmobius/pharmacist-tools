import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import PatientInfo from "./components/patientInfo";
import PrescriberInfo from "./components/prescriberInfo";
import Symptoms from "./components/symptoms";
import TreatmentGoals from "./components/treatmentGoals";
import Redflags from "./components/redflags";
import TreatmentTable from "./components/treatmentTable";
import { useRouter } from "next/router";

export default function Condition() {
  const router = useRouter();
  const query = router.query;
  const name = query.name;

  return (
    <Container className="my-3">
      <h1>{name}</h1>
      <PatientInfo></PatientInfo>
      <PrescriberInfo></PrescriberInfo>
      <Symptoms></Symptoms>
      <Redflags></Redflags>
      <TreatmentGoals></TreatmentGoals>
      <TreatmentTable></TreatmentTable>
      <Button className="mx-3 my-3">Print Prescription</Button>
      <Button className="mx-3 my-3">Create Pharmaceutical Opinion</Button>
    </Container>
  );
}
