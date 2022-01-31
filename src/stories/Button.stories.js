import Button from "../components/Button/Button";
import StylesProvider from "../providers/StylesProvider";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    variant: { table: { disable: true } },
  },
};

const Template = (args) => <Button {...args} />;

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
