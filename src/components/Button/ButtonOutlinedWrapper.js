import styled from "styled-components";
import ButtonWrapper from "./ButtonWrapper";

const ButtonOutlinedWrapper = styled(ButtonWrapper)`
  background-color: ${(props) =>
    props.checkable && props.focused
      ? `${props.theme.colors[props.color].ligth4}`
      : `${props.theme.colors.basic.transparent}`};
  outline: 1px solid ${(props) => `${props.theme.colors[props.color].main}`};
  color: ${(props) => `${props.theme.colors[props.color].main}`};
  border-radius: 5px;
  :hover {
    background-color: ${(props) => `${props.theme.colors[props.color].ligth3}`};
  }
  :active {
    background-color: ${(props) =>
      !props.checkable ? `${props.theme.colors[props.color].ligth4}` : null};
  }
  :disabled {
    background-color: ${(props) => `${props.theme.colors.basic.disabled}`};
    color: ${(props) => `${props.theme.colors.basic.disabledText}`};
  }
`;

export default ButtonOutlinedWrapper;
