import { Button, Col, Form, Row } from "react-bootstrap";
import Heading from "../components/typography/heading/Heading";
import VerticalSeparator from "../components/seperator/verticalseperator/VerticalSeperator";
import LoginForm from "../components/loginform/LoginForm";
import useUserType from "../hooks/useUserType";
import { Link } from "react-router-dom";
import { ROUTE, USER_TYPE } from "../utils/constants";
import PasswordInput from "../components/input/PasswordInput/PasswordInput";
import { useMediaQuery } from "react-responsive";
import { HEADING } from "../components/typography/heading/constants";
import Span from "../components/typography/span/Span";

const { JOB_SEEKER, RECRUITER } = USER_TYPE;

const RegistrationPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 1200 });
    const { userLowerCase, alternateUser, userType, updateUserType } = useUserType();

    const RegisterAsOtherUser = (
        <Link onClick={() => updateUserType(userType === JOB_SEEKER ? RECRUITER : JOB_SEEKER)}>
            Not a {userLowerCase}, Register as a {alternateUser}!
        </Link>
    );

    return (
        <>
            <Row className="align-items-center h-75">
                <Col xl={7} className="text-start">
                    <Heading className="d-none d-lg-block mt-5">Register as an {userLowerCase} today.</Heading>

                    {/* Visible on tablets on mobiles */}
                    <div className="d-sm-block d-lg-none text-center mt-5">
                        <Heading>Create an account</Heading>
                        <Heading type={HEADING.SECONDARY}>Please enter your details</Heading>
                    </div>

                    <Row className="row-gap-4 row-gap-lg-5 mt-5">
                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Full Name:</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Col>

                        <Col lg={6}>
                            <Form.Group>
                                <Form.Label>Email Id:</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Col>

                        <Col lg={6}>
                            <PasswordInput />
                        </Col>

                        <Col lg={6}>
                            <PasswordInput label="Confirm Password:" />
                        </Col>

                        {/* Visible on tablets on mobiles */}
                        <Form.Label className="d-lg-none mt-0 mb-5 d-flex align-items-center justify-content-between">
                            Register as: {userLowerCase}
                            {RegisterAsOtherUser}
                        </Form.Label>

                        <Col lg={4}>
                            <Button size="lg" className="w-100">
                                {isMobile ? "Sign Up" : "Register"}
                            </Button>
                        </Col>

                        <Col sm={12} className="d-lg-none text-center mt-3">
                            <Span>Already have an account? </Span>
                            <Link to={ROUTE.LOGIN}>Login</Link>
                        </Col>

                        <Col lg={8} className="text-end align-self-center d-none d-lg-block">
                            {RegisterAsOtherUser}
                        </Col>
                    </Row>
                </Col>

                <Col lg={1} className="d-none d-xl-block">
                    <VerticalSeparator className="w-50" />
                </Col>

                <Col lg={4} className="d-none d-xl-block text-center">
                    <Heading>Already registered ?</Heading>
                    <Heading>Log in to your {userLowerCase} account</Heading>

                    <Row className="text-start row-gap-5 mt-5">
                        <LoginForm hideAlternateLoginText />
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default RegistrationPage;
