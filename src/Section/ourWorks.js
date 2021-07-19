import { Container, Row, Col, Button } from "react-bootstrap"
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { GiLoveInjection } from 'react-icons/gi'

import carousel from '../Screens/carousel'

const ourWorks = (
    <section id="ourWork" className="our-works d-flex justify-content-center align-items-center flex-column">
        <Container>
            <Row>
                <Col data-aos="fade-up" style={{ padding: 12 }} xs={12} md={6} className="d-flex justify-content-center align-items-center flex-column">
                    <div className="heading">Hello There!</div><br/>
                    <div className="subHeading text-center">We are a team of 15 people who gathers verified information and shares it with the needed ones. We are arranging beds, oxygen, helping in finding slots, clearing doubts about vaccines and their myths and update them through latest news.</div>
                    <Row style={{marginTop: 35, width: '100%'}} className="text-center">
                        <Col>
                            <Button style={{width: 150}} target="_blank" href="https://instagram.com/covidhelp65" variant="outline-light">< FaInstagram size={20} /> DM Us</Button>
                        </Col>
                        <Col>
                            <Button style={{ width: 150 }} target="_blank" href="https://wa.me/918533094947" variant="outline-light">< FaWhatsapp size={20} /> Whatsapp Us</Button>
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 35}}>
                        <Col>
                            <Button target="_blank" href="https://selfregistration.cowin.gov.in/" variant="outline-light">< GiLoveInjection size={20} /> Apply for Vaccination</Button>
                        </Col>
                    </Row>
                </Col>
                <Col data-aos="fade-down" xs={12} md={6}>{carousel}</Col>
            </Row>
        </Container>
    </section>
)

export default ourWorks;