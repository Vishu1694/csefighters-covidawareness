
import caro1 from '../assets/caro1.jpeg'
import caro2 from '../assets/caro2.jpeg'
import caro3 from '../assets/caro3.jpeg'

import { Carousel } from 'react-bootstrap';

const carousel = (
    <Carousel>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={caro1}
                alt="First slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={caro2}
                alt="Second slide"
            />
        </Carousel.Item>
        <Carousel.Item>
            <img
                className="d-block w-100"
                src={caro3}
                alt="Third slide"
            />
        </Carousel.Item>
    </Carousel>
);

export default carousel;