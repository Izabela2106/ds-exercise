import Button from "../components/Button/Button";
import StylesProvider from "../providers/StylesProvider";

export default {
  title: "Button",
  component: Button,
};

const Template = (args) => (
  <StylesProvider>
    <Button {...args} />
  </StylesProvider>
);

export const Normal = Template.bind({});
Normal.args = {
  color: "primary",
  variant: "normal",
};
export const Version2 = Template.bind({});
Version2.args = {
  color: "primary",
  variant: "outlined",
};
