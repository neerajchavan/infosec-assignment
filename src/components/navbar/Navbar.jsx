import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import InfosecFutureIcon from "../icon/InfosecFutureIcon";
import "./Navbar.styles.scss";
import { ROUTE } from "../../utils/constants";
import { useMediaQuery } from "react-responsive";
import HorizontalSeperator from "../seperator/horizontalseperator/HorizontalSeperator";
import VerticalSeparator from "../seperator/verticalseperator/VerticalSeperator";

const TopNavbar = () => {
    const useContainerFluid = useMediaQuery({ maxWidth: 1400 });

    return (
        <Navbar id="top-navbar" expand="xl" className="bg-body-tertiary">
            <Container fluid={useContainerFluid ? true : false}>
                <Navbar.Brand className="me-5">
                    <InfosecFutureIcon />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                <Navbar.Offcanvas placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>
                            <InfosecFutureIcon />
                        </Offcanvas.Title>
                    </Offcanvas.Header>

                    <HorizontalSeperator className="d-lg-none" />

                    <Offcanvas.Body>
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto column-gap-lg-4 column-gap-xl-5 row-gap-3 text-start">
                                <Nav.Link>Home</Nav.Link>
                                <Nav.Link>Browse Jobs</Nav.Link>
                                <Nav.Link>Browse Candidates</Nav.Link>
                                <Nav.Link>For Jobseekers</Nav.Link>
                                <Nav.Link>For Recruiters</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>

                        <Nav className="d-flex align-items-center column-gap-sm-3 column-gap-xl-5 action-btn-container">
                            <NavLink to={ROUTE.LOGIN}>Login</NavLink>

                            <VerticalSeparator height="50px" className="d-xl-none" />

                            <NavLink to={ROUTE.REGISTER}>
                                <Button size="lg">Register</Button>
                            </NavLink>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    );
};

export default TopNavbar;
