import { Button, Col, Row } from "react-bootstrap";
import Card from "../components/card/Card";
import LoginForm from "../components/loginform/LoginForm";
import { USER_TYPE } from "../utils/constants";
import { useMediaQuery } from "react-responsive";

const LoginPage = () => {
    const isMobile = useMediaQuery({ maxWidth: 1200 });

    return (
        <>
            <Row className="flex-column justify-content-between align-items-end h-100">
                <Col lg={{ span: 12 }} xl={{ span: 5 }}>
                    <Card className={isMobile ? "border-0 box-shadow-0 mt-5" : ""}>
                        <LoginForm userType={USER_TYPE.JOB_SEEKER} hideAlternateLoginText={isMobile} />
                    </Card>
                </Col>

                <Col lg={{ span: 12 }} xl={{ span: 5 }} className="mb-5 d-none d-xl-block">
                    <Button className="w-100" size="lg">
                        Signup/Login as an Employer
                    </Button>
                </Col>
            </Row>
        </>
    );
};

export default LoginPage;
