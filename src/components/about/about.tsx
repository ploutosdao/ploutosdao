import { Card } from "react-bootstrap";

const contractAddress = '0x5fbdb2315678afecb367f032d93f642f64180aa3';

function About() {
  return (
    <Card className="rounded shadow panelbg">
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          This application automates the harvesting of yield in convex finance.
        </Card.Text>
        
      </Card.Body>
    </Card>
  )
}

export default About;