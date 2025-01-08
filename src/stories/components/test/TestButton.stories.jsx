import Button from "../../../components/ui/test/Button";

export default {
  title: "Test/Button",
  component: Button,
};

export const Small = () => <Button size="sm">Small Button</Button>;
export const Medium = () => <Button size="md">Medium Button</Button>;
export const Large = () => <Button size="lg">Large Button</Button>;
export const ExtraLarge = () => <Button size="xl">Extra Large Button</Button>;
