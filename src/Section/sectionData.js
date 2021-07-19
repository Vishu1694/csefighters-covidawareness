import { Container, Row, Col } from "react-bootstrap"

import SecData from '../Screens/secData'

const sectionData = (
    <section id="vaccinationData" className="section-data">
        <Container>
            <div data-aos="zoom-in" className="big-heading text-center">Vaccination Data</div>
            <div style={{ fontSize: 24, fontFamily: 'Montserrat', color: "#fff"}} className="text-center">(Of LPU for 15 Sections...)</div>
            <div><SecData /></div>
        </Container>
    </section>
)

export default sectionData;