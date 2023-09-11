import React from 'react';
import RLogo from '../../logo.svg'
import info from '../../img/info.png'
import userimg from '../../img/userimg.png'
import notify from '../../img/notification.png'
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fon'
import { faCheckSquare, faCoffee, faL, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, InputGroup } from 'react-bootstrap';

// library.add(faL, faCheckSquare, faCoffee, faMagnifyingGlass)

function MainNav() {
  return (
    <Navbar expand="lg" className="mprimary">
      <Container fluid>
        <Navbar.Brand href="#">Coursefinder.ai </Navbar.Brand>
        <Form className="d-flex col-3 ms-5 ps-5">
        <InputGroup className='d-flex align-items-center justify-content-center'>
            <FontAwesomeIcon className='searchicon' icon={faMagnifyingGlass} />
            <Form.Control
                type="search"
                placeholder="Search by students name, ack no."
                className="me-2 searchbar"
                aria-label="Search"
                />
                {/* <Button variant="outline-success">Search</Button> */}
            </InputGroup>
        </Form>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0 custnav"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
                <img src={info} alt='info' className='me-2'/>
                What's new? 
            </Nav.Link>
            <Nav.Link href="#" className='p-0 m-0'>
                <div className='notification'>
                    <div className='noticon d-flex align-items-center justify-content-center'>
                        <Badge pill bg="danger" className='notbadge'>2</Badge>
                        <img src={notify} alt='notify' />
                    </div>
                </div>
            </Nav.Link>
            <div>
                <img src={userimg} alt='userimage' />
            </div>
            <NavDropdown title="Dikha Goel" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNav;