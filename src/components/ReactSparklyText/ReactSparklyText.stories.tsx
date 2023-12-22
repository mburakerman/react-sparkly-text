import type { Meta, StoryObj } from "@storybook/react";
import { ReactSparklyText } from "./ReactSparklyText";

const meta = {
  title: "Components/ReactSparklyText",
  component: ReactSparklyText,
} satisfies Meta<typeof ReactSparklyText>;

export default meta;

type Story = StoryObj<typeof ReactSparklyText>;

export const Default: Story = {
  args: {
    children: <span>Lorem</span>,
  },
};

export const WithText: Story = {
  render: () => (
    <div>
      Lorem ipsum dolor <ReactSparklyText size={10}>sit</ReactSparklyText> amet.
    </div>
  ),
  args: {
    children: <span>Lorem</span>,
  },
};
