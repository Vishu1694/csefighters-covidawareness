import { useState, useEffect } from "react"
import { Dropdown, Row, Col } from "react-bootstrap"
import AnimatedNumber from 'react-animated-number'
import data from '../data'

const SecData = () => {
    const SecSelector = () => {
        return (
            data.secVacData.map(sec => <Dropdown.Item onClick={() => setCurrentSection(sec.section)}>{sec.section}</Dropdown.Item>)
        )
    }
    const allSections = SecSelector()
    const [currentSection, setCurrentSection] = useState('K19KB')
    return (
        <div className="text-center">
            <Dropdown style={{margin: 35}}>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                    Section: {currentSection}
                </Dropdown.Toggle>

                <Dropdown.Menu style={{overflow: 'auto'}}>
                    {allSections}
                </Dropdown.Menu>
            </Dropdown>
            <Row data-aos="fade-up" style={{color: "#fff"}}>
                <Col style={{textShadow: '2px 2px 18px #ff0000'}} xs={12} md={4}>
                    <AnimatedNumber
                        style={{
                            transition: '5s ease-out',
                            fontSize: 36
                        }}
                        stepPrecision={5}
                        value={data.secVacData.find(sec => sec.section === currentSection).totalStudents}
                    // formatValue={n=> `${n}`}
                    />
                    <div style={{fontSize: 24}}>Total Students</div>
                </Col>
                <Col style={{ textShadow: '-4px 7px 18px rgb(79 255 108)' }} xs={12} md={4}>
                    <AnimatedNumber
                        style={{
                            transition: '5s ease-out',
                            fontSize: 36
                        }}
                        stepPrecision={5}
                        value={data.secVacData.find(sec => sec.section === currentSection).vaccinated}
                    // formatValue={n=> `${n}`}
                    />
                    <div style={{fontSize: 24}}>Vaccinated</div>
                </Col>
                <Col style={{ textShadow: '2px 2px 18px #ff0000' }} xs={12} md={4}>
                    <AnimatedNumber
                        style={{
                            transition: '5s ease-out',
                            fontSize: 36
                        }}
                        stepPrecision={5}
                        value={data.secVacData.find(sec => sec.section === currentSection).nonVaccinated}
                    // formatValue={n=> `${n}`}
                    />
                    <div style={{fontSize: 24}}>Non Vaccinated</div>
                </Col>
            </Row>
        </div>
    )
}

export default SecData