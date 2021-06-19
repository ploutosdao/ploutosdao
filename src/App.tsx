import { Col, Container, Row } from 'react-bootstrap';
import './App.css';
import DepositPanel from './components/deposit/deposit';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import { Redirect, Route } from 'react-router';
import About from './components/about/about';
import Governance from './components/governance/governance';
import { UseWalletProvider } from 'use-wallet';

function AppInner() {
  

  return (
    <Container fluid >
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col sm={2}>
          <Sidebar />
        </Col>
        <Col sm={10} className="w-100">
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home"><DepositPanel /></Route>
          <Route path="/governance"><Governance /></Route>
          <Route path="/about"><About /></Route>
        </Col>
      </Row>      
    </Container>
  );
}

function App() {
  /*
  chain
Mainnet: 1 or mainnet
Ropsten: 3 or ropsten
Rinkeby: 4 or rinkeby
Görli: 5 or görli or goerli
Kovan: 42 or mainnet
hardhat: 1337
  */
  return (
    <UseWalletProvider chainId={1337}>
      <AppInner />
    </UseWalletProvider>
  )
}

export default App
