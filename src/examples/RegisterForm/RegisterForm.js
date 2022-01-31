import React, { useRef } from "react";
import {
  ImageBox,
  RegisterBox,
  ButtonsBox,
  Form,
  FormBox,
  Input,
  WelcomeMessage,
  GenderButtonsBox,
} from "./RegisterFormWrapper";
import Button from "../Button/Button";

const RegisterForm = () => {
  return (
    <RegisterBox>
      <FormBox>
        <WelcomeMessage>
          <h3>Welcome!</h3>
          <h3>Register to access new functions!</h3>
        </WelcomeMessage>
        <Form>
          <Input placeholder="login" type="text" />
          <Input placeholder="email" type="email" />
          <Input placeholder="password" type="password" />
          <Input placeholder="repeat password" type="password" />
          <GenderButtonsBox>
            <Button label="male" value="male" checkable={true} size="small" />
            <Button label="female" checkable={true} size="small" />
          </GenderButtonsBox>
          <ButtonsBox>
            <Button label="Log in" size="large" />
            <Button label="Sign up" size="large" />
          </ButtonsBox>
        </Form>
      </FormBox>
      <ImageBox />
    </RegisterBox>
  );
};

export default RegisterForm;
