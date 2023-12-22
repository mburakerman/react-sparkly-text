import type { Meta, StoryObj } from "@storybook/react";

import { SparklyText } from "./SparklyText";

const meta = {
  title: "Components/SparklyText",
  component: SparklyText,
} satisfies Meta<typeof SparklyText>;

export default meta;

type Story = StoryObj<typeof SparklyText>;

const TextWithSparklyText = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet, consectetur <span>adipisicing</span> elit.
    </p>
  );
};

export const Default: Story = {
  args: {
    children: <span>Lorem</span>,
  },
};

export const WithText: Story = {
  render: () => <TextWithSparklyText />,
};

export const WithSizeProp: Story = {
  args: {
    children: <span>İpsum</span>,
    size: 15,
  },
};
