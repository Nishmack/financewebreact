import React from 'react';
import { Navbar, Nav, NavDropdown, Container, Button, Form } from 'react-bootstrap';
import './Navbar.css';
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

function CustomNavbar() {
  return (
    <header>
      <div className="address-section">
        <div className="address-content">
          <div className="address-item">
            <FaMapMarkerAlt className="icon" />
            Sydney, Australia
          </div>
          <div className="address-item">
            <FaPhoneAlt className="icon" />
            0468328227
          </div>
          <div className="address-item">
            <FaClock className="icon" />
            Mon - Fri: 9:00am - 5:00pm 
          </div>
          <div className="address-item">
            <FaClock className="icon" />
            Weekends Appointments Only
          </div>
        </div>
      </div>

      <Navbar expand="lg" className="bg-body-tertiary" style={{ backgroundColor: "white" }}>
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            src="2.png"  // Replace with the correct path to your image
            alt="Brand Logo"
            style={{ height: '100px' }}   // Adjust the height as needed
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            navbarScroll
          >
            <Nav.Link href="#action1" className="fw-bold custom-nav-link">HOME</Nav.Link>
            <Nav.Link href="#action2" className="fw-bold custom-nav-link">ABOUT US</Nav.Link>
            <NavDropdown title="SERVICES" id="navbarScrollingDropdown" className="fw-bold">
              <NavDropdown.Item href="#action3" className="fw-bold custom-nav-link">FIRST HOME BUYER</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action4" className="fw-bold custom-nav-link">
                BUYING NEXT HOME
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5" className="fw-bold custom-nav-link">
                PURCHASE AN INVESTMENT
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action6" className="fw-bold custom-nav-link">
                REVIEW CURRENT LOANS
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action7" className="fw-bold custom-nav-link">
                COMMERCIAL LOAN
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action8" className="fw-bold custom-nav-link">
                ASSET FINANCE
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action9" className="fw-bold custom-nav-link">
                VEHICLE FINANCE
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action10" className="fw-bold custom-nav-link">
                PERSONAL LOAN
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action2" className="fw-bold custom-nav-link">FAQ'S</Nav.Link>
          </Nav>
          <Form className="d-flex ms-3">
            <Button className="custom-button">CALL US ANYTIME</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>


    </header>
  );
}

export default CustomNavbar;
