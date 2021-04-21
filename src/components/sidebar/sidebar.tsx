import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaDiscord, FaGithub, FaPiggyBank, FaTwitter } from "react-icons/fa";
import { GiCongress } from "react-icons/gi";

function Sidebar() {
  return (
    <Card className="rounded shadow text-white panelbg">
      <Card.Body>
        <Card.Title>Ploutos</Card.Title>
        <Card.Text>
          I help you create wealth through crypto yield farming strategies.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush bg-transparent">
        <ListGroupItem className="bg-transparent"><FaPiggyBank /> Account</ListGroupItem>
        <ListGroupItem className="bg-transparent"><GiCongress /> Governance</ListGroupItem>
        <ListGroupItem className="bg-transparent"><BsFillQuestionSquareFill /> Docs</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#" className="text-white"><FaGithub /></Card.Link>
        <Card.Link href="#" className="text-white"><FaTwitter /></Card.Link>
        <Card.Link href="#" className="text-white"><FaDiscord /></Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Sidebar;