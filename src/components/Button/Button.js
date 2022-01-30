import React, { useState } from "react";
import PropTypes from "prop-types";
import ButtonOutlinedWrapper from "./ButtonOutlinedWrapper";
import ButtonNormalWrapper from "./ButtonNormalWrapper";

const Button = ({
  size = "medium",
  color = "primary",
  label = "Press me",
  disabled = false,
  checkable = false,
  variant = "normal",
}) => {
  const [focused, setFocused] = useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setFocused(!focused);
  };
  const Wrapper =
    variant === "normal" ? ButtonNormalWrapper : ButtonOutlinedWrapper;

  return (
    <Wrapper
      color={color}
      size={size}
      disabled={disabled}
      onClick={(e) => handleClick(e)}
      focused={focused}
      disables={disabled}
      checkable={checkable}
      className={focused ? "focused" : null}
    >
      {label}
    </Wrapper>
  );
};

Button.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  color: PropTypes.oneOf(["primary", "secondary"]),
  label: PropTypes.string,
  disabled: PropTypes.bool,
  checkable: PropTypes.bool,
  variant: PropTypes.oneOf(["normal", "outlined"]),
};
export default Button;
