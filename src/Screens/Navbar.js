import { Navbar } from "react-bootstrap";
import logo from '../assets/logo.svg'
import incredible8 from '../assets/INCREDIBLE-8.svg'

const Navs = () => {
    return (
        <Navbar bg="primary" expand="lg" variant="dark" className="d-flex justify-content-center align-items-center">
            <Navbar.Brand data-aos="fade-left" href="#home">
                <img
                    src={logo}
                    height='45'
                    className="d-inline-block align-top"
                    alt="CSE FIGHTERS"
                />
            </Navbar.Brand>
            <div className="navbarDivider d-none d-md-block"></div>
            <Navbar.Brand className="d-none d-md-block" style={{marginLeft: 20}} data-aos="fade-right" href="#home">
                <img
                    src={incredible8}
                    height='25'
                    className="d-inline-block align-top"
                    alt="CSE FIGHTERS"
                />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end'>
                <Nav className="justify-content-end">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">K19SP</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Button target="_blank" href="https://selfregistration.cowin.gov.in/" variant="outline-light">Apply for Vaccination</Button>
                </Nav>
            </Navbar.Collapse> */}
        </Navbar>
    )
}

export default Navs;