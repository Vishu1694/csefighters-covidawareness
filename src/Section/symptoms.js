import { Container, Row, Col } from "react-bootstrap"

import Fever from '../assets/symptoms/Fever.png'
import Cough from '../assets/symptoms/Cough.png'
import ShortBreath from '../assets/symptoms/ShortBreath.png'
import SoreThroat from '../assets/symptoms/SoreThroat.png'

const symptoms = (
    <section id="symptoms" className="symptoms">
        <Container>
            <div data-aos="zoom-in" className="big-heading text-center">Symptoms</div>
            <Row style={{ overflowX: 'hidden', overflowY: 'hidden', padding: "35px 0" }} >
                <Col xs={6} md={3}>
                    <div className="symptoms-container">
                        <img data-aos="fade-up" className="symptom-image" src={Fever}></img>
                        <div data-aos="fade-down" className="symptom-text">
                            Fever
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className="symptoms-container">
                        <img data-aos="fade-up" className="symptom-image" src={Cough}></img>
                        <div data-aos="fade-down" className="symptom-text">
                            Cough
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className="symptoms-container">
                        <img data-aos="fade-up" className="symptom-image" src={ShortBreath}></img>
                        <div data-aos="fade-down" className="symptom-text">
                            Short Breath
                        </div>
                    </div>
                </Col>
                <Col xs={6} md={3}>
                    <div className="symptoms-container">
                        <img data-aos="fade-up" className="symptom-image" src={SoreThroat}></img>
                        <div data-aos="fade-down" className="symptom-text">
                            Sore Throat
                        </div>
                    </div>
                </Col>
            </Row>
            <div data-aos="fade-up" style={{ marginTop: 25, color: "#fff", fontSize: 22, fontFamily: 'Montserrat'}} className="text-center">If you find yourself suffering from any of the above symptoms, please get tested for Covid ASAP.</div>
        </Container>
    </section>
)

export default symptoms;