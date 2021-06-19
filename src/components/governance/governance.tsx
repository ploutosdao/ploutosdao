import { ethers, BigNumber } from "ethers";
import React, { useContext, createContext, useState, useEffect, BaseSyntheticEvent } from "react";
import { Card, Table, Row, Container, Col, Form, FormCheck, Alert } from "react-bootstrap";
import { Election__factory } from "../../typechain";

const contractAddr = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";
declare global {
  interface Window {
    ethereum: ethers.providers.ExternalProvider
  }
}

function createCtx<ContextType>() {
  const ctx = createContext<ContextType | undefined>(undefined);
  function useCtx() {
    const c = useContext(ctx);
    if (!c) throw new Error("useCtx must be inside a provider with a value");
    return c;
  }
  return [useCtx, ctx.Provider] as const;
}

interface Candidate {
  id: BigNumber,
  name: string,
  voteCount: BigNumber,
  bySender: boolean,
}

type VotingContextType = {
  candidates: Candidate[];
  provider: ethers.providers.Web3Provider;
  addVote: (candidateId: number) => Promise<void>;
}

const [useVoting, CtxProvider] = createCtx<VotingContextType>();

const VotingProvider: React.FC<React.ReactNode> = ({children}) => {
  if (!window.ethereum?.request) {
    throw new Error("MetaMask is not installed!");
  }

  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [provider] = useState<ethers.providers.Web3Provider>(new ethers.providers.Web3Provider(window.ethereum));
  const [mounted, setMounted] = useState(false);

  const loadAllCandidates = async () => {
    const election = Election__factory.connect(contractAddr, provider.getSigner());
    const accts = (await election.getAllCandidates()).map((item) => {
      return { id: item.id, name: item.name, voteCount: item.voteCount } as Candidate;
    });
    setCandidates(accts);
  };

  useEffect(() => {
    if (!mounted) {
      loadAllCandidates();
      setMounted(true);
    }
  }, [mounted, candidates, provider]);

  const addVote = async (candidateId: number) => {
    const election = Election__factory.connect(contractAddr, provider.getSigner());
    const tx = await election.vote(candidateId);
    await tx.wait();
    await loadAllCandidates();    
  }

  return (
    <CtxProvider value={{ candidates, provider, addVote}}>
      {children}
    </CtxProvider>
  )
}

function Governance() {
  return (
    <VotingProvider>
      <InnerGovernance />
    </VotingProvider>
  )
}
function InnerGovernance() {
  const {candidates} = useVoting();

  return (
    <Card className="rounded shadow panelbg">
      <Card.Body>
        <Card.Title>Governance</Card.Title>
        <Card.Text>
          There are {candidates.length} candidates.
        </Card.Text>
        <Container fluid>
          <Row className="pb-2">
            <Col>
              <VotingForm />
            </Col>
          </Row>
          <Row>
            <Col>
              <VotingResults />
            </Col>
          </Row>
        </Container>
      </Card.Body>
    </Card>
  )
}

interface VotingProps {
  provider: ethers.providers.Web3Provider
}

function VotingForm() {
  const { candidates, addVote } = useVoting();
  const [showError, setShowError] = useState(false);
  const [errorMessage, setMessageError] = useState("");

  const submitVote = async (e: BaseSyntheticEvent) => {
    setShowError(false);
    e.target.checked = false;
    try {      
      await addVote(parseInt(e.target.value));
    } catch ({ data: { message } }) {
      setMessageError(message.substring(message.indexOf("revert ") + 7));
      setShowError(true);
    }
    e.preventDefault();
  };

  return (
    <>
      <Alert show={showError} variant="danger">{errorMessage}</Alert>
      <Form>
        {candidates.map((candidate, idx) => {
          return (
              <FormCheck name="candidate" type="radio" key={idx} value={candidate.id.toNumber()} checked={candidate.bySender} label={candidate.name} onChange={submitVote}></FormCheck>
          )
        })}
      </Form>
    </>
  )
}

function VotingResults() {
  const { candidates } = useVoting();

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <td>name</td>
          <td>votes</td>
          <td>current</td>
        </tr>
      </thead>
      <tbody>
        {candidates.map(({ name, voteCount, bySender }, idx) => {
          return (
            <tr key={idx}>
              <td>{name}</td>
              <td>{voteCount.toNumber()}</td>
              <td>{bySender}</td>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Governance;