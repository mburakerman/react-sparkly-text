import type { Meta, StoryObj } from "@storybook/react";
import { SparklyText } from "./SparklyText";

const meta = {
  title: "Components/SparklyText",
  component: SparklyText,
} satisfies Meta<typeof SparklyText>;

export default meta;

type Story = StoryObj<typeof SparklyText>;

export const Default: Story = {
  args: {
    children: <span>Lorem</span>,
  },
};

export const WithText: Story = {
  render: () => (
    <div>
      Lorem ipsum dolor <SparklyText size={10}>sit</SparklyText> amet.
    </div>
  ),
  args: {
    children: <span>Lorem</span>,
  },
};
