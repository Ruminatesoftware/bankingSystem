import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
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

import Header from "./Header";
import Footer from "./Footer";
import Dashboard from "./Dashboard";
import "./Banking.css";

const Banking = () => {
  return (
    <>
      <div className="main-wrapper">
        <div className="heading-wrapper">
          <Header />
        </div>
        <div className="main-content">
          <Dashboard />
        </div>
        <div className="footer-wrapper">
          <Footer />
        </div>
      </div>
    </>
  );
};
export default Banking;
