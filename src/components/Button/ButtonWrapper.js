import styled from "styled-components";

const ButtonWrapper = styled.button`
  margin: 20px;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  border: none;
  height: ${(props) => `${props.theme.size.button[props.size]}`};
  padding: ${(props) => `${props.theme.padding.button[props.size].top}`}
    ${(props) => `${props.theme.padding.button[props.size].right}`};
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Trebuchet MS", serif;
  font-size: ${(props) => `${props.theme.fontSize[props.size]}`};
  :hover {
    cursor: pointer;
  }
  :active {
    cursor: pointer;
  }
  :disabled {
    outline: none;
    cursor: auto;
  }
`;

export default ButtonWrapper;
