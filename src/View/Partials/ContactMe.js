import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";

class ContactMe extends Component {
  render() {
    return (
      <Container
        className={"contact"}
        fluid
        as={"section"}
        data-aos={"fade-zoom-in"}
      >
        <Row>
          <Col className={"text-center"}>
            <h2 data-aos={"fade-zoom-in"}>Больше информации</h2>
            <Col className="description" data-aos={"fade-zoom-in"}>
              Ниже перечислены веб-сайты где можно узнать больше информации об
              игре, преимущества, недостатки где и как купить: <br />
              <br />
              <a href="https://ru.wikipedia.org/wiki/The_Last_of_Us">
                Wikipedia
              </a>
              <br />
              <a href="https://www.youtube.com/watch?v=cR7hKzKFC5g">
                Видеообзор игры
              </a>
              <br />
              <a href="https://gamestore.kg/product/the-last-of-us-remastered/">
                Купить для PS4
              </a>
              <br />
              <a href="https://www.igromania.ru/game/11774/The_Last_of_Us.html">
                Обзоры и оценки игры
              </a>
            </Col>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactMe;
