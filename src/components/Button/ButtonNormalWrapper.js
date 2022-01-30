import styled from "styled-components";
import ButtonWrapper from "./ButtonWrapper";

const ButtonNormalWrapper = styled(ButtonWrapper)`
  height: ${(props) => `${props.theme.size.button[props.size]}`};
  padding: ${(props) => `${props.theme.padding.button[props.size].top}`}
    ${(props) => `${props.theme.padding.button[props.size].right}`};
  background-color: ${(props) => `${props.theme.colors[props.color].main}`};
  outline: ${(props) =>
    props.focused && props.checkable
      ? `2px solid ${props.theme.colors.basic.white}`
      : "none"};
  outline-offset: -5px;
  color: ${(props) => `${props.theme.colors.basic.buttonText}`};

  :hover {
    background-color: ${(props) => `${props.theme.colors[props.color].dark1}`};
  }
  :active {
    background-color: ${(props) =>
      !props.checkable ? `${props.theme.colors[props.color].dark2}` : null};
  }
  :disabled {
    background-color: ${(props) => `${props.theme.colors.basic.disabled}`};
    color: ${(props) => `${props.theme.colors.basic.disabledText}`};
  }
`;

export default ButtonNormalWrapper;
