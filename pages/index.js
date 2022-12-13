import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

export default function Home() {
  return (
    <Container className="my-3">
      <h1>Pharmacist Tools</h1>
      <h2>Minor Ailments</h2>
      <ul>
        <li>Conjunctivitis</li>
        <li>Allergic Rhinitis</li>
        <li>Candidial Stomatitis</li>
        <li>Herpes Liabialis</li>
        <li>Hemorrhoids</li>
        <li>GERD</li>
        <li>Dysmenorrhea</li>
        <li>Musculosketal Sprains and Strains</li>
        <li>Impetigo</li>
      </ul>
      <Button className="mx-3">UTI (Uncomplicated)</Button>
      <Button className="mx-3">Dematitis</Button>
      <Button className="mx-3">Insect Bites</Button>
      <Button className="mx-3">Conjunctivitis</Button>
    </Container>
  );
}
