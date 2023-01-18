import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Link from "next/link";

export default function Home() {
  const data = {
    'name': "UTI"
  }

  const symptoms = ["Jesse", "Tom", "Anna"];

  return (
    <Container className="my-3">
      <h1>Pharmacist Tools</h1>
      <h2>Minor Ailments</h2>
      <ul>
        <Button className="mx-3 my-3">Hemorrhoids</Button>
        <Button className="mx-3 my-3">Dematitis</Button>
        <Button className="mx-3 my-3">Insect Bites</Button>
        <Button className="mx-3 my-3">Conjunctivitis</Button>
        <Button className="mx-3 my-3">Allergic Rhinitis</Button>
        <Button className="mx-3 my-3">Impetigo</Button>
        <Button className="mx-3 my-3">Musculosketal Sprains and Strains</Button>
        <Button className="mx-3 my-3">Dysmenorrhea</Button>
        <Button className="mx-3 my-3">GERD</Button>
        <Button className="mx-3 my-3">
          <Link
            href={{
              pathname: "/condition",
              query: data,
            }}
          >
            UTI (Uncomplicated)
          </Link>
        </Button>
        <Button className="mx-3 my-3">Cold Sores</Button>
        <Button className="mx-3 my-3">Oral Thrush</Button>
        <Button className="mx-3 my-3">GERD</Button>
      </ul>
      <h2>Covid-19</h2>
      <ul>
        <Button className="mx-3 my-3">Paxlovid Prescribing</Button>
      </ul>
      <h2>Pharmacist Opinion</h2>
      <ul>
        <Button className="mx-3 my-3">
          <Link href="/opinion">Pharmaceutical Opinion</Link>
        </Button>
      </ul>
    </Container>
  );
}
