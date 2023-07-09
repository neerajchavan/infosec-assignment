import PropTypes from "prop-types";
import "./VerticalSeperator.styles.scss";

const VerticalSeparator = ({ height = "372px", className = "" }) => {
    return (
        <>
            <div className={`vertical-divider ${className}`} style={{ height }}></div>
        </>
    );
};

VerticalSeparator.propTypes = {
    height: PropTypes.string,
    className: PropTypes.string,
};

export default VerticalSeparator;
