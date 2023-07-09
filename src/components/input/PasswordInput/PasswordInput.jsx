import { Form } from "react-bootstrap";
import { useState } from "react";
import EyeOpenIcon from "../../icon/EyeOpenIcon";
import EyeClosedIcon from "../../icon/EyeClosedIcon";
import PropTypes from "prop-types";
import "./PasswordInput.styles.scss";

const PasswordInput = ({ name = "", label = "Password:" }) => {
    const [showPassword, setShowPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Form.Group className="mb-3 password-container">
            <Form.Label>{label}</Form.Label>

            <Form.Control name={name} type={showPassword ? "text" : "password"} required className="password-input" />

            <span onClick={handleTogglePassword} className="eye-icon">
                {showPassword ? <EyeOpenIcon /> : <EyeClosedIcon />}
            </span>

            <Form.Control.Feedback type="invalid">Please enter your password</Form.Control.Feedback>
        </Form.Group>
    );
};

PasswordInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
};

export default PasswordInput;
