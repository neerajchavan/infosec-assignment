import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { ROUTE, USER_TYPE } from "../../utils/constants";
import useUserType from "../../hooks/useUserType";
import { useState } from "react";
import PasswordInput from "../input/PasswordInput/PasswordInput";
import Heading from "../typography/heading/Heading";
import { HEADING } from "../typography/heading/constants";
import { useMediaQuery } from "react-responsive";
import Span from "../typography/span/Span";

const { JOB_SEEKER, RECRUITER } = USER_TYPE;

const LoginForm = ({ defailtUserType = RECRUITER, hideAlternateLoginText = false }) => {
    const { userLowerCase, alternateUser, userType, updateUserType } = useUserType(defailtUserType);
    const isMobile = useMediaQuery({ maxWidth: 1200 });

    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <>
            {userType && !hideAlternateLoginText && (
                <>
                    <Row>
                        <Col>Login as a {userLowerCase}</Col>
                        <Col>
                            <Link onClick={() => updateUserType(userType === JOB_SEEKER ? RECRUITER : JOB_SEEKER)}>
                                Not a {userLowerCase}, Login as a {alternateUser.toLocaleLowerCase()}
                            </Link>
                        </Col>
                    </Row>
                </>
            )}

            {/* Visible on tablets on mobiles */}
            <div className="d-sm-block d-xl-none text-center mb-5">
                <Heading>Log in to your Account</Heading>
                <Heading type={HEADING.SECONDARY}>Welcome back, please enter your details.</Heading>
            </div>

            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Col sm={12}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email Address:</Form.Label>
                        <Form.Control required />
                        <Form.Control.Feedback type="invalid">Please enter your email</Form.Control.Feedback>
                    </Form.Group>
                </Col>

                <Col sm={12}>
                    <PasswordInput />
                </Col>

                <Col sm={12}>
                    <Row className="justify-content-between align-items-center">
                        <Col xs={6} xl={4}>
                            <Form.Check type="checkbox" label="Remember me" className="form-no-validate" />
                        </Col>
                        <Col xs={6} xl={4} className="text-xl-center text-xs-end p-0">
                            <Link>Forgot password?</Link>
                        </Col>

                        <Col xs={12} xl={4} className="text-end mt-4 mt-xl-auto">
                            <Button type="submit" className={isMobile ? "w-100" : ""}>
                                Log in
                            </Button>
                        </Col>
                    </Row>
                </Col>
            </Form>

            <Col sm={12} className="d-lg-none text-center mt-3">
                <Span>{`Don't have an account? `}</Span>
                <Link to={ROUTE.REGISTER}>Sign Up</Link>
            </Col>
        </>
    );
};

LoginForm.propTypes = {
    defailtUserType: PropTypes.oneOf(Object.values(USER_TYPE)),
    hideAlternateLoginText: PropTypes.bool,
};

export default LoginForm;
