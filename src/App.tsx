import { CardColumns, Col, Container, Row } from 'react-bootstrap';
import Particles from "react-tsparticles";
import './App.css';
import DepositPanel from './components/deposit/deposit';
import Header from './components/header/header';
import Sidebar from './components/sidebar/sidebar';
import { useWallet, UseWalletProvider } from 'use-wallet';

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
              enable: true,
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
          <Col sm={10}>
            <CardColumns>
              <DepositPanel />              
            </CardColumns >
          </Col>
        </Row>
      </Container>
    </>
  );
}

function App() {
  return (
    <UseWalletProvider chainId={1337}>
      <AppInner />
    </UseWalletProvider>
  )
}

export default App
