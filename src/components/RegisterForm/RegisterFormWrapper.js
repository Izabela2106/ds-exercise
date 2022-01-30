import mapImage2 from "../../assets/images/mapImage2.svg";
import styled from "styled-components";

export const RegisterBox = styled.div`
  height: 600px;
  width: 900px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.form.formGreyColor};
  border-radius: 0.7rem;
  box-shadow: 0 0 2rem rgba(255, 255, 255, 0.5);
  margin: 2%;
  min-width: 450px;

  @media (max-width: 900px) {
    width: 100vh;
  }
  @media (max-width: 800px) {
    width: 600px;
  }
  @media (max-width: 620px) {
    width: 80vw;
    justify-content: center;
  }
`;

export const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  height: 100%;
  border-radius: 0 0.7rem 0.7rem 0;
  background: url(${mapImage2});
  background-size: cover;
  background-position: 50%;
  background-color: ${({ theme }) => theme.colors.form.formBlueColor};
  @media (max-width: 620px) {
    display: none;
  }
`;
export const WelcomeMessage = styled.div`
  color: ${({ theme }) => theme.colors.form.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  font-size: ${({ theme }) => theme.fontSize.large};
  h3 {
    text-align: center;
  }
  @media (max-width: 800px) {
    font-size: ${({ theme }) => theme.fontSize.medium};
  }
`;

export const ButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1% 0 0 0;
`;
export const GenderButtonsBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 83%;
  margin: 2% 2% 0 2%;
  > * {
    margin: 2%;
  }
`;

export const FormBox = styled.div`
  width: 450px;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const Input = styled.input`
  width: 80%;
  height: 40px;
  margin: 2%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.form.formInputColor};
  border: 1px solid ${({ theme }) => theme.colors.form.formBorderInputColor};
  color: ${({ theme }) => theme.colors.form.inputTextColor};
  padding: 0.5rem;

  :focus {
    outline: 0.8px solid ${({ theme }) => theme.colors.form.inputTextColor};
  }
`;
