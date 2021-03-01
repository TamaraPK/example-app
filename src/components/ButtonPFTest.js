import React from "react";
import PropTypes from "prop-types";
import { ButtonPF } from "@primekey-design-system/pkds";

/**
 * Primary UI component for user interaction
 */
export const ButtonPFTest = ({ primary, backgroundColor, size, label, ...props }) => {
  return <ButtonPF label={label} />;
};

ButtonPFTest.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ButtonPFTest.defaultProps = {
  backgroundColor: null,
  primary: false,
  size: "medium",
  onClick: undefined,
};
