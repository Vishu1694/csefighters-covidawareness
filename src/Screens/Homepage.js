import { Container } from "react-bootstrap"

import ourWorks from '../Section/ourWorks'
import awareness from '../Section/awareness'
import sectionData from '../Section/sectionData'
import symptoms from '../Section/symptoms'

const Homepage = () => {
    return (
        <div className='homepage'>
            {ourWorks}
            {awareness}
            {symptoms}
            {sectionData}
        </div>
    )
}

export default Homepage