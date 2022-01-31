import RegisterForm from "../examples/RegisterForm/RegisterForm";
import Filter from "../examples/Filters/Filters";

export default {
  title: "UsageExample",
  component: RegisterForm,
};

const Template = () => <RegisterForm />;
const TemplateFilter = () => <Filter />;

export const Form = Template.bind({});
export const Filters = TemplateFilter.bind({});
