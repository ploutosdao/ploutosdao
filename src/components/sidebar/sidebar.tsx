import { Card, Nav } from "react-bootstrap";
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
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home" className="border-0 bg-transparent text-white"><FaPiggyBank /> Account</Nav.Link>
        <Nav.Link href="/governance" className="border-0 bg-transparent text-white"><GiCongress /> Governance</Nav.Link>
        <Nav.Link href="/about" className="border-0 bg-transparent text-white"><BsFillQuestionSquareFill /> About</Nav.Link>
      </Nav>
      <Card.Body className="text-center">
        <Card.Link href="https://github.com/ploutosdao/ploutosdao" target="_blank" className="text-white"><FaGithub /></Card.Link>
        <Card.Link href="#" className="text-white"><FaTwitter /></Card.Link>
        <Card.Link href="#" className="text-white"><FaDiscord /></Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Sidebar;