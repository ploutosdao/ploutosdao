import "./header.css"
import { Nav, Navbar } from "react-bootstrap";
import { Wallet } from "use-wallet";
import {AiFillWallet, AiOutlineWallet} from 'react-icons/ai';
import { GiBigGear } from "react-icons/gi"

interface HeaderProps<T> {
  wallet: Wallet<T>
}

function Header<T>({wallet}: HeaderProps<T>) {
  
  return (
    <Navbar>
      <Navbar.Brand>{' '}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Item>
            {wallet.status === 'connected' ? (
              <Nav.Link eventKey="walletconnect"  className="buttonbg rounded text-white" onClick={() => wallet.reset()}>{wallet.account?.substring(0, 8)}{'... '}<AiFillWallet /></Nav.Link>
            ) : (
              <Nav.Link eventKey="walletconnect"  className="buttonbg rounded text-white" onClick={() => wallet.connect('provided')}><AiOutlineWallet /></Nav.Link>
            )}
          </Nav.Item>
          <Nav.Item><Nav.Link>{' '}</Nav.Link></Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="settings" className="buttonbg rounded text-white"><GiBigGear />{' '}</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Header;