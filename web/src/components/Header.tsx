import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faGasPump,
  faSquareCaretLeft,
  faSquareCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
  Dropdown,
} from "react-bootstrap";

import "./Banking.css";

const Header = () => {
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container fluid>
          <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
            <Button
              variant="dark"
              className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2">
              <i className="fas fa-ellipsis-v"></i>
            </Button>
            <Navbar.Brand
              href="#home"
              onClick={(e) => e.preventDefault()}
              className="mr-2">
                <img src={"/images/logo.svg"} />
              </Navbar.Brand>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="mr-2">
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
            <span className="navbar-toggler-bar burger-lines"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav mr-auto" navbar>
              <Nav.Item>
                <Nav.Link
                  data-toggle="dropdown"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="m-0">
                  <i className="nc-icon nc-palette"></i>
                  <span className="d-lg-none ml-1">Dashboard</span>
                </Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}>
                  <i className="nc-icon nc-zoom-split"></i>
                  <span className="d-lg-block">Dashboard</span>
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Nav className="ml-auto" navbar>
              <Nav.Item>
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}>
                  <span className="no-icon">Transfers</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}>
                  <span className="no-icon">Payments</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}>
                  <span className="no-icon">Recent Transactions</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}>
                  <span className="no-icon">Loan</span>
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link
                  className="m-0"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}>
                  <span className="no-icon">Online Support</span>
                </Nav.Link>
              </Nav.Item>
              <Dropdown as={Nav.Item}>
                <Dropdown.Toggle
                  aria-expanded={false}
                  aria-haspopup={true}
                  as={Nav.Link}
                  data-toggle="dropdown"
                  id="navbarDropdownMenuLink"
                  variant="default"
                  className="m-0">
                  <span className="no-icon">User</span>
                  <FontAwesomeIcon
                    icon={faChevronDown}
                    className="cstm-fb-icon"
                  />
                </Dropdown.Toggle>
                <Dropdown.Menu aria-labelledby="navbarDropdownMenuLink">
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}>
                    Action
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}>
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}>
                    Something
                  </Dropdown.Item>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}>
                    Something else here
                  </Dropdown.Item>
                  <div className="divider"></div>
                  <Dropdown.Item
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}>
                    Separated link
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default Header;
