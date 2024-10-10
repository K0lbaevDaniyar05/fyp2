import React, { Component } from "react";
import Header from "../Partials/Header";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../Partials/Footer";
import ContactMe from "../Partials/ContactMe";

class About extends Component {
  render() {
    return (
      <div>
        <Header />
        <Container
          className={"about-me"}
          as={"section"}
          fluid={true}
          data-aos={"zoom-in"}
        >
          <Row>
            <Col className={"text-center background-animation-dark"}>
              <h2>Новости</h2>
              <Col className={"description"} sm={{ span: 8, offset: 2 }}>
                <a
                  class="news_hover"
                  href="https://tech.liga.net/other/article/v-yanvare-vyhodit-serial-po-igre-the-last-of-us-pochemu-ego-stoit-posmotret"
                >
                  В январе выходит сериал по игре The Last of Us. Почему его
                  стоит посмотреть
                </a>
                <br />
                <br />
                <a
                  class="news_hover"
                  href="https://3dnews.ru/1078373/eto-budet-ili-velikolepno-ili-uzhasno-noviy-treyler-seriala-the-last-of-us-voodushevil-igrokov-pered-skoroy-premeroy"
                >
                  «Это будет или великолепно, или ужасно»: новый трейлер сериала
                  The Last of Us воодушевил игроков перед ...
                </a>
                <br />
                <br />
                <a
                  class="news_hover"
                  href="https://europaplus.ru/news/the-last-of-us-vyshel-polnyy-treyler-seriala"
                >
                  The Last of Us: вышел полный трейлер сериала | Новости кино
                </a>
                <br />
                <br />
                <a
                  class="news_hover"
                  href="https://cyber.sports.ru/dota2/1113928613-interz-uxodit-iz-cloud9-novyj-trejler-the-last-of-us-i-drugie-novosti-.html"
                >
                  Interz уходит из Cloud9, новый трейлер The Last of Us и другие
                  новости утра
                </a>
                <br />
                <br />
                <a
                  class="news_hover"
                  href="https://www.igromania.ru/news/121286/Startoval_finalnyy_yetap_golosovaniya_Vybor_igrokov_v_ramkah_The_Game_Awards.html"
                >
                  Стартовал финальный этап голосования «Выбор игроков» в рамках
                  The Game Awards
                </a>
                <br />
                <br />
              </Col>
            </Col>
          </Row>
        </Container>
        <ContactMe />
        <Footer />
      </div>
    );
  }
}

export default About;
