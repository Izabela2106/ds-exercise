import React, { useState } from "react";
import PropTypes from "prop-types";
import ButtonOutlinedWrapper from "./ButtonOutlinedWrapper";
import ButtonNormalWrapper from "./ButtonNormalWrapper";
import StylesProvider from "../../providers/StylesProvider";

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
    <StylesProvider>
      <Wrapper
        color={color}
        size={size}
        disabled={disabled}
        onClick={(e) => handleClick(e)}
        focused={focused}
        disables={disabled}
        checkable={checkable}
      >
        {label}
      </Wrapper>
    </StylesProvider>
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
