import React, { Component } from "react";
import Header from "../Partials/Header";
import Footer from "../Partials/Footer";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  Row,
} from "react-bootstrap";

class Contact extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container
          fluid={true}
          as={"section"}
          className={"contact-me"}
          data-aos={"flip-down"}
        >
          <Row>
            <Col className="background-animation-light">
              <h2 className={"text-center"}>Contact Me</h2>
              <Col className="description text-center">
                You can contact me by instagram{" "}
                <a href="https://www.instagram.com/danchik_kolbaev_/">
                  danchik_kolbaev_
                </a>
                <br />
                <br />
                or filling the following form:
              </Col>
            </Col>
          </Row>
        </Container>
        <Container
          fluid={true}
          as={"section"}
          className={"contact-me"}
          data-aos={"flip-up"}
        >
          <Row>
            <Col>
              <Col className="form" sm={{ span: 8, offset: 2 }}>
                <Form onSubmit={this.submitForm.bind(this)}>
                  <FormGroup>
                    <Row>
                      <Col sm={6}>
                        <FormLabel>
                          Name: <span className="required"></span>
                        </FormLabel>
                        <FormControl placeholder={"Name"} required />
                      </Col>
                      <Col sm={6}>
                        <FormLabel>
                          Email: <span className="required"></span>
                        </FormLabel>
                        <FormControl
                          type={"email"}
                          placeholder={"Email"}
                          require
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <FormLabel>
                          Subject: <span className="required"></span>
                        </FormLabel>
                        <FormControl placeholder={"Subject"} required />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col>
                        <FormLabel>
                          Message: <span className="required"></span>
                        </FormLabel>
                        <FormControl
                          as={"textarea"}
                          placeholder={"Message"}
                          required
                        />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup className={"text-center"}>
                    <Button type={"submit"}>Submit</Button>
                  </FormGroup>
                </Form>
              </Col>
            </Col>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }

  submitForm = (event) => {
    event.preventDefault();
  };
}

export default Contact;
