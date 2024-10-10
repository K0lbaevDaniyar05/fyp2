import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import {Col, Container, Nav, Navbar, Row} from "react-bootstrap";
import logo from '../../assets/images/log2.png'

class Header extends Component {
    render() {
        return <Container fluid as="header" data-aos={'fade'}>
            <Row>
                <Col>
                    <Navbar expand="lg">
                        <Navbar.Brand>
                            <Link to="/">
                                {/* Logo */}
                                <img src={logo} alt='logo' style={{borderRadius: '10px'}} />
                            </Link>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarSupportedContent"/>
                        <Navbar.Collapse id="navbarSupportedContent">
                            <Nav className="ml-auto" as="ul">
                                <li className="nav-item">
                                    <NavLink exact={true} to="/" className="nav-link">
                                        Об игре
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact={true} to="/about-me" className="nav-link">
                                        Новости
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink exact={true} to="/contact-me" className="nav-link">
                                        Контакты
                                    </NavLink>
                                </li>
                            </Nav>
                        </Navbar.Collapse>
                    </Navbar>
                </Col>
            </Row>
        </Container>
    }
}

export default Header;