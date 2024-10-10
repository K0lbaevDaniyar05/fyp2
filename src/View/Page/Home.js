import React, { Component } from "react";
import Header from "../Partials/Header";
import { Col, Container, Row } from "react-bootstrap";
import TimelineRow from "../Partials/Timeline/TimelineRow";
import Companies from "../../Data/Companies";
import Skills from "../../Data/Skills";
import Projects from "../../Data/Projects";
import Footer from "../Partials/Footer";
import ContactMe from "../Partials/ContactMe";
import background from "../../assets/images/glav.jpg";
import img1 from "../../assets/images/djoel2.jpg";
import img2 from "../../assets/images/elli2.jpg";
import img3 from "../../assets/images/sara.jpg";
import img4 from "../../assets/images/tommy2.jpg";
import img5 from "../../assets/images/tess2.jpg";
import img6 from "../../assets/images/marlin2.jpg";

class Home extends Component {
  /**
   *
   * @param props
   */
  constructor(props) {
    super(props);
    this.state = {
      companies: Companies.getCompanies(),
      skills: Skills.getSkills(),
      projects: Projects.getProjects(),
      images: [img1, img2, img3, img4, img5, img6],
    };
  }

  /**
   *
   * @returns {*}
   */
  render() {
    return (
      <div>
        <Header />

        <Container className="hero" fluid as="section">
          <Row>
            <Col
              style={{
                backgroundImage: `url(${background})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "50vh",
              }}
              className="background-animation-light"
            >
              <Row className="align-items-center">
                <Col
                  className="text-center description"
                  data-aos={"fade-up-left"}
                ></Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <Container className="description" fluid as="section">
          <Row>
            <Col
              className="text-center background-animation-dark"
              data-aos="fade-up"
            >
              <h2>Об игре:</h2>
              <Col>
                The Last of Us (букв. с англ. — «Последние из нас», в России
                официально издаётся под названием «Одни из нас») — компьютерная
                игра в жанре action-adventure с элементами survival horror и
                стелс-экшена, разработанная студией Naughty Dog и изданная Sony
                Computer Entertainment.
                <br />
                <br />
                Игра была выпущена в 2013 году эксклюзивно для консоли
                PlayStation 3. В 2014 году была выпущена обновленная версия игры
                для PlayStation 4 — The Last of Us Remastered. 2 сентября 2022
                вышел ремейк оригинальной игры для PlayStation 5, получивший
                название The Last of Us Part I[5].
                <br />
                <br />
                Действие игры происходит в постапокалиптическом будущем на
                территории бывших Соединённых Штатов Америки спустя двадцать лет
                после глобальной пандемии, вызванной опасно мутировавшим грибком
                кордицепс. Сюжет посвящён путешествию главных героев —
                контрабандиста Джоэла и девочки-подростка Элли, сыгранных Троем
                Бейкером и Эшли Джонсон с помощью технологии захвата движения.
                Креативным директором и сценаристом выступил Нил Дракманн.
                Музыка к игре написана композитором Густаво Сантаолальей. The
                Last of Us была высоко оценена критиками за повествование,
                развитие отношений главных персонажей, а также за визуальный и
                звуковой дизайн.
                <br />
                <br />
                Игра получила множество наград, в том числе в номинации «Игра
                года». The Last of Us стала коммерческим успехом: в первую
                неделю продажи составили более 1,3 миллиона копий игры, а к
                апрелю 2018 года совокупные продажи всех изданий игры превысили
                17 миллионов копий. Naughty Dog выпустила ряд загружаемых
                дополнений, в том числе сюжетное The Last of Us: Left Behind. В
                декабре 2016 года было анонсировано продолжение под названием
                The Last of Us Part II, выход которого состоялся 19 июня 2020
                года.
                <br />
                <br />
              </Col>
            </Col>
          </Row>
        </Container>
        <Container className="timeline" fluid as="section">
          <Row>
            <Col>
              <h2 className="text-center" data-aos={"fade-down"}>
                Персонажи
              </h2>
              <div className="timeline-wrapper">{this.getCompanies()}</div>
            </Col>
          </Row>
        </Container>
        <ContactMe />
        <Footer />
      </div>
    );
  }

  /**
   *
   * @returns {[]}
   */
  getCompanies = () => {
    let companies = [];
    this.state.companies.forEach((company, index) => {
      companies.push(
        <TimelineRow
          key={company.id}
          id={company.id}
          side={company.side}
          name={company.name}
          description={company.description}
          month={company.month}
          year={company.year}
          responsibilities={company.responsibilities}
          image={this.state.images[index]}
        />
      );
    });
    return companies;
  };
}

export default Home;
