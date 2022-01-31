import mapImage2 from "../../assets/images/mapImage2.svg";
import styled from "styled-components";

export const RegisterBox = styled.div`
  height: 600px;
  width: 900px;
  display: flex;
  align-items: center;
  background-color: #e9ecef;
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
  background-color: #0077b6;
  @media (max-width: 620px) {
    display: none;
  }
`;
export const WelcomeMessage = styled.div`
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  font-weight: normal;
  font-size: 24px;
  h3 {
    text-align: center;
  }
  @media (max-width: 800px) {
    font-size: 18px;
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
  background-color: #dce0e5;
  border: 1px solid #adb5bd;
  color: #495057;
  padding: 0.5rem;

  :focus {
    outline: 0.8px solid #495057;
  }
`;
