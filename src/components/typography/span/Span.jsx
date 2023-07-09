import { SPAN } from "./constants";
import PropTypes from "prop-types";
import "./Span.styles.scss";

export default function Span({ children, type, className = "" }) {
    switch (type) {
        case SPAN.PRIMARY:
            return <span className={`primary-span ${className}`}>{children}</span>;
        default:
            return <span className={`primary-span ${className}`}>{children}</span>;
    }
}

Span.propTypes = {
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
    type: PropTypes.oneOf(Object.values(SPAN)),
    className: PropTypes.string,
};
