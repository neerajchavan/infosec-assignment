import PropTypes from "prop-types";
import "./HorizontalSeperator.styles.scss";

const HorizontalSeperator = ({ width = "100%", className = "" }) => {
    return (
        <>
            <div className={`horizontal-divider ${className}`} style={{ width }}></div>
        </>
    );
};

HorizontalSeperator.propTypes = {
    width: PropTypes.string,
    className: PropTypes.string,
};

export default HorizontalSeperator;
