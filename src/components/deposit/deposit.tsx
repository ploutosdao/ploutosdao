import { Card, CardColumns } from "react-bootstrap";

function DepositPanel() {
  // const [userAccount, setUserAccount] = useState();

  // useEffect(() -> {

  // });

  return (
    <CardColumns>
      <Card className="rounded shadow text-white panelbg">
        <Card.Body>
          <Card.Title>Deposit</Card.Title>
          <Card.Text>
            This is a form to deposit into the contract
          </Card.Text>
        </Card.Body>
      </Card>
    </CardColumns>
  )
}

export default DepositPanel;