import { Container, Row, Col } from "react-bootstrap"

import keepClean from '../assets/keepClean.png'
import getVaccinated from '../assets/getVaccinated.png'
import stayHealthy from '../assets/stayHealthy.png'
import wearMask from '../assets/wearMask.png'


const awareness = (
    <section id="awareness" className="awareness">
        <Container>
            <div data-aos="zoom-in" className="big-heading text-center">Awareness</div>
            <Row style={{overflowX: 'hidden', overflowY: 'hidden'}}>
                <Col data-aos="fade-right" style={{ padding: "25px 0" }} xs={12} md={4} className="d-flex justify-content-center align-items-center">
                    <div className="awareness-image-container">
                        <img src={keepClean} className="awareness-image"></img>
                    </div>
                </Col>
                <Col data-aos="fade-left" style={{ padding: "25px 0" }} xs={12} md={8} className="text-center d-flex justify-content-center align-items-center flex-column">
                    <div className="heading">Keep Yourself Clean</div>
                    <div className="subHeading">Keep yourself hygienic and fresh to prevent yourself from all the viruses and bacteria prevailing around you in day to day work and lifestyle.</div>
                </Col>

                <Col data-aos="fade-right" style={{ padding: "25px 0" }} xs={12} md={4} className="d-flex justify-content-center align-items-center">
                    <div className="awareness-image-container">
                        <img src={getVaccinated} className="awareness-image"></img>
                    </div>
                </Col>
                <Col data-aos="fade-left" style={{ padding: "25px 0" }} xs={12} md={8} className="text-center d-flex justify-content-center align-items-center flex-column">
                    <div className="heading">Get Vaccinated</div>
                    <div className="subHeading">Get yourself Vaccinated with both doses to be further secure yourself from Covid and stop the spread among others.</div>
                </Col>

                <Col data-aos="fade-right" style={{ padding: "25px 0" }} xs={12} md={4} className="d-flex justify-content-center align-items-center">
                    <div className="awareness-image-container">
                        <img src={stayHealthy} className="awareness-image"></img>
                    </div>
                </Col>
                <Col data-aos="fade-left" style={{ padding: "25px 0" }} xs={12} md={8} className="text-center d-flex justify-content-center align-items-center flex-column">
                    <div className="heading">Follow Sound Habits</div>
                    <div className="subHeading text-center">Follow Good Habits and Diet and avoid food from outlets for few days to keep yourself safe from the virus.</div>
                </Col>
                
                <Col data-aos="fade-right" style={{ padding: "25px 0" }} xs={12} md={4} className="d-flex justify-content-center align-items-center">
                    <div className="awareness-image-container">
                        <img src={wearMask} className="awareness-image"></img>
                    </div>
                </Col>
                <Col data-aos="fade-left" style={{ padding: "25px 0" }} xs={12} md={8} className="text-center d-flex justify-content-center align-items-center flex-column">
                    <div className="heading">Always Wear a Mask</div>
                    <div className="subHeading text-center">Always wear a mask while going out and wear one even in your own homes if you have been tested as Covid Positive to avoid spreading it to family and others.</div>
                </Col>
            </Row>
        </Container>
    </section>
)

export default awareness;