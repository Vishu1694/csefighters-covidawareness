import { Row, Col, Container, Navbar } from 'react-bootstrap'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'

import logo from '../assets/logo.svg'

const Footer = () => {
    return (
        <footer style={{color: "#fff", overflowX: 'hidden', overflowY: 'hidden'}}>
            <Container data-aos="zoom-out">
                <Row>
                    <Col className="footer-logo" xs={12} md={4}>
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                height='45'
                                className="d-inline-block align-top"
                                alt="CSE FIGHTERS"
                            />
                        </Navbar.Brand>
                        <br/>
                    </Col>
                    <Col xs={12} md={4}>
                        <div style={{fontSize: 24}} className="subHeading">Page Links</div>
                        <ul>
                            <li><a style={{textDecoration: 'none', color: '#fff'}} href="#ourWork">Our Introduction</a></li>
                            <li><a style={{textDecoration: 'none', color: '#fff'}} href="#awareness">Awareness</a></li>
                            <li><a style={{textDecoration: 'none', color: '#fff'}} href="#symptoms">Symptoms</a></li>
                            <li><a style={{textDecoration: 'none', color: '#fff'}} href="#vaccinationData">Vaccination Data</a></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={4}>
                        <div style={{ fontSize: 24 }} className="subHeading">Our Contact</div>
                        <a style={{ textDecoration: 'none', color: '#fff', marginRight: 20 }} target="_blank" href="https://instagram.com/covidhelp65" ><FaInstagram size={32} /></a>
                        
                        <a style={{ textDecoration: 'none', color: '#fff' }} target="_blank" href="https://wa.me/918533094947"><FaWhatsapp size={32} /></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer