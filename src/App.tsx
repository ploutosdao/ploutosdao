import { CardColumns, Col, Container, Row } from 'react-bootstrap';
import Particles from "react-tsparticles";
import './App.css';
import DepositPanel from './components/deposit/deposit';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import { useWallet, UseWalletProvider } from 'use-wallet';
import React from 'react';
import { Route } from 'react-router';
import About from './components/about/about';
import Governance from './components/governance/governance';

function AppInner() {
  const wallet = useWallet();

  return (
    <>
      <Particles
        id="tsparticles"
        options={{
          fpsLimit: 60,
          fullScreen: {
            enable: true,
            zIndex: 0
          },
          particles: {
            color: {
              value: "#ff0000",
              animation: {
                h: {
                  enable: true,
                  speed: 5
                }
              }
            },
            links: {
              color: "#ffffff",
              enable: true,
              opacity: 0.4,
            },
            collisions: {
              enable: true,
            },
            move: {
              enable: false,
              speed: 6,
              outMode: "out"
            },
            number: {
              density: {
                enable: true
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: {
                min: 0.1,
                max: 3
              }
            },
          },
          detectRetina: true,
        }}
      />
      <Header wallet={wallet} />
      <Container fluid>
        <Row>
          <Col sm={2}>
            <Sidebar />
          </Col>
          <Col sm={10} className="w-100">            
            <Route path="/home"><DepositPanel /></Route>
            <Route path="/governance"><Governance /></Route>
            <Route path="/about"><About /></Route>            
          </Col>
        </Row>
      </Container>
    </>
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
