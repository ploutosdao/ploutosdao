import { Card } from "react-bootstrap";

function About() {
  return (
    <Card className="rounded shadow text-white panelbg">
      <Card.Body>
        <Card.Title>About</Card.Title>
        <Card.Text>
          The general idea goes here
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default About;