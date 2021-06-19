import { Card, Nav } from "react-bootstrap";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import { FaDiscord, FaGithub, FaPiggyBank, FaTwitter } from "react-icons/fa";
import { GiCongress } from "react-icons/gi";
import { LinkContainer } from 'react-router-bootstrap';

function Sidebar() {
  return (
    <Card className="rounded shadow panelbg">
      <Card.Body>
        <Card.Title>Ploutos</Card.Title>
        <Card.Text>
          I help you create wealth through crypto yield farming strategies.
        </Card.Text>
      </Card.Body>
      <Nav defaultActiveKey="#/home" className="flex-column">
        <LinkContainer to="/home">
          <Nav.Link className="border-0 bg-transparent"><FaPiggyBank /> Account</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/governance">
          <Nav.Link className="border-0 bg-transparent"><GiCongress /> Governance</Nav.Link>
        </LinkContainer>
        <LinkContainer to="/about">
          <Nav.Link className="border-0 bg-transparent"><BsFillQuestionSquareFill /> About</Nav.Link>
        </LinkContainer>
      </Nav>
      <Card.Body className="text-center">
        <Card.Link href="https://github.com/ploutosdao/ploutosdao" target="_blank"><FaGithub /></Card.Link>
        <Card.Link href="#"><FaTwitter /></Card.Link>
        <Card.Link href="#"><FaDiscord /></Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Sidebar;