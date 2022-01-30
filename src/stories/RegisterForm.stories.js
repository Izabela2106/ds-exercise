import StylesProvider from "../providers/StylesProvider";
import RegisterForm from "../components/RegisterForm/RegisterForm";

export default {
  title: "UsageExample",
  component: RegisterForm,
};

const Template = () => (
  <StylesProvider>
    <RegisterForm />
  </StylesProvider>
);

export const Form = Template.bind({});
