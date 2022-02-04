import React from "react";
import PropTypes from "prop-types";

function Card({ children, required }) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: required ? "rgba(0,0,0,0.4)" : "#fff",
        color: required ? "#fff" : "#000",
      }}
    >
      {children}
    </div>
  );
}
Card.defaultProps = {
  required: false,
};
Card.protoTypes = {
  children: PropTypes.node.isRequired,
  required: PropTypes.bool,
};
export default Card;
