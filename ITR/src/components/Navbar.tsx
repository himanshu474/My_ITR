import { Stack } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';

const CustomNavbar = () => {
    return (
        <Navbar bg="light" expand="md"   style={{ boxShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
            <Container className="d-flex justify-content-between " style={{marginBottom:"30px"}}>
                <Navbar.Brand href="#home">
                    <img
                        src={"https://myitronline.com/build/assets/myitronline-logo-BscHGXkW.svg"}
                        className="align-start"
                        alt="Your Logo"
                        width="100px"
                />
                </Navbar.Brand>
                <Stack gap={5} direction='horizontal'>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-0 ml-0">
                            <NavDropdown title="E-filing Services" id="efiling-dropdown">
                                <NavDropdown.Item href="#efiling1">Option 1</NavDropdown.Item>
                                <NavDropdown.Item href="#efiling2">Option 2</NavDropdown.Item>
                                <NavDropdown.Item href="#efiling3">Option 3</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Start-up a Business" id="startup-dropdown">
                                <NavDropdown.Item href="#startup1">Option 1</NavDropdown.Item>
                                <NavDropdown.Item href="#startup2">Option 2</NavDropdown.Item>
                                <NavDropdown.Item href="#startup3">Option 3</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Tax Compliance" id="tax-dropdown">
                                <NavDropdown.Item href="#tax1">Option 1</NavDropdown.Item>
                                <NavDropdown.Item href="#tax2">Option 2</NavDropdown.Item>
                                <NavDropdown.Item href="#tax3">Option 3</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Trademark and Copyright" id="trademark-dropdown">
                                <NavDropdown.Item href="#trademark1">Option 1</NavDropdown.Item>
                                <NavDropdown.Item href="#trademark2">Option 2</NavDropdown.Item>
                                <NavDropdown.Item href="#trademark3">Option 3</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Guides" id="trademark-dropdown">
                                <NavDropdown.Item href="#Guides1">Option 1</NavDropdown.Item>
                                <NavDropdown.Item href="#Guides2">Option 2</NavDropdown.Item>
                                <NavDropdown.Item href="#Guides3">Option 3</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Tools" id="trademark-dropdown">
                                <NavDropdown.Item href="#Toolss1">Option 1</NavDropdown.Item>
                                <NavDropdown.Item href="#Tools2">Option 2</NavDropdown.Item>
                                <NavDropdown.Item href="#Tools3">Option 3</NavDropdown.Item>
                            </NavDropdown>

                        </Nav>
                        <Button style={{ backgroundColor: "green" , width: "9rem", height:"40px", marginLeft:"5rem"}}>
                            Login / Signup
                        </Button>
                    </Navbar.Collapse>
        </Stack >
            </Container>
        </Navbar>
  );
};

export default CustomNavbar;
