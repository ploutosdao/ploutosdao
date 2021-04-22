import { Card } from "react-bootstrap";

function Governance() {
  return (
    <Card className="rounded shadow text-white panelbg">
      <Card.Body>
        <Card.Title>Governance</Card.Title>
        <Card.Text>
          This is managed by a community, there is no definite team behind this thing.
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Governance;