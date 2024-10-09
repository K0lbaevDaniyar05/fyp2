import React, {Component} from "react";
import Header from "../Partials/Header";
import {Col, Container, Row} from "react-bootstrap";
import TimelineRow from "../Partials/Timeline/TimelineRow";
import Companies from "../../Data/Companies";
import SkillBarItem from "../Partials/SkillBar/SkillBarItem";
import Skills from "../../Data/Skills";
import Projects from "../../Data/Projects";
import SingleProject from "../Partials/Project/SingleProject";
import Footer from "../Partials/Footer";
import ContactMe from "../Partials/ContactMe";
import cat from "../../assets/images/cat.jpg"

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
        }
    }

    /**
     *
     * @returns {*}
     */
    render() {
        return (
            <div>
                <Header/>

                <Container className="hero" fluid as="section">
                    <Row>
                        <Col className="background-animation-light">
                            <Row className="align-items-center">
                                <Col className="image" data-aos={'fade-down-right'}>
                                    <img className="img-fluid"
                                         src={cat}
                                         alt="header"
                                         style={{width: '200px', height: '200px'}}
                                         />
                                </Col>
                                <Col className="text-center description" data-aos={'fade-up-left'}>
                                    <h1>John Doe</h1>
                                    <Col>
                                        My awesome description
                                    </Col>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="description" fluid as="section">
                    <Row>
                        <Col className="text-center background-animation-dark" data-aos="fade-up">
                            <h2>I am:</h2>
                            <Col>
                                My awesome introduction
                                <br/>
                                <br/>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                <br/>
                                <br/>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
                                <br/>
                                <br/>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                <br/>
                                <br/>
                            </Col>
                        </Col>
                    </Row>
                </Container>
                <Container className="timeline" fluid as="section">
                    <Row>
                        <Col>
                            <h2 className="text-center" data-aos={'fade-down'}>My Story</h2>
                            <div className="timeline-wrapper">
                                {this.getCompanies()}
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Container className="skills" fluid as="section">
                    <Row>
                        <Col>
                            <h2 className="text-center" data-aos={'filp-up'}>Skills</h2>
                            <Row>
                                {this.getSkills()}
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container className="projects" fluid as="section">
                    <Row>
                        <Col>
                            <h2 className={"text-center"} data-aos={'flip-down'}>
                                Some Projects
                            </h2>
                            <Row>
                                {this.getProjects()}
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <ContactMe/>
                <Footer/>
            </div>
        );
    }

    /**
     *
     * @returns {[]}
     */
    getCompanies = () => {
        let companies = [];
        this.state.companies.forEach(company => {
            companies.push(<TimelineRow key={company.id} id={company.id} side={company.side} name={company.name}
                                        description={company.description}
                                        month={company.month} year={company.year}
                                        responsibilities={company.responsibilities}/>);
        });
        return companies;
    };

    /**
     *
     * @returns {[]}
     */
    getSkills = () => {
        let skills = [];
        this.state.skills.forEach(skill => {
            skills.push(<SkillBarItem key={skill.id} label={skill.label} progress={skill.progress}/>);
        });
        return skills;
    };

    /**
     *
     * @returns {[]}
     */
    getProjects = () => {
        let projects = [];
        this.state.projects.forEach(project => {
            projects.push(<SingleProject key={project.id} id={project.id} name={project.name} url={project.url}
                                         description={project.description}
                                         thumbnail={project.thumbnail}/>)
        });
        return projects;
    }
}


export default Home;