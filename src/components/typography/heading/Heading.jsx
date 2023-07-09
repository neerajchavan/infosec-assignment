import { HEADING } from "./constants";
import PropTypes from "prop-types";
import "./Heading.styles.scss";

export default function Heading({ children, type, className = "" }) {
    switch (type) {
        case HEADING.PRIMARY:
            return <h2 className={`primary-heading ${className}`}>{children}</h2>;
        case HEADING.SECONDARY:
            return <h4 className={`secondary-heading ${className}`}>{children}</h4>;
        default:
            return <h2 className={`primary-heading ${className}`}>{children}</h2>;
    }
}

Heading.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    type: PropTypes.oneOf(Object.values(HEADING)),
    className: PropTypes.string,
};
