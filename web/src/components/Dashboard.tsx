import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Carousel from "react-bootstrap/Carousel";
import {
  faCaretDown,
  faCaretUp,
  faArrowLeft,
  faArrowRight,
  faArrowDown,
  faChevronDown,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import {
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
  FormControl,
} from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import ProgressBar from "react-bootstrap/ProgressBar";
import CustomChart from "./CustomChart";
import ListGroup from "react-bootstrap/ListGroup";
import Slider from "react-slick";
import RangeSlider from "react-rangeslider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-rangeslider/lib/index.css";

import "./Banking.css";

const Dashboard = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  //Loan slider
  const [loanSliderValue, setLoanSliderValue] = useState(100);
  const handleLoanSliderChange = (value: any) => {
    setLoanSliderValue(value);
  };

  const [termSliderValue, setTermSliderValue] = useState(12);
  const handleTermSliderChange = (value: any) => {
    setTermSliderValue(value);
  };

  const [installSliderValue, setInstallSliderValue] = useState(0);
  const handleInstallSliderChange = (value: any) => {
    setInstallSliderValue(value);
  };

  const fomatAmount = (amount: number) => {
    return new Intl.NumberFormat("en-US").format(amount);
  };
  const [InterestRate, setInterestRate] = useState(2.5);
  const [payback, setPayback] = useState<any>(0);
  const [totalAmount, setTotalAmount] = useState<any>(0);

  //const InterestRate = 2.5;

  const handleResort = () => {
    setLoanSliderValue(100);
    setTermSliderValue(12);
    setInstallSliderValue(0);
  };
  //creating the ref
  const customeSlider = useRef<Slider | null>(null);
  const [sliderSettings, setSliderSettings] = useState({
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  });
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const previous = () => {
    const sliderElement = customeSlider.current;
    if (sliderElement) sliderElement.slickPrev();
  };
  const next = () => {
    const sliderElement = customeSlider.current;
    if (sliderElement) sliderElement.slickNext();
  };

  const loanCalculator = () => {
    var interestPerYear = (loanSliderValue * InterestRate) / 100;
    var monthlyInterest = interestPerYear / 12;
    let monthlyPayment = monthlyInterest + loanSliderValue / termSliderValue;
    //let totalInterestCost = monthlyInterest * termSliderValue;
    let totalRepayment = monthlyPayment * termSliderValue;

    setPayback(monthlyPayment.toFixed(4));
    setTotalAmount(totalRepayment.toFixed(4));
  };

  useEffect(() => {
    loanCalculator();
  }, [loanSliderValue, termSliderValue]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col lg="6" sm="6">
            <Card className="card-stats balance">
              <Card.Body>
                <Row>
                  <Col xs="12">
                    <div className="tabs-section">
                      <div className="tabs-title float-left">Balance</div>

                      <div className="tabs-data">
                        <Tab.Container
                          id="left-tabs-example"
                          defaultActiveKey="first">
                          <Nav variant="pills" className="float-right">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              {" "}
                              <CustomChart />
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              {" "}
                              This is a Tab 2 chart
                              <CustomChart />
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </div>

                    <div className="icon-big text-center icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                </Row>

                <Row className="progress_bar">
                  <Col lg="4">
                    <div className="progressbar1">
                      <span className="progressbar_title">TL</span>
                      <span className="progressbar_show">
                        {" "}
                        <ProgressBar variant="info" now={60} />
                      </span>
                      <span className="per">50%</span>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="progressbar2">
                      <span className="progressbar_title">EURO</span>
                      <span className="progressbar_show">
                        {" "}
                        <ProgressBar now={40} />
                      </span>
                      <span className="per">30%</span>
                    </div>
                  </Col>
                  <Col lg="4">
                    <div className="progressbar3">
                      <span className="progressbar_title">USD</span>
                      <span className="progressbar_show">
                        {" "}
                        <ProgressBar variant="danger" now={20} />
                      </span>
                      <span className="per">20%</span>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats slider-wrapper credit-cards">
              <Card.Body>
                <h6>Credit Cards</h6>
                <Slider {...sliderSettings} ref={customeSlider}>
                  <div key={1}>
                    <img src={"/images/image1.png"} />
                  </div>
                  <div key={2}>
                    <img src={"/images/image2.png"} />
                  </div>
                  <div key={3}>
                    <img src={"/images/image3.png"} />
                  </div>
                  <div key={4}>
                    <img src={"/images/image4.png"} />
                  </div>
                </Slider>
                <div style={{ textAlign: "center" }}>
                  <FontAwesomeIcon
                    icon={faChevronLeft}
                    className="cstm-fb-icon"
                    onClick={previous}
                  />
                  {/* <button className="button" onClick={previous}>
                    Previous
                  </button> */}
                  <span className="credit_card_title"> Maximum Card</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="cstm-fb-icon"
                    onClick={next}
                  />
                </div>
                <div className="credit_description">
                  <div className="credit">
                    <span className="credit_title">Current Debt</span>
                    <span className="credit_amt">1.400,00 TL</span>
                  </div>
                  <div className="credit">
                    <span className="credit_title">Credit Available</span>
                    <span className="credit_amt">8.500,00 TL</span>
                  </div>
                  <div className="credit">
                    <span className="credit_title">Cut off Date</span>
                    <span className="credit_amt cut_off_date">03.05.2017</span>
                  </div>
                </div>
                <div className="credit_button_wrapper">
                  <button className="my-button">Pay the Debt</button>
                  <button className="my-button acitivity">Activity</button>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="2" sm="6">
            <Card className="card-stats sidebar payments">
              <Card.Body>
                <h6>Recurring Payments</h6>
                <Slider {...settings}>
                  <div>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-green">
                          <span className="round-circle-date-title">
                            <span>08</span> May
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Utility Bill</div>
                          <div className="demo_texts">
                            Lorem ipsum dolor sit amet
                          </div>
                          <div className="p_price">186,00 TL</div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-green">
                          <span className="round-circle-date-title">
                            <span>22</span> May
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">House Rent</div>
                          <div className="demo_texts">
                            Lorem ipsum dolor sit amet
                          </div>
                          <div className="p_title">House TL</div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-green">
                          <span className="round-circle-date-title">
                            <span>22</span> May
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Phone Bill</div>
                          <div className="demo_texts">
                            Lorem ipsum dolor sit amet
                          </div>
                          <div className="p_price">70,00 TL</div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-green">
                          <span className="round-circle-date-title">
                            <span>08</span> May
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Utility Bill</div>
                          <div className="demo_texts">
                            Lorem ipsum dolor sit amet
                          </div>
                          <div className="p_price">186,00 TL</div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-green">
                          <span className="round-circle-date-title">
                            <span>22</span> May
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">House Rent</div>
                          <div className="demo_texts">
                            Lorem ipsum dolor sit amet
                          </div>
                          <div className="p_price">2.800,00 TL</div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-green">
                          <span className="round-circle-date-title">
                            <span>22</span> May
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Phone Bill</div>
                          <div className="demo_texts">
                            Lorem ipsum dolor sit amet
                          </div>
                          <div className="p_price">70,00 TL</div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-green">
                          <span className="round-circle-date-title">
                            <span>08</span> May
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Utility Bill</div>
                          <div className="demo_texts">
                            Lorem ipsum dolor sit amet
                          </div>
                          <div className="p_price">186,00 TL</div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-green">
                          <span className="round-circle-date-title">
                            <span>22</span> May
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">House Rent</div>
                          <div className="demo_texts">
                            Lorem ipsum dolor sit amet
                          </div>
                          <div className="p_price">2.800,00 TL</div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-green">
                          <span className="round-circle-date-title">
                            <span>22</span> May
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Phone Bill</div>
                          <div className="demo_texts">
                            Lorem ipsum dolor sit amet
                          </div>
                          <div className="p_price">70,00 TL</div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Slider>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col lg="6" sm="6">
            <Card className="card-stats calculator">
              <Card.Body>
                <Row>
                  <Col>
                    <div className="tabs-section">
                      <div className="tabs-title float-left">
                        Loan Calculator
                      </div>

                      <div className="tabs-data">
                        <Tab.Container
                          id="left-tabs-example"
                          defaultActiveKey="first">
                          <Nav variant="pills" className="float-right">
                            <Nav.Item>
                              <Nav.Link eventKey="first">
                                Consumer Loan
                              </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Auto Loan</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">Mortgage</Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <Tab.Content>
                            <Tab.Pane eventKey="first">
                              <Row>
                                <Col lg="7">
                                  {" "}
                                  <div className="loan_calculator_wrapper loan_leftside">
                                    <div className="loan_wrapper">
                                      <span className="loan_ttile">
                                        Loan Amount
                                      </span>
                                      <span className="loan_amount">
                                        {fomatAmount(loanSliderValue)} TL{" "}
                                      </span>
                                    </div>
                                    <div>
                                      <RangeSlider
                                        min={100}
                                        max={10000000}
                                        value={loanSliderValue}
                                        onChange={handleLoanSliderChange}
                                      />
                                    </div>
                                    <div className="loan_wrapper l_term">
                                      <span className="loan_ttile">Term</span>
                                      <span className="loan_mount">
                                        Mount(s){" "}
                                        <FontAwesomeIcon
                                          icon={faChevronDown}
                                          className="cstm-fb-icon"
                                        />
                                      </span>
                                      <span className="loan_amount">
                                        {termSliderValue}
                                      </span>
                                    </div>

                                    <div>
                                      <RangeSlider
                                        min={1}
                                        max={300}
                                        value={termSliderValue}
                                        onChange={handleTermSliderChange}
                                      />
                                    </div>
                                    {/* 
                                    <div className="loan_wrapper">
                                      <span className="loan_ttile">
                                        Installment Amount
                                      </span>
                                      <span className="loan_amount">
                                        {fomatAmount(installSliderValue)} TL{" "}
                                      </span>
                                    </div>
                                    <div>
                                      <RangeSlider
                                        min={10}
                                        max={1000000}
                                        value={installSliderValue}
                                        onChange={handleInstallSliderChange}
                                      />
                                    </div> */}
                                  </div>
                                </Col>
                                <Col lg="5">
                                  <div className="loan_calculator_wrapper loan_rightside">
                                    <div className="loan_filed">
                                      <span>Per-Annum Rate</span>
                                      <FormControl
                                        type="text"
                                        value={`${InterestRate}%`}
                                        disabled
                                      />
                                    </div>
                                    <div className="loan_filed">
                                      <span>Total Cost</span>
                                      <FormControl
                                        type="text"
                                        id="monthly_payment"
                                        value={`${totalAmount} TL`}
                                        disabled
                                      />
                                    </div>
                                    <div className="loan_filed">
                                      <span>Payback</span>
                                      <FormControl
                                        disabled
                                        type="text"
                                        value={`${payback} TL`}
                                      />
                                    </div>
                                    <div className="payment_plan_wrapper">
                                      <a className="payment_plan">
                                        Payment Plan
                                      </a>
                                      <button
                                        className="my-button payment_button"
                                        onClick={handleResort}>
                                        Resort
                                      </button>
                                    </div>
                                  </div>
                                </Col>
                              </Row>{" "}
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                              {" "}
                              This is a Tab 2 content
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                              {" "}
                              This is a Tab 3 content
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="4" sm="6">
            <Card className="card-stats alper-list">
              <Card.Body>
                <ListGroup as="ol">
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-center">
                    <div className="round-circle-purple"></div>
                    <div className="alper-title me-auto">
                      <div>Alper</div>
                      Tornac
                    </div>
                    <div className="numeric-wrapper">00.00 TL</div>
                    <div className="send-wrapper">Send</div>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup as="ol">
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-center">
                    <div className="round-circle-purple"></div>
                    <div className="alper-title me-auto">
                      <div>Alper</div>
                      Tornac
                    </div>
                    <div className="numeric-wrapper">00.00 TL</div>
                    <div className="send-wrapper">Send</div>
                  </ListGroup.Item>
                </ListGroup>
                <ListGroup as="ol">
                  <ListGroup.Item
                    as="li"
                    className="d-flex justify-content-between align-items-center">
                    <div className="round-circle-purple"></div>
                    <div className="alper-title me-auto">
                      <div>Alper</div>
                      Tornac
                    </div>
                    <div className="numeric-wrapper">00.00 TL</div>
                    <div className="send-wrapper">Send</div>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
          <Col lg="2" sm="6">
            <Card className="card-stats sidebar transactions">
              <Card.Body>
                <h6>Recent Transactions</h6>
                <Slider {...settings}>
                  <div>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-pink">
                          <span className="round-circle-date-title">Today</span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Starbucks</div>
                          <span className="p_price">12,00 TL</span>
                        </div>
                        <div className="m_down">
                          <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-pink">
                          <span className="round-circle-date-title">
                            <span>30</span> Apr
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Salary</div>
                          <span className="p_price">12.000,00 TL</span>
                        </div>
                        <div className="m_up">
                          <FontAwesomeIcon icon={faCaretUp} />
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-pink">
                          <span className="round-circle-date-title">
                            <span>29</span> Apr
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">CarrefourSA</div>
                          <span className="p_price">324,78 TL</span>
                        </div>
                        <div className="m_down">
                          <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-pink">
                          <span className="round-circle-date-title">Today</span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Starbucks</div>
                          <span className="p_price">12,00 TL</span>
                        </div>
                        <div className="m_down">
                          <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-pink">
                          <span className="round-circle-date-title">
                            <span>30</span> Apr
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Salary</div>
                          <span className="p_price">12.000,00 TL</span>
                        </div>
                        <div className="m_up">
                          <FontAwesomeIcon icon={faCaretUp} />
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-pink">
                          <span className="round-circle-date-title">
                            <span>29</span> Apr
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">CarrefourSA</div>
                          <span className="p_price">324,78 TL</span>
                        </div>
                        <div className="m_down">
                          <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                  <div>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-pink">
                          <span className="round-circle-date-title">Today</span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Starbucks</div>
                          <span className="p_price">12,00 TL</span>
                        </div>
                        <div className="m_down">
                          <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-pink">
                          <span className="round-circle-date-title">
                            <span>30</span> Apr
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">Salary</div>
                          <span className="p_price">12.000,00 TL</span>
                        </div>
                        <div className="m_up">
                          <FontAwesomeIcon icon={faCaretUp} />
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                    <ListGroup as="ol">
                      <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start">
                        <div className="round-circle-pink">
                          <span className="round-circle-date-title">
                            <span>29</span> Apr
                          </span>
                        </div>
                        <div className="ms-2 me-auto">
                          <div className="p_title">CarrefourSA</div>
                          <span className="p_price">324,78 TL</span>
                        </div>
                        <div className="m_down">
                          <FontAwesomeIcon icon={faCaretDown} />
                        </div>
                      </ListGroup.Item>
                    </ListGroup>
                  </div>
                </Slider>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Dashboard;
